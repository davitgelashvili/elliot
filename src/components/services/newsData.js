function NewsData(){
    let data = fetch('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=20').then(respons => respons.json())
    .then(result => result)

    let list = data?.map( (item)=>{
        console.log(item)
    } )
    
    return(
        <div>{list}</div>
    )
}

export default NewsData