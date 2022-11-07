import { Post } from "../../interfaces/Posts";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import "./styles.css";
import { Link } from "react-router-dom";

type Props = {
  post: Post;
};

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

    alert("eliminado");
  }
};

const editPost = () => {
  alert("editar");
};

const PostCard = ({ post }: Props) => {
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
    </div>
  );
};

export default PostCard;
