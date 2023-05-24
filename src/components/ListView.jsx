import PropTypes from 'prop-types';
import ShopItem from './ShopItem';

function ListView(props) {
    const { items } = props;

    return (
        <main className='container_list'>
         {items.map((item, index) => {
                return <ShopItem item={item} key={index} />
            })}
        </main>
    )
}

ListView.propTypes = {
    items: PropTypes.array,
}

export default ListView;


// Компоненту ListView от Store мы передаём всего одно свойство items — массив с данными,
// каждый элемент из которого затем уже отображается с помощью ShopItem для товаров, которые мы хотим отобразить.

// То есть ListView отображает много ShopItem. На один товар — один ShopItem.