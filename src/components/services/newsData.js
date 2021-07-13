import React, {useState, useEffect} from 'react';

function NewsData(){
    // const ItemLimit = props.limit;
    const [items, setItems] = useState([]);

    useEffect(async () => {
        const fetchFn = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=1&_limit=20`,
        );
        const result = await fetchFn.json();
     
        setItems(result);
    },[]);

    let data = items.map( (item)=>{
        <div>
            <h1>{item.title}</h1>
            <div>{item.body}</div>
        </div>
        console.log(item.title);
    } )

    return(
        <>11
        {
            items.map( (item)=>{
                <div>111
                    <h1>{item.title}</h1>
                    <div>{item.body}</div>
                </div>
                console.log(item.title);
            } )
        }
        </>
    )
}

export default NewsData