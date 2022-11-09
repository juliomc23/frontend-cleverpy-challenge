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

import { Post } from "../../interfaces/Posts";

import toast from "react-hot-toast";

import { useTranslation } from "react-i18next";
import { tkeys } from "../../translations";

import "./styles.css";

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
  const { t, i18n } = useTranslation();
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
        disableScrollLock //así evitamos que se haga un padding en el body
      >
        <DialogTitle>{t(tkeys.modal_post.info)}</DialogTitle>
        <DialogContent>
          <form
            onSubmit={(e) => editPost(id, e)}
            className="modal__form--editPost"
          >
            <label className="form__label--text">
              {t(tkeys.modal_post.title)}
            </label>
            <input
              name="title"
              type="text"
              defaultValue={singlePost?.title}
              className="form__input--editTitlePost"
              onChange={handleChange}
            />
            <label className="form__label--text">
              {t(tkeys.modal_post.description)}
            </label>
            <textarea
              name="body"
              defaultValue={singlePost?.body}
              className="form__textarea--editBodyPost"
              onChange={handleChange}
            />

            <button className="noselect" onClick={handleClose}>
              <span className="text">{t(tkeys.modal_post.save)}</span>
              <span className="icon">
                <svg viewBox="0 0 18 15" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6 10.7 1.8 6.5.4 7.9 6 13.5l12-12L16.6.1 6 10.7Z"
                    fill="#ffffff"
                    fillRule="evenodd"
                    className="fill-000000 fill-39ab35"
                  ></path>
                </svg>
              </span>
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
