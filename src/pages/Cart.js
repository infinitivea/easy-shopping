import React from "react";
import CartItem from "../components/CartItem";

function Cart() {
  return (
    <div className="container">
      <div className="card shopping-cart">
        <div className="card-header bg-dark text-light">
          <i className="fa fa-shopping-cart mr-1" aria-hidden="true" />
          Shopping cart
          <a href className="btn btn-outline-info btn-sm pull-right">
            Continue shopping
          </a>
          <div className="clearfix" />
        </div>
        <div className="card-body">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="card-footer">
          <div className="coupon col-md-5 col-sm-5 no-padding-left pull-left">
            <div className="row">
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="coupon code"
                />
              </div>
              <div className="col-6">
                <input
                  type="submit"
                  className="btn btn-default"
                  defaultValue="Use coupon"
                />
              </div>
            </div>
          </div>
          <div className="pull-right" style={{ margin: "10px" }}>
            <a href className="btn btn-success pull-right">
              Checkout
            </a>
            <div className="pull-right" style={{ margin: "5px" }}>
              Total price: <b>50.00 $</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
