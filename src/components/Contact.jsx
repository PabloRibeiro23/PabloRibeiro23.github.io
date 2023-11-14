import { useState } from "react"
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

export default function Contact(){
    const[nameValue, setNameValue] = useState('');
    const[emailValue, setEmailValue] = useState('');
    const[messageValue, setMessageValue] = useState('');

    const SERVICE_ID = 'service_l5a7iow';
    const TEMPLATE_ID = 'template_6etb3om';
    const PUBLIC_KEY = 'uMb-p-9ykPPf5lRn0';

    function handleNameChange(event) {
        setNameValue(event.target.value);
    }

    function handleEmailChange(event) {
        setEmailValue(event.target.value);
    }

    function handleMessageChange(event) {
        setMessageValue(event.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              confirmButtonColor: "#D031FF",
              title: 'Message Sent Successfully'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
              confirmButtonColor: "#D031FF",
            })
          });
        e.target.reset()
      };

    return(
        <form onSubmit={handleOnSubmit} id="contactForm">
            <h2 className="section3--h2 main-text"><span className="color-mainPurple">Contact</span> Me!</h2>
            <div className="center-content">
                <label className="form--label main-text" htmlFor="form--name">Name: </label>
                <input className="form--input" type="text" placeholder="Your Name" name="form--name" id="form--name" value={nameValue} onChange={handleNameChange}/>
                <label className="form--label main-text" htmlFor="form--email">Email: </label>
                <input className="form--input" type="text" placeholder="Your Email" name="form--email" id="form--email" value={emailValue} onChange={handleEmailChange}/>
                <label className="form--label main-text"htmlFor="form--message">Message: </label>
                <textarea className="form--textArea" placeholder="I'm interested in your work..." name="form--message" id="form--message" value={messageValue} onChange={handleMessageChange}></textarea>
                <button className="btn-send">Send!</button>
            </div>
        </form>
    )
}