import React, {useContext, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from "../Context/AuthContext";


function SignIn() {
    const {login} = useContext(AuthContext)
    const [password, setPassword] = useState('');
    const [mail, setMail] = useState('');
    const navigate = useNavigate();
    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>

            <form onSubmit={(event) => {
                event.preventDefault();
                login(mail)
                navigate('/profile')
                console.log("Gebruiker is ingelogd")

            }}>
                <label htmlFor="e-mail">Emailadres</label>
                <input type="email" id="e-mail" value={mail} onChange={(event) => setMail(event.target.value)}/>
                <label htmlFor="password">Wachtwoord</label>
                <input type="password" id="password" value={password}
                       onChange={(event) => setPassword(event.target.value)}/>
                <button type="submit">Inloggen</button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;