import React, { useState } from "react"; /*useState Bileşeni globalde state yönetmemizi sağlar*/
import LogRegImage from "./Assets/LogRegImage.png";
import Logo from "./Assets/Logo.svg";

/*Props parent send function/value to children (onClick icin kullandim)*/
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirm, setConfirm] = useState('');
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');

    const handleSubmit = (e) => { /*Capture when user submit form*/ 
        e.preventDefault(); /*Bu yapilmazsa sayfa reload atar state kaybolur*/
        console.log(email); 
    }
 
    return(
        <div>
            <div className="Logo">
                <img src={Logo} alt=""/>
            </div>

            <img className="LogRegImage" src={LogRegImage} alt=""/>

            <div className="auth-form-container">
                <h2>REGISTER</h2>
                <form className="register-form" onSubmit={handleSubmit}> 

                    <label htmlFor="email"></label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-mail" id="email" name="email" />
                    <label htmlFor="username"></label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="username" placeholder="User name" id="username" name="username" />
                    <label htmlFor="contactNumber"></label>
                    <input value={contact} onChange={(e) => setContact(e.target.value)} type="contactNumber" placeholder="Contact number" id="contactNumber" name="contactNumber" />
                    <label htmlFor="password"></label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                    <label htmlFor="confirm"></label>
                    <input value={confirm} onChange={(e) => setConfirm(e.target.value)} type="password" placeholder="Confirm password" id="password" name="password" />
                    <br></br>
                    <button type="submit">Register</button>
                </form>

                <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here!</button>
            </div>
        </div>
    )
}