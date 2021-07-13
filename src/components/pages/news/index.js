import React, {useState, useEffect} from 'react';

function News(){
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchMyAPI() {
          let response = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=20')
          response = await response.json()
          setItems(response)
        }
    
        fetchMyAPI()
    }, [])

    let xxx = JSON.stringify(items);

    return (
        <div className="row">
            {
                items.map(
                    item=> {
                        console.log(item);
                        <div>1111 </div>
                    }
                )
            }
        </div>
    )
}

export default News