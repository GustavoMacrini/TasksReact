import './cardCriar.css';
import api from '../../services/api';
import { useEffect, useState } from 'react';

function CardCriar(){

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [idPessoa, setIdPessoa] = useState('');
    const [idCategoria, setIdCategoria] = useState('');
    const [loadinga, setLoadinga] = useState(true);
    const [loadingb, setLoadingb] = useState(true);

    const [categoriasGet, setCategoriasGet] = useState([]);
    const [pessoasGet, setPessoasGet] = useState([]);
    
    const criarCard = async (e) => {     
        try {
             await api.post(`/cards`, {
                id_pessoa: idPessoa,
                id_categoria: idCategoria,
                titulo: titulo,
                descricao: descricao
            });
        } catch (error) {
            console.error("Error registro:", error);
        }
    }


    const carregaDados = async (e) => {
        try {
            const response = await api.get(`/categorias`);
            setCategoriasGet(response.data.dados);
            // setLoadinga(false);
        } catch (error) {
            console.error("Error registro:", error);
        }
        finally{
            try {
                const response = await api.get(`/pessoas`);
                setPessoasGet(response.data.dados);
                // setLoadingb(false);
            } catch (error) {
                console.error("Error get:", error);
            }
        }
        
        
    }

    useEffect(() => {
        carregaDados();
    }, []); 

    return(
        <section id='cardCriar'>
            <div className="wrapper">
                <form onSubmit={criarCard}>

                    <div className='item'>
                        <label>Id Pessoa</label>
                        <input type='text' onChange={(e) => setIdPessoa(e.target.value)}/>
                    </div>

                    <div className='item'>
                        <label>Id Categoria</label>
                        <input type='text' onChange={(e) => setIdCategoria(e.target.value)}/>
                    </div>

                    <div className='item'>
                        <label>Titulo</label>
                        <input type='text' onChange={(e) => setTitulo(e.target.value)}/>
                    </div>

                    <div className='item'>
                        <label>Descricao</label>
                        <input type='text' onChange={(e) => setDescricao(e.target.value)}/>
                    </div>

                    <button type='submit'>Criar</button>

                    <div className='cadastradas'>
                    <h1>Pessoas</h1>
                        {
                        loadingb ? (
                            <p>Loading...</p>
                        ) : 
                        (
                            pessoasGet.map((pessoa) => (
                                <h3>id {pessoa['id']} - {pessoa['nome']}</h3>
                            ))
                                                        
                        )
                        } 

                        // {/* <h1>Categorias</h1> */}
                        {                         
                        loadinga ? (
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

export default CardCriar;