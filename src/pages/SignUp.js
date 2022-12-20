import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../Context/AuthContext";

function SignUp() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [mail, setMail] = useState('');
    return (
        <>
            <h1>Registreren</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque
                eligendi
                harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur
                deserunt
                doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
            <form onSubmit={(event) => {
                event.preventDefault();
                console.log("Gebruiker is aangemaakt")
                setUser('')
                setMail('')
                setPassword('')

            }}>
                <label htmlFor="username">Gebruikersnaam</label>
                <input type="text" id="username" value={user} onChange={(event) => setUser(event.target.value)}/>
                <label htmlFor="e-mail">Emailadres</label>
                <input type="email" id="e-mail" value={mail} onChange={(event) => setMail(event.target.value)}/>
                <label htmlFor="password">Wachtwoord</label>
                <input type="password" id="password" value={password}
                       onChange={(event) => setPassword(event.target.value)}/>
                <button type="submit">Inloggen</button>
            </form>
            <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
        </>
    );
}

export default SignUp;