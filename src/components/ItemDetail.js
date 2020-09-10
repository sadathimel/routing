import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  // console.log(match)
  // useEffect(() => {
  //   fetchItem();
  // }, []);

  let { id } = useParams();
  const [item, setItem] = useState([]);
  console.log(item);

  const [comment, setComment] = useState([]);
  // console.log(comment);
  
  const [photo, setPhoto] = useState([]);
  console.log(photo);

  // const fetchItem = async () => {
  //   const data = await fetch(
  //     `https://jsonplaceholder.typicode.com/posts?userId/${match.params.id}`
  //   );
  //   const items = await data.json();
  //   setItem(item);
  //   console.log(item.userId)
  // };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setComment(data);
      });
  }, []);  
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPhoto(data);
      });
  }, []);

  return (
    <div>
      <div>
        <h1>Title:{item.title}</h1>
        <p>Body:{item.body}</p>
        <p>Phone: {item.phone}</p>
      </div>
      <div>
        <h1>Comment</h1>
        <img src={photo.thumbnailUrl} alt="" />
        <p>name:{comment.name}</p>
        <p>name:{comment.email}</p>
        <p>name:{comment.body}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
