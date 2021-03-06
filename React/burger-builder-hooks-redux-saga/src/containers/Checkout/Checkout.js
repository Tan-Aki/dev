import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import ContactData from "./ContactData/ContactData";
import * as actions from "../../store/actions/index";

const Checkout = (props) => {
  // state = {
  //   ingredients: null,
  //   price: 0,
  // };

  // componentWillMount() {
  //   const query = new URLSearchParams(this.props.location.search);
  //   const ingredients = {};
  //   console.log(query.entries);
  //   let price = 0;

  //   for (let param of query.entries()) {
  //     //['salad', '1']

  //     if (param[0] === "price") {
  //       price = param[1];
  //     } else {
  //       ingredients[param[0]] = +param[1]; // converted to number by adding a +
  //     }
  //   }

  //   this.setState({ ingredients, totalPrice: price });
  // }

  const checkoutCancelledHandler = () => {
    props.history.goBack();
  };

  const checkoutContinuedHandler = () => {
    props.history.replace("/checkout/contact-data");
  };

  let summary = <Redirect to="/" />;
  if (props.ings) {
    const purchasedRedirect = props.purchased ? <Redirect to="/" /> : null;
    summary = (
      <div>
        {purchasedRedirect}
        <CheckoutSummary
          ingredients={props.ings}
          checkoutCancelled={checkoutCancelledHandler}
          checkoutContinued={checkoutContinuedHandler}
        />
        <Route
          path={props.match.path + "/contact-data"}
          component={ContactData}

          // trick to pass some props to the route, instead of using Component, we use render with an arrow function
          // we don't get the props history property with that though..
          // so we pass the props we got from the checkout route to the COntactData
        />
      </div>
    );
  }
  return summary;
};

const mapStateToProps = (state) => ({
  ings: state.burgerBuilderReducer.ingredients,
  purchased: state.orderReducer.purchased,
});

export default connect(mapStateToProps)(Checkout);
