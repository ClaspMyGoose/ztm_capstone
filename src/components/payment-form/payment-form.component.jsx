import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../button/button.component";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";
import { useSelector } from "react-redux";
import { cartTotalSelector } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const cartTotal = useSelector(cartTotalSelector);
  const user = useSelector(selectCurrentUser);
  
  const [pendingPayment, setPendingPayment] = useState(false); 
  
  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || !user) {
      return; 
    }

    setPendingPayment(() => true);

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount: cartTotal * 100
      })
    }).then((response) => response.json());
    
    const clientSecret = response.paymentIntent.client_secret; 

    const confirmPayment = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: user.name
        }
      }
    }); 

    setPendingPayment(() => false);
    if (confirmPayment.error) {
      alert(confirmPayment.error.message);
    } else if (confirmPayment.paymentIntent.status === 'succeeded') {
      alert('Payment successful');
    }
   
  }    


  return (
    <PaymentFormContainer>
      
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <Button isLoading={pendingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</Button>
      </FormContainer>
    </PaymentFormContainer>
  )

}

export default PaymentForm