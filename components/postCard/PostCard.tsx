import { Post } from "../../interfaces/Posts";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deletePost as deleteRedux } from "../../redux/slices/postsSlices";
import toast, { Toaster } from "react-hot-toast";
import EditPostModal from "../main/EditPostModal";

import "./styles.css";

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  const dispatch = useDispatch();

  const deletePost = async (id: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id.toString()}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      const data = await response.json();
      dispatch(deleteRedux(id));
      toast.success("Post deleted successfully!");
      return data;
    }
  };

  return (
    <div className="postCard__div">
      <h3 className="postCard__title">{post.title}</h3>
      <span className="postCard__body">{post.body}</span>

      <section className="postCard__section--Buttons">
        <DeleteIcon
          sx={{ color: "#bf1313", cursor: "pointer" }}
          onClick={() => {
            deletePost(post.id);
          }}
        />
        <EditPostModal id={post.id} />
      </section>

      <Toaster />
    </div>
  );
};

export default PostCard;
