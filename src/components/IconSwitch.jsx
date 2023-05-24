import PropTypes from 'prop-types';

// Иконка разметки, которая указывает на переключение между типами расположения товаров, 
// реализована в компоненте без состояния IconSwitch, которому от Store мы передаём два свойства:

// icon — название иконки, которую хотим показать. 
// Название иконки соответствует названию класса из библиотеки material icons. 

// В нашем случае это либо view_list, либо view_module.
// onSwitch() — обработчик события, который реагирует на нажатие пользователем на иконку.

// <IconSwitch icon={"view_list"} onSwitch={() => console.log("change state here")}/>


function IconSwitch(props) {
    const { onSwitch, icon } = props;

    return (
        <header className='switcher'>
            <span className='icon' onClick={onSwitch}>{icon}</span>
        </header>
    )
}

IconSwitch.propTypes = {
    onSwitch: PropTypes.func,
    icon: PropTypes.string
}

export default IconSwitch;