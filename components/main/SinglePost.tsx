import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Post } from "../../interfaces/Posts";

type Props = {};

const SinglePost = (props: Props) => {
  const { id } = useParams();

  const hadleChange = () => {};

  const [singlePost, setSinglePost] = useState<Post>();

  const getSingleProduct = async () => {
    const response = await fetch(
      `http://jsonplaceholder.typicode.com/posts/${id}`
    );

    const data = await response.json();

    setSinglePost(data);
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <>
      <h3>Edit the post</h3>
      <form>
        <input
          type="text"
          defaultValue={singlePost?.title}
          // value={singlePost?.title}
          onChange={hadleChange}
        />
        <textarea
          defaultValue={singlePost?.body}
          // value={singlePost?.body}
          onChange={hadleChange}
        />

        <Button>SAVE</Button>
      </form>
    </>
  );
};

export default SinglePost;
