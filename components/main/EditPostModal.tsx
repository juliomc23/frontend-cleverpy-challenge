import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import EditIcon from "@mui/icons-material/Edit";

import { useDispatch } from "react-redux";
import { updatePost } from "../../redux/slices/postsSlices";

import { useParams } from "react-router-dom";

import { Post } from "../../interfaces/Posts";

import toast, { Toaster } from "react-hot-toast";

type Values = {
  title?: string;
  body?: string;
};

type Props = {
  id: number;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditPostModal({ id }: Props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //Edit post functionality
  const dispatch = useDispatch();

  const [singlePost, setSinglePost] = React.useState<Post>();

  const getSingleProduct = async () => {
    const response = await fetch(
      `http://jsonplaceholder.typicode.com/posts/${id}`
    );

    const data = await response.json();

    setSinglePost(data);
  };

  React.useEffect(() => {
    getSingleProduct();
  }, []);

  const [newValues, setNewValues] = React.useState<Values>({
    title: singlePost?.title,
    body: singlePost?.body,
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNewValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const editPost = async (id: number, e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            title: newValues.title,
            body: newValues.body,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        dispatch(updatePost(data));
        toast.success("Post edited successfully!");
        return data;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <EditIcon
        onClick={handleClickOpen}
        sx={{ color: "#3483eb", cursor: "pointer" }}
      />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Edit the post"}</DialogTitle>
        <DialogContent>
          <form onSubmit={(e) => editPost(id, e)}>
            <input
              name="title"
              type="text"
              defaultValue={singlePost?.title}
              onChange={handleChange}
            />
            <textarea
              name="body"
              defaultValue={singlePost?.body}
              onChange={handleChange}
            />

            <button onClick={handleClose}>SAVE</button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
