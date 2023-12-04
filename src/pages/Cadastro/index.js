import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import api from '../../services/api';
import './cadastro.css';

function Cadastro() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const navigate = useNavigate();

    const logar = async (e) => {
        e.preventDefault();
        console.log(`Email: ${email}`)
        console.log(`Senha: ${senha}`)        
        try {
            const response = await api.post(`/pessoas`, {
                email: email,
                senha: senha,
                nome: nome
            });
            if (response != null){
                navigate('/', {replace: true});
            }
        } catch (error) {
            console.error("Error registro:", error);
        }
    }

    return (
        <section id='registro'>
            <div>
                <form onSubmit={logar}>
                    <div className='info'>

                        <div className='nome'>
                            <label>Nome: </label>
                            <input type='text' onChange={(e) => setNome(e.target.value)} />
                        </div>
                        
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
                        <button type='submit'>Cadastar</button>                       
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Cadastro;
