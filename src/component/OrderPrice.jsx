import React from 'react';
import { connect } from 'react-redux'
import { OrderPriceAction, OrderPriceActionDev } from '../store/OrderOrice';


class OrderPrice extends React.Component {
    componentDidUpdate() {
        if (this.props.menuOrderList.length > 0) {
            this.result = this.props.menuOrderList.map((order) => order.price).reduce((result, order) => Math.round((result + order) * 100) / 100)
            if (this.props.formInfo.values.methods === 'takeAway' || this.result > this.props.maxPrice) {
                this.props.OrderPrice(this.result)
            } else if (this.props.formInfo.values.methods === 'divelery' && this.result < this.props.maxPrice) {
                this.props.OrderPriceDev(this.result)
            }
        } else {
            this.props.OrderPrice(0)
        }


    }

    render() {
        console.log('render')
        return (
            <div>
                Сумма заказа {this.props.price}
            </div>
        )
    }
}

let mapStatetoProps = (state) => {
    return {
        price: state.OrderPrice.Price,
        maxPrice: state.OrderPrice.maxPrice,
        menuOrderList: state.MainList.Menu,
        formInfo: state.form.FormList

    }
}
let mapDispatchtoProps = (dispatch) => {
    return {
        OrderPrice: (price) => dispatch(OrderPriceAction(price)),
        OrderPriceDev: (price) => dispatch(OrderPriceActionDev(price))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(OrderPrice)