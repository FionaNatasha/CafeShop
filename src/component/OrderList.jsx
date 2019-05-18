import React from 'react';
import style from './OrderList.module.css'


let OrderList = (props) => {

  let getIncrement = (id) => {
    props.getIncrement(id)
  }

  let getDecrement = (id) => {
      props.getDecrement(id)  
  }
  
  let deleteDish = (id) => {
    props.deleteDish(id)
  }

  return (
    <div className={style.Orderlist}>

      <div className={style.dish}>   {props.dish}   </div>

      <div className={style.quantity}>

        <button disabled={props.think===1} className={style.Button} onClick={() => getDecrement(props.id)} >-</button>
        <span >  {props.think}   </span>
        <button className={style.Button} onClick={() => getIncrement(props.id)}>+</button>

      </div>

      <div className={style.price}>Сумма:{props.price} pуб.
      </div>
      <button className={style.buttonDelete} onClick={()=>deleteDish(props.id)}>x</button>
    </div>
  );
}


export default OrderList;