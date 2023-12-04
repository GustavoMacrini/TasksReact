import './pessoasRemove.css';
import api from '../../services/api';
import { useEffect, useState } from 'react';

function PessoaRemove(){

    const [pessoaId, setPessoasId] = useState('');
    const [pessoasGet, setPessoasGet] = useState([]);
    const [loading, setLoading] = useState(true);

    const removePessoa = async (e) => {     
        e.preventDefault();
        try {
             await api.delete(`/pessoas/${pessoaId}`);
             buscaPessoas();
        } catch (error) {
            console.error("Error delete:", error);
        }
    }

    const buscaPessoas = async (e) => {     
        try {
            const response = await api.get(`/pessoas`);
            setPessoasGet(response.data.dados);
            setLoading(false);
        } catch (error) {
            console.error("Error get:", error);
        }
    }

    useEffect(() => {
        buscaPessoas();
    }, []); 


    return(
        <section id='pessoasRemove'>
            <div className="wrapper">
                <form onSubmit={removePessoa}>

                    <div className='item'>
                        <label>Id Pessoa para remoção</label>
                        <input type='text' onChange={(e) => setPessoasId(e.target.value)}/>
                    </div>

                    <button type='submit'>Deletar</button>

                    <h2>Pessoas cadastradas:</h2>
                    <div className='cadastradas'>
                        {loading ? (
                            <p>Loading...</p>
                        ) : 
                        (
                            pessoasGet.map((pessoa) => (
                                <h3>id {pessoa['id']} - {pessoa['nome']}</h3>
                            ))
                            
                        )
                        } 
                    </div>
                </form>
            </div>
        </section>
    )
}

export default PessoaRemove;