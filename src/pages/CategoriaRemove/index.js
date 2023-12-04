import './categoriaRemove.css';
import api from '../../services/api';
import { useEffect, useState } from 'react';

function CategoriaRemove(){

    const [categoriaId, setCategoriaId] = useState('');
    const [categoriasGet, setCategoriasGet] = useState([]);
    const [loading, setLoading] = useState(true);

    const removeCategoria = async (e) => {     
        e.preventDefault();
        try {
             await api.delete(`/categorias/${categoriaId}`);
             buscaCategorias();
        } catch (error) {
            console.error("Error registro:", error);
        }
    }

    const buscaCategorias = async (e) => {     
        try {
            const response = await api.get(`/categorias`);
            setCategoriasGet(response.data.dados);
            setLoading(false);
        } catch (error) {
            console.error("Error registro:", error);
        }
    }

    useEffect(() => {
        buscaCategorias();
    }, []); 


    return(
        <section id='categoriaRemove'>
            <div className="wrapper">
                <form onSubmit={removeCategoria}>

                    <div className='item'>
                        <label>Id categoria para remoção</label>
                        <input type='text' onChange={(e) => setCategoriaId(e.target.value)}/>
                    </div>

                    <button type='submit'>Deletar</button>

                    <h2>Categorias cadastradas:</h2>
                    <div className='cadastradas'>
                        {loading ? (
                            <p>Loading...</p>
                        ) : 
                        (
                            categoriasGet.map((categoria) => (
                                <h3>id {categoria['id']} - {categoria['nome']}</h3>
                            ))
                            
                        )
                        } 
                    </div>
                </form>
            </div>
        </section>
    )
}

export default CategoriaRemove;