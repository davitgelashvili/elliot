function Item(props) {
    const ItemBg = {
        backgroundImage: 'url(' + props.img + ')'
    }

    return(
        <div className="slider__item d-flex justify-content-center align-items-center flex-column" style={ItemBg}>
            <h1 className="slider__item--title">{props.name}</h1>
            <div className="slider__item--desc">
                {props.desc}
            </div>
        </div>
    )
}

export default Item