import { useEffect } from "react";
import PostCard from "../postCard/PostCard";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/slices/postsSlices";
import { RootState } from "../../redux/store";

import "./styles.css";

const Posts = () => {
  const getPostsState = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch();

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://jsonplaceholder.typicode.com/posts");

      if (response.ok) {
        const data = await response.json();
        const mapedData = data.slice(0, 25);
        return dispatch(getPosts(mapedData));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className="main__section--Posts">
      {getPostsState.map((post) => {
        return <PostCard post={post} key={post.id} />;
      })}
    </section>
  );
};

export default Posts;
