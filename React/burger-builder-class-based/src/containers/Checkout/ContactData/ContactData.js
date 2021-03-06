import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.scss";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    orderForm: {
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
        value: "",
        validation: {},
        touched: false,
        valid: true,
      },
    },
    formIsValid: false,
    loading: false,
  };

  orderHandler = async (event) => {
    event.preventDefault();
    console.log(this.props.ingredients);

    this.setState({ loading: true });

    const formData = {};

    for (let formElementIdentifier in this.state.orderForm) {
      if (this.state.orderForm.hasOwnProperty(formElementIdentifier)) {
        formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
      }
    }

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price, // shouldnt be done in production environement. should be calculated server side to avoid data being tempered
      orderData: formData,
    };
    try {
      const response = await axios.post("/orders.json", order); // .json for firebase
      console.log("response :", response);
      this.setState({ loading: false });
      this.props.history.push("/");
    } catch (err) {
      console.log(err);
      this.setState({ loading: false });
    }
  };

  checkValidity = (value, rules) => {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  };

  inputChangedHandler = (event, inputIdentifier) => {
    // what follows is deep copying

    const updatedOrderForm = {
      ...this.state.orderForm,
    };

    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier],
    };

    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;

    updatedOrderForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      if (updatedOrderForm.hasOwnProperty(inputIdentifier)) {
        formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
      }
    }

    this.setState({ orderForm: updatedOrderForm, formIsValid });
  };

  render() {
    const formElementsArray = [];

    for (let key in this.state.orderForm) {
      formElementsArray.push(
        <Input
          key={key}
          {...this.state.orderForm[key]}
          changed={(event) => {
            this.inputChangedHandler(event, key);
          }}
        />
      );
    }

    let form = (
      <form onSubmit={this.orderHandler}>
        {/* <Input elementType="..." elementConfig="..." value="..." /> */}
        {formElementsArray}
        <Button btnType="Success" disabled={!this.state.formIsValid}>
          ORDER
        </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
