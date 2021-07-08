import './style.scss';

function TextPage(props){
    return(
        <>
        <h1 className="title">{props.title}</h1>
        <div className="desc">
            {props.desc}
        </div>
        </>
    )
}

export default TextPage