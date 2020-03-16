import React, {useState, useEffect} from 'react';

function Shop(){
    //this will only run when the component mounts
    useEffect(()=>{
      fetchItems()
    },[]);
    const [items, setItems]=  useState([]);
    //async is added because the data is coming from an external database
    const fecthItems = async ()=>{
      const data = await fetch('https://www.yudaay.com');
      const materials = await data.json();
      console.log(materials.items);
      setItems(materials.items)
    }
  return(
    <div>
      {materials.map(item =>{
        <h1 key={materials.itemid}>{materials.name}</h1>
      })}
    </div>
  );
}
export default Shop;
