import PropTypes from 'prop-types';

function ShopItem(props) {

    const { name, color, img, price } = props.item;

    return (
        <article className="item col-5">
            <div className="item_image">
                <img className="img_item"src={img}></img>
            </div>
            <div className='item_title'><span>{name}</span></div>
            <div className="item_description"><span>{color}</span></div>
            <div className="item_price"><span>${price}</span></div>
            <div className="item_button">
                <div className="button">ADD TO CART</div>
            </div>
        </article>
    )
}

ShopItem.propTypes = {
    item: PropTypes.object,
    name: PropTypes.string,
    color: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.string
}

export default ShopItem;