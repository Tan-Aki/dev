(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[3],{103:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(5),l=a(6),i=a(7),o=a(0),u=a.n(o),c=a(53),s=a(31),d=a(98),p=a.n(d),m=function(e){return u.a.createElement("div",{className:p.a.CheckoutSummary},u.a.createElement("h1",null,"We hope it tastes well !"),u.a.createElement("div",{style:{width:"100%",margin:"auto"}},u.a.createElement(c.a,{ingredients:e.ingredients})),u.a.createElement(s.a,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),u.a.createElement(s.a,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE"))},h=a(16),v=a(13),g=a(2),f=a(99),b=a.n(f),C=a(18),y=a(40),E=a(95),k=a(41),O=a(24),_=a(97),j=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"Zip Code"},value:"",validation:{required:!0,minLength:5,maxLength:5},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"text",placeholder:"Email"},value:"",validation:{isEmail:!0,required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},touched:!1,valid:!0}},formIsValid:!1},e.orderHandler=function(t){t.preventDefault(),console.log(e.props.ings);var a={};for(var n in e.state.orderForm)e.state.orderForm.hasOwnProperty(n)&&(a[n]=e.state.orderForm[n].value);var r={ingredients:e.props.ings,price:e.props.price,orderData:a,userId:e.props.userId};e.props.onOrderBurger(r,e.props.token)},e.inputChangedHandler=function(t,a){var n=Object(g.a)({},e.state.orderForm),r=Object(g.a)({},n[a]);r.value=t.target.value,r.valid=Object(_.a)(t.target.value,e.state.orderForm[a].validation),r.touched=!0,n[a]=r;var l=!0;for(var i in n)n.hasOwnProperty(i)&&(l=n[i].valid&&l);e.setState({orderForm:n,formIsValid:l})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=[],a=function(a){t.push(u.a.createElement(E.a,Object.assign({key:a},e.state.orderForm[a],{changed:function(t){e.inputChangedHandler(t,a)}})))};for(var n in this.state.orderForm)a(n);var r=u.a.createElement("form",{onSubmit:this.orderHandler},t,u.a.createElement(s.a,{btnType:"Success",disabled:!this.state.formIsValid},"ORDER"));return this.props.loading&&(r=u.a.createElement(y.a,null)),u.a.createElement("div",{className:b.a.ContactData},u.a.createElement("h4",null,"Enter your Contact Data"),r)}}]),a}(o.Component),I=Object(v.b)((function(e){return{ings:e.burgerBuilderReducer.ingredients,price:e.burgerBuilderReducer.totalPrice,loading:e.orderReducer.loading,token:e.authReducer.token,userId:e.authReducer.userId}}),(function(e){return{onOrderBurger:function(t,a){return e(O.b(t,a))}}}))(Object(k.a)(j,C.a)),N=(a(12),function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).checkoutCancelledHandler=function(){e.props.history.goBack()},e.checkoutContinuedHandler=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(r.a)(a,[{key:"render",value:function(){var e=u.a.createElement(h.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?u.a.createElement(h.a,{to:"/"}):null;e=u.a.createElement("div",null,t,u.a.createElement(m,{ingredients:this.props.ings,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),u.a.createElement(h.b,{path:this.props.match.path+"/contact-data",component:I}))}return e}}]),a}(o.Component));t.default=Object(v.b)((function(e){return{ings:e.burgerBuilderReducer.ingredients,purchased:e.orderReducer.purchased}}))(N)},95:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(96),i=a.n(l);t.a=function(e){var t=null,a=[i.a.InputElement],n=null;switch(!e.valid&&e.validation&&e.touched&&(a.push(i.a.Invalid),n=r.a.createElement("p",{className:i.a.ValidationError},"Please enter a valid value!")),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":var l=e.elementConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));t=r.a.createElement("select",{className:a.join(" "),value:e.value,onChange:e.changed},l);break;default:t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return r.a.createElement("div",{className:i.a.Input},r.a.createElement("label",{className:i.a.Label}," ",e.label),t,n)}},96:function(e,t,a){e.exports={Input:"Input_Input__SNRl4",Label:"Input_Label__3w96u",InputElement:"Input_InputElement__pO52w",Invalid:"Input_Invalid__3aeyU",ValidationError:"Input_ValidationError__2fHal"}},97:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e,t){var a=!0;if(!t)return!0;if(t.required&&(a=""!==e.trim()&&a),t.minLength&&(a=e.length>=t.minLength&&a),t.maxLength&&(a=e.length<=t.maxLength&&a),t.isEmail){a=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&a}if(t.isNumeric){a=/^\d+$/.test(e)&&a}return a}},98:function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__3QfUK"}},99:function(e,t,a){e.exports={ContactData:"ContactData_ContactData__2aETv"}}}]);
//# sourceMappingURL=3.aca5c411.chunk.js.map