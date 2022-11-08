import { Post } from "../../interfaces/Posts";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { deletePost as deleteRedux } from "../../redux/slices/postsSlices";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

import "./styles.css";

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  const dispatch = useDispatch();

  const deletePost = async (id: number) => {
    console.log("borrar", id);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id.toString()}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      dispatch(deleteRedux(id));
      toast.success("Post deleted successfully!");
      return data;
    }
  };

  return (
    <div className="postCard__div">
      <h3 className="postCard__title">{post.title}</h3>
      <span className="postCard__body">{post.body}</span>

      <section>
        <DeleteIcon
          sx={{ color: "red" }}
          onClick={() => {
            deletePost(post.id);
          }}
        />
        <Link to={`/posts/${post.id}`}>
          <EditIcon sx={{ color: "black" }} />
        </Link>
      </section>

      <Toaster />
    </div>
  );
};

export default PostCard;
