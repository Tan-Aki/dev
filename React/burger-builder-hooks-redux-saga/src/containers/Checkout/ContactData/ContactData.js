import React, { Component, useState } from "react";
import { connect } from "react-redux";

import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.scss";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../../store/actions/order";
import { checkValidity } from "../../../shared/utility";

const ContactData = (props) => {
  const [orderForm, setOrderForm] = useState({
    name: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Your name",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    street: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Street",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    zipCode: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Zip Code",
      },
      value: "",
      validation: {
        required: true,
        minLength: 5,
        maxLength: 5,
      },
      valid: false,
      touched: false,
    },
    country: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Country",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    email: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Email",
      },
      value: "",
      validation: {
        isEmail: true,
        required: true,
      },
      valid: false,
      touched: false,
    },
    deliveryMethod: {
      elementType: "select",
      elementConfig: {
        options: [
          { value: "fastest", displayValue: "Fastest" },
          { value: "cheapest", displayValue: "Cheapest" },
        ],
      },
      value: "fastest",
      validation: {},
      touched: false,
      valid: true,
    },
  });

  const [formIsValid, setFormIsValid] = useState(false);

  // orderHandler = async (event) => {
  //   event.preventDefault();
  //   console.log(this.props.ingredients);

  //   this.setState({ loading: true });

  //   const formData = {};

  //   for (let formElementIdentifier in this.state.orderForm) {
  //     if (this.state.orderForm.hasOwnProperty(formElementIdentifier)) {
  //       formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
  //     }
  //   }

  //   const order = {
  //     ingredients: this.props.ings,
  //     price: this.props.price, // shouldnt be done in production environement. should be calculated server side to avoid data being tempered
  //     orderData: formData,
  //   };
  //   try {
  //     const response = await axios.post("/orders.json", order); // .json for firebase
  //     console.log("response :", response);
  //     this.setState({ loading: false });
  //     this.props.history.push("/");
  //   } catch (err) {
  //     console.log(err);
  //     this.setState({ loading: false });
  //   }
  // };
  const orderHandler = (event) => {
    event.preventDefault();
    console.log(props.ings);

    const formData = {};

    for (let formElementIdentifier in orderForm) {
      if (orderForm.hasOwnProperty(formElementIdentifier)) {
        formData[formElementIdentifier] = orderForm[formElementIdentifier].value;
      }
    }

    const order = {
      ingredients: props.ings,
      price: props.price, // shouldnt be done in production environement. should be calculated server side to avoid data being tempered
      orderData: formData,
      userId: props.userId,
    };

    props.onOrderBurger(order, props.token);
  };

  const inputChangedHandler = (event, inputIdentifier) => {
    // what follows is deep copying

    const updatedOrderForm = { ...orderForm };

    const updatedFormElement = { ...updatedOrderForm[inputIdentifier] };

    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = checkValidity(
      event.target.value,
      orderForm[inputIdentifier].validation
    );
    updatedFormElement.touched = true;

    updatedOrderForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      if (updatedOrderForm.hasOwnProperty(inputIdentifier)) {
        formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
      }
    }
    setOrderForm(updatedOrderForm);
    setFormIsValid(formIsValid);

    // setState({ orderForm: updatedOrderForm, formIsValid });
  };

  const formElementsArray = [];

  for (let key in orderForm) {
    formElementsArray.push(
      <Input
        key={key}
        {...orderForm[key]}
        changed={(event) => {
          inputChangedHandler(event, key);
        }}
      />
    );
  }

  let form = (
    <form onSubmit={orderHandler}>
      {/* <Input elementType="..." elementConfig="..." value="..." /> */}
      {formElementsArray}
      <Button btnType="Success" disabled={!formIsValid}>
        ORDER
      </Button>
    </form>
  );

  if (props.loading) {
    form = <Spinner />;
  }

  return (
    <div className={classes.ContactData}>
      <h4>Enter your Contact Data</h4>
      {form}
    </div>
  );
};

const mapStateToProps = (state) => ({
  ings: state.burgerBuilderReducer.ingredients,
  price: state.burgerBuilderReducer.totalPrice,
  loading: state.orderReducer.loading,
  token: state.authReducer.token,
  userId: state.authReducer.userId,
});

const mapDispatchToProps = (dispatch) => ({
  onOrderBurger: (orderData, token) => dispatch(actions.purchaseBurger(orderData, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));
