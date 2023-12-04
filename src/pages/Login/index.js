import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import api from '../../services/api';
import './login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const logar = async (e) => {
        e.preventDefault();       
        try {
            const response = await api.put(`/pessoas`, {
                email: email,
                senha: senha
            });
            if (response != null){
                navigate('/', {replace: true});
            }
        } catch (error) {
            // Handle error
            console.error("Error logging in:", error);
        }
    }

    return (
        <section id='login'>
            <div>
                <form onSubmit={logar}>
                    <div className='info'>
                        <div className='email'>
                            <label>Email: </label>
                            <input type='text' onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className='senha'>
                            <label>Senha: </label>
                            <input type='password' onChange={(e) => setSenha(e.target.value)} />                            
                        </div>
                    </div>
                    <div className='submit-button'>
                        <button type='submit'>Entrar</button>
                        <Link to='/registro'>Cadastrar</Link>                        
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login;
