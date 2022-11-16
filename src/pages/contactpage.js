import React, { useState } from "react";
import "./contactpage.css";
import firestore from '../hooks/firebase';
import {addDoc,collection} from '@firebase/firestore';

import Spinner from 'react-bootstrap/Spinner';

import {
  Form,
  FormGroup
} from "reactstrap";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../hooks/validators";

import CustomInput from "../components/formelements/input";
import { useForm } from "../hooks/formhook";

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isToast, setIsToast] = useState(false);
  const ref = collection(firestore, "messages")

  const [formState, inputHandler] = useForm(
    {
      name: { value: "", isValid: false },
      email: { value: "", isValid: false },
      message: { value: "", isValid: false },
    },
    false
  );

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    let newMSG = {
      name:formState.inputs.name.value,
      email:formState.inputs.email.value,
      message: formState.inputs.message.value
    }    
    setIsLoading(true)
    
    try{
      setTimeout(2000)
       await addDoc(ref,newMSG)
      setIsLoading(false)
    }catch(e){
      console.log(e)
      setIsLoading(false)
    }

    // try {
    //    const response = await fetch(process.env.REACT_APP_BACKENDURL, {
    //       method: 'POST',
    //       body: JSON.stringify({
    //          name: formState.inputs.name.value,
    //          email: formState.inputs.email.value,
    //          message: formState.inputs.message.value,
    //       }),
    //       headers: {
    //          'Content-Type': 'application/json',
    //          // Authorization: 'Bearer random token will not check',
    //       },
    //    });
    //    const responseData = await response.json();
    //    showToast();
    //    console.log(responseData);
    // } catch (e) {
    //    console.log(e);
    // }
  };

  return (
    <div className="section section-3 row">
      <div className="row row1">
        <div className="contact-head">
          <h1 className="txt-secondary">Contact Information</h1>
          <h1 className="txt-desc">
            for any inquiry about the buisiness or/and requisting a service
            please contact ..
          </h1>
        </div>
        <div className="contact-head">
          <h1 className="txt-secondary">Get In Touch</h1>
          <h1 className="txt-desc">
            send a message and we will get back to you
          </h1>
        </div>
      </div>

      <div className="row row2">
        <div className="icons">
          <div className=" contact-icon">
            <a href="//github.com/eskiimo" target="_blank" rel="noreferrer">
              {" "}
              <i class="fa-sharp fa-solid fa-square-phone"></i>{" "}
            </a>
            <div className="icon-about">
              <p className="tag">Call us</p>
              <p className="content">+201154773599</p>
            </div>
          </div>
          <div className=" contact-icon">
            <a
              href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmohamed-el-hosary-19180a66%3Ffbclid%3DIwAR2xHXh4DBBt40nMm0gIFVkhwzicpMcQLVj079zyaRwSqFbiu3djp_gWmUE&h=AT3S3Oa6t4I9AvW3J1VheUmQ9XG0F0c7V4_mNHlF9YG9JLgdW76GuPWU6pCt5AwywPDseUzYCia7JV6aylAn5WhfOv-T_WYAdHMcVsysW0DfxW_RfIoqSMR8lNS5Kg"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <i class="fa-sharp fa-solid fa-envelope"></i>{" "}
            </a>
            <div className="icon-about">
              <p className="tag">Send us Email</p>
              <p className="content">info@eps.com.eg</p>
            </div>
          </div>

          <div className=" contact-icon">
            <a
              href="https://www.facebook.com/EPSHOSARY"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <i class="fa-sharp fa-solid fa-map-location-dot"></i>{" "}
            </a>
            <div className="icon-about">
              <p className="tag">Visit our office</p>
              <p className="content">
                Block 19 Atlas Building- street 9- Mokattam
              </p>
            </div>
          </div>
        </div>
        <div className="form-container">
          <Form autoComplete="off" className="form" onSubmit={onSubmitHandler}>
            <FormGroup>
              <CustomInput
                id="name"
                placeholder="Name"
                type="text"
                errorText="idiot!!"
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
              />
            </FormGroup>
            <FormGroup>
              <CustomInput
                id="email"
                placeholder="Email"
                type="email"
                errorText="idiot!!"
                validators={[VALIDATOR_EMAIL()]}
                onInput={inputHandler}
              />
            </FormGroup>
            <FormGroup>
              <CustomInput
                id="message"
                placeholder="Message"
                type="textarea"
                errorText="idiot!!"
                rows={5}
                validators={[VALIDATOR_MINLENGTH(5)]}
                onInput={inputHandler}
              />
            </FormGroup>
           {
           isLoading? (
            <div className="form-button">
            <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
          </div>
           ) : (
             <div className="form-button">
             <button disabled={!formState.isValid} type="submit" width={"30%"}>
               Send
             </button>
           </div>
           ) }
          </Form>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
