import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import style from './FormList.module.css'


let checkedPhone = (value) => {
  return value.replace(/[^+\d]/g, '')
}

function FormList(props) {
  let { handleSubmit } = props

  return (
    <div className={style.formList}>
      Оформление заказа
      <form onSubmit={handleSubmit}>
        <label>
          <Field
            name="methods"
            component="input"
            type="radio"
            value="divelery"
           
          />{''}
          Доставка
          </label>
        <label>
          <Field
            name="methods"
            component="input"
            type="radio"
            value="takeAway"

          />{' '}
          Самовывоз
          </label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="Имя"
            className={style.Input}
          />
        </div>
        <div>
          <Field
            name="phone"
            component="input"
            type="text"
            normalize={checkedPhone}
            className={style.Input}
            placeholder="Ваш номер телефона"
          />
        </div>
        <div>Сумма заказа:{props.priceDev}</div>
        <div>
          <button disabled={props.price < props.minPrice} type="submit" className={style.Button}>
            Заказать
        </button>
        </div>
      </form>
    </div>
  );
}


export default connect((state) => {

  return {
    priceDev: state.OrderPrice.PriceDev,
    price: state.OrderPrice.Price,
    minPrice: state.OrderPrice.minPrice,
    initialValues: {
      methods: 'divelery',
      phone: '+375',
    }
  }
}
)(reduxForm({
  form: 'FormList',
  onSubmit: (value) => { console.log(value) },
})(FormList))