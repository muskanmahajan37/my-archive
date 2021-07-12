import React, { useState } from 'react'
import { Container, Form, InputGroup, Button, Col, Row } from 'react-bootstrap'
import './contactme.css'

export default function ContactMe() {
    const [enteredName, setEnteredName] = useState('')
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredText, setEnteredText] = useState('')

    const [enteredNameTouched, setEnteredNameTouched] = useState(false)
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)
    const [enteredTextTouched, setEnteredTextTouched] = useState(false)

    const enteredNameIsValid = enteredName.trim() !== '';
    const enteredEmailIsValid = enteredEmail.trim() !== '';
    const enteredTextIsValid = enteredText.trim() !== '';
    const nameInputIsvalid = !enteredNameIsValid && enteredNameTouched;
    const emailInputIsvalid = !enteredEmailIsValid && enteredEmailTouched;
    const textInputIsvalid = !enteredTextIsValid && enteredTextTouched;

    let formIsValid = false;
    if (enteredNameIsValid || enteredEmailIsValid || enteredTextIsValid) {
        formIsValid = true
    }

    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value)
    }

    const emailInputChangeHandler = event => {
        setEnteredEmail(event.target.value)
    }

    const textInputChangeHandler = event => {
        setEnteredText(event.target.value)
    }

    const nameInputBlurHandler = () => {
        setEnteredNameTouched(true)
    }

    const emailnputBlurHandler = () => {
        setEnteredEmailTouched(true)
    }

    const textInputBlurHandler = () => {
        setEnteredTextTouched(true)
    }

    const formSubmissionHandler = event => {
        event.preventDefault();
        setEnteredNameTouched(true)
        setEnteredEmailTouched(true)
        setEnteredTextTouched(true)
        if (!enteredNameIsValid || !enteredEmailIsValid || !enteredTextIsValid) {
            return;
        } else {
            sendEmail()
        }

        setEnteredName('')
        setEnteredNameTouched(false)
        setEnteredEmail('')
        setEnteredEmailTouched(false)
        setEnteredText('')
        setEnteredTextTouched(false)
    }


    function sendEmail() {
        window.Email.send({
            SecureToken: "fbdb781e-b76c-4c9a-8a00-277fb4464c29",
            To: 'clumapay.info@gmail.com',
            From: `${enteredEmail}`,
            Subject: `Looking for VA - ${enteredName}`,
            Body: `<b>Name:</b> ${enteredName} <br/><b>Email:</b> ${enteredEmail} NOTE: Please reply to this email. <br/><br/> <b>Message:</b> <br/>${enteredText}`
        }).then(
            name => alert(`Hi ${enteredName}, your message has been sent!`)
        )
    };

    const nameInputClass = nameInputIsvalid ? 'form-align mb-3 invalidName' : 'form-align mb-3';
    const emailInputClass = emailInputIsvalid ? 'form-align mb-3 invalidEmail' : 'form-align mb-3';
    const textInputClass = textInputIsvalid ? 'form-align form-right mb-3 invalidmessage' : 'form-align form-right mb-3';

    return (
        <Container id="contact">
            <div>
                <h2 className="text-center" style={{ color: "#216869", fontWeight: "700" }}>Contact me</h2>
                <div className="contact-wrapper">
                    <form className="contact-form" onSubmit={formSubmissionHandler}>
                        <div className="form-wrapper">
                            <div className="form-left">
                                <div className={nameInputClass}>
                                    <label htmlFor="name" className="form-text label">Name</label>
                                    <input type="text"
                                        className="name"
                                        id="name"
                                        onChange={nameInputChangeHandler}
                                        onBlur={nameInputBlurHandler} />
                                    {nameInputIsvalid && <p className="text-error">Name must not be empty.</p>}
                                </div>
                                <div className={emailInputClass}>
                                    <label htmlFor="email" className="form-text label">Email</label>
                                    <input type="email"
                                        className="email"
                                        id="email"
                                        onChange={emailInputChangeHandler}
                                        onBlur={emailnputBlurHandler} />
                                    {emailInputIsvalid && <p className="text-error">Email must be correct or must not be empty.</p>}
                                </div>
                            </div>
                            <div className={textInputClass}>
                                <label htmlFor="textarea" className="form-text label">Message</label>
                                <textarea type="textarea"
                                    className="message"
                                    id="message"
                                    cols="30"
                                    rows="10"
                                    onChange={textInputChangeHandler}
                                    onBlur={textInputBlurHandler}>
                                </textarea>
                                {textInputIsvalid && <p className="text-error">Message must not be empty.</p>}
                            </div>

                        </div>
                        <div>
                            <Button type="submit" id="button" disabled={!formIsValid}>Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        </Container >
    )
}
