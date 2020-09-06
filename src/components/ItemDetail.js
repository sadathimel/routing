import React, { useEffect, useState } from "react";

function ItemDetail ({match}){
// console.log(match)
  // useEffect(() => {
  //   fetchItem();
  // }, []);

  const [item, setItem] = useState({});

  // const fetchItem = async () => {
  //   const data = await fetch(
  //     `https://jsonplaceholder.typicode.com/posts?userId=${match.params.id}`
  //   );
  //   const items = await data.json();
  //   setItem(item);
  //   console.log(item.userId)
  // };

  useEffect(()=> {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${match.params.id}`
      .then(res => res.json())
      .then(data =>{
        setItem(data)
      } )
    );
  },[])

  return (
    <div>
      <h1>name:{item.name}</h1>
    </div>
  );
};

export default ItemDetail;
