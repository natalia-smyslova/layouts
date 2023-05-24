import PropTypes from 'prop-types';

// Компоненту CardsView от Store мы передаём свойство cards — массив с данными, 
// каждый элемент из которого затем уже отображается с помощью карточки товара ShopCard.

// То есть CardsView отображает много карточек ShopCard. На один товар — одна карточка ShopCard

import ShopCard from './ShopCard';


function CardsView(props) {

    const { cards } = props;

    return (
        <main className='container_module'>
            {cards.map((card, index) => {
                return <ShopCard card={card} key={index} />
            })}
        </main>

    )
}

CardsView.propTypes = {
    cards: PropTypes.array
}


export default CardsView;