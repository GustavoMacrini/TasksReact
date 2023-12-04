import './categoriaCriar.css';
import api from '../../services/api';
import { useState } from 'react';

function CategoriaCriar(){

    const [categoria, setCategoria] = useState('');
    
    const criarCategoria = async (e) => {     
        try {
             await api.post(`/categorias`, {
                nome: categoria
            });
        } catch (error) {
            console.error("Error registro:", error);
        }
    }

    return(
        <section id='categoriaCriar'>
            <div className="wrapper">
                <form onSubmit={criarCategoria}>

                    <div className='item'>
                        <label>Nome categoria</label>
                        <input type='text' onChange={(e) => setCategoria(e.target.value)}/>
                    </div>

                    <button type='submit'>Criar</button>
                </form>
            </div>
        </section>
    )
}

export default CategoriaCriar;