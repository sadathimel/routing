import React, { useEffect, useState } from 'react';
import "../App.css";
import { Link } from 'react-router-dom';

const Shop = () => {
    useEffect(()=>{
        fetchItems();
    },[])

    const [items, setItems] = useState([])

    const fetchItems = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const items = await data.json();
        setItems(items);
        // console.log(items)

    }
    return (
      <div>
        {items.map((item) => (
          <h1 key={item.id}>
            {item.title}
            <Link to={`/shop/${item.id}`}><button>Details</button></Link>
          </h1>
        ))}
      </div>
    );
};

export default Shop;

