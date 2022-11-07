import React, { useEffect, useState } from "react";
import PostCard from "../postCard/PostCard";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../../interfaces/Posts";
import { getPosts } from "../../redux/slices/postsSlices";
import { RootState } from "../../redux/store";

import "./styles.css";

type Props = {};

const Posts = (props: Props) => {
  // const getPostsState = useSelector((state: RootState) => state.posts);
  // const dispatch = useDispatch();

  const [posts, setPosts] = useState<Post[]>();

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://jsonplaceholder.typicode.com/posts");

      if (response.ok) {
        const data = await response.json();
        const mapedData = data.slice(0, 25);
        setPosts(mapedData);
      }
    } catch (error) {
      console.error(error);
    }

    // return dispatch(getPosts(mapedData));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // posts?.map((post) => console.log(post));
  // console.log(getPostsState.posts);

  return (
    <section className="main__section--Posts">
      {posts?.map((post) => {
        //Se queja typescript por que el primer array viene del reducer
        return <PostCard post={post} key={post.id} />;
      })}
    </section>
  );
};

export default Posts;
