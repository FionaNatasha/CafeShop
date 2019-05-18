import React from 'react';
import OrderList from './OrderList';
import FormList from './FormList';
import OrderPrice from './OrderPrice'
import style from './MainList.module.css'
import { connect } from 'react-redux';
import { increment, decrement, deleteDish } from '../store/MainListReducer';




let MainList = (props) => {
  return (<div className={style.MainList}>

    <div className={style.Price}> Минимальная сумма заказа:{props.price.minPrice} pуб.
    Доставка:{props.price.diveleryPrice}руб. Бесплатная доставка:{props.price.maxPrice} руб.
    </div>
    
    <div className={style.MainOrderlist}>
      {props.menuOrderList.map(
        (menuSection) =>
          <OrderList key={menuSection.id} {...menuSection} getIncrement={props.getIncrement}
            getDecrement={props.getDecrement}
            deleteDish={props.deleteDish} />)
      }
    </div>
    <div className={style.OrderPrice}><OrderPrice /></div>
    <div className={style.MainFormlist}><FormList /></div>
  </div>
  )
}



let mapStateToProps = (state) => {
  return {
    menuOrderList: state.MainList.Menu,
    price: state.OrderPrice
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    getIncrement: (id) => dispatch(increment(id)),
    getDecrement: (id) => dispatch(decrement(id)),
    deleteDish: (id) => dispatch(deleteDish(id)),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainList);