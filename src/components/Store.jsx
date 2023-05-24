import { useState } from 'react';
import PropTypes from 'prop-types';
import CardsView from './CardsView';
import ListView from './ListView';
import IconSwitch from './IconSwitch';

// Реализуйте компонент Store, который управляет состоянием приложения, хранит список товаров в атрибуте products.

function Store(props) {

  const [icon, setIcon] = useState('view_list');
  const isModule = icon === 'view_module';
  const { products } = props;

  const switchHandler = () => {
    isModule ? setIcon('view_list') : setIcon('view_module');
  }

  return (
    <>
      <IconSwitch icon={icon} onSwitch={switchHandler} />
      {isModule ? <ListView items={products} /> : <CardsView cards={products} />}
    </>
  )

}

Store.propTypes = {
  products: PropTypes.array.isRequired,
  icon: PropTypes.string,
}

export default Store;
