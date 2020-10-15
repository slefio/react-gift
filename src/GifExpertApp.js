import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



export const GifExpertApp  = () => {
    //const categories = ['sherck','iron man','batman'];
    const [categories, setCategories] = useState(['goku']);

    /*const handleAdd = () => {
        setCategories( cats => [...cats,'sebastian']);
    }*/

    return (<>
                <h2>GifExpertApp</h2>
                <AddCategory setCategories={setCategories}/>
                <hr/>
                
                <ol>
                    {
                        categories.map((category,i) => (
                            <GifGrid 
                                category={category} 
                                key={i}
                            />
                            
                        ))
                    }
                </ol>
            </>
            );
}

