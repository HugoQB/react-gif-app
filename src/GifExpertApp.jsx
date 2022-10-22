import React from 'react';
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

  const onAddCategory = (e) => {

    if( categories.includes(e)) return;

      setCategories([...categories, e]);
  }
 
  return (
    <>

    <h1>Gif Expert App</h1>

    <AddCategory
    //  setCategory={ setCategories } 
      onNewCategory = { onAddCategory }
     />

        {
        categories.map((category, i) => 
            ( 
            <GifGrid
              key={ category }
              category = { category }
            /> 
            )
        )
        }
    </>
  )
}
