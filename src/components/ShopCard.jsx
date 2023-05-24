import PropTypes from 'prop-types';

function ShopCard(props) {

    const { name, color, img, price } = props.card;

    return (
        <article className="card">
            <header className="card_header">
                <div className='card_title'>{name}</div>
                <div className="card_description">{color}</div>
            </header>
            <div className="card_image">
                <img className="img_card"src={img}></img>
            </div>
            <div className='card_footer'>
                <div className="card_price">${price}</div>
                <div className="card_button">ADD TO CART</div>
            </div>
        </article>
    )
}

ShopCard.propTypes = {
    card: PropTypes.object,
    name: PropTypes.string,
    color: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.string
};

export default ShopCard;