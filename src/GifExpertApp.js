import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Sailor Moon"]);

  // const handleAdd = () => {
  //     //setCategories([...categories, "Sailor Moon"]);
  //     setCategories(cats => [...cats, "Sailor Moon"]); //el set puede recibir un callback el primer arg es el valor del estado anterior y luego tiene que regresar el nuevo estado
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid  
          key={ category }
          category={ category } />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
