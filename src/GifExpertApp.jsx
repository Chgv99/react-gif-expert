import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState([  ]);
    
    const onAddCategory = ( newCategory ) => {

        if ( categories.includes(newCategory)) return;

        // categories.push('Doraemon');
        // setCategories( cat => [...cat, 'Valorant'] );
        setCategories( [ newCategory, ...categories ] );
    };

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
            
            {/* Input */}
            <AddCategory 
                // setCategories={ setCategories } 
                onNewCategory={ (value) => onAddCategory(value) }
            />


            { 
                categories.map( category => (
                    <GifGrid 
                        key={category} 
                        category={category}
                    />
                ))
            }
            
        </>
    )
}
