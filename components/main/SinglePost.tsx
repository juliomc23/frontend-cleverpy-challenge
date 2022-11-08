import React, { useEffect, useState } from "react";

import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { updatePost } from "../../redux/slices/postsSlices";

import { useParams } from "react-router-dom";

import { Post } from "../../interfaces/Posts";

type Values = {
  title?: string;
  body?: string;
};

const SinglePost = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const numberId = Number(id);

  const [singlePost, setSinglePost] = useState<Post>();

  const getSingleProduct = async () => {
    const response = await fetch(
      `http://jsonplaceholder.typicode.com/posts/${numberId}`
    );

    const data = await response.json();

    setSinglePost(data);
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  const [newValues, setNewValues] = useState<Values>({
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
    <>
      <h3>Edit the post</h3>
      <form onSubmit={(e) => editPost(numberId, e)}>
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

        <button>SAVE</button>
      </form>

      <Toaster />
    </>
  );
};

export default SinglePost;
