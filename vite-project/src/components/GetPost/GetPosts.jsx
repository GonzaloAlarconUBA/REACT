import { useEffect } from "react";
import { useState } from "react";

export default function GetPosts() {
    const [data, setData] = useState({})

    useEffect(()  => {
        fetch("https://jsonplaceholder.typicode.com/posts/1"
        ).then((response) => response.json()
        ).then((responseData) => setData((responseData)) )
    },[]);

    return(
        <>
         {
            !data ? <> Loading... </> : <>
            <h2>
                Objeto
            </h2>
            <h2>
                Title: {data.title}
            </h2>
            <h2>
                Id: {data.id}
            </h2>
             <p>
                body: {data.body}
             </p>
            
            </> 
         }
        </>
    );

}