import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetail=()=> {
// console.log(match)
  // useEffect(() => {
  //   fetchItem();
  // }, []);

    let { id } = useParams();
  const [item, setItem] = useState([]);
  console.log(item);

  // const fetchItem = async () => {
  //   const data = await fetch(
  //     `https://jsonplaceholder.typicode.com/posts?userId/${match.params.id}`
  //   );
  //   const items = await data.json();
  //   setItem(item);
  //   console.log(item.userId)
  // };

  useEffect(()=> {
    fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data =>{
        setItem(data)
        
      } )
  },[])

  return (
    <div>
      <h1>name:{item.name}</h1>
      <h1>email:{item.email}</h1>
  <p>Phone: {item.phone}</p>
    </div>
  );
};

export default ItemDetail;
