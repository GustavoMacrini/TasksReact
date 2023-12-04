import Card from "../Card";
import './grid.css';
import api from '../../services/api';
import { useState, useEffect } from "react";

function Grid(props){

    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedOption, setSelectedOption] = useState(false);

    const handleRadioChange = (event) => {
        setSelectedOption((prev) => (prev === event.target.value ? false : event.target.value));
      };

    const getCards = async () => {
        try {
            const response = await api.get(`cards/${props.situacao}${selectedOption ? '/logado' : ''}`);
            console.log(`SITUAÇÃO: ${props.situacao}`)

            setCards(response.data.dados);            
            setLoading(false);
        } catch (error) {
            console.error("Card error: ", error);
            console.log(`SITUAÇÃO: ${props.situacao}, Opção: ${selectedOption}`)
        }
    };

    useEffect(() => {    
        getCards();
    }, [selectedOption]);

    return(
        
        <div className="card-grid-wapper">
            <div className="filtros">
                <h2>Apenas minhas</h2>
                <input type='radio' checked={selectedOption} onChange={handleRadioChange} />
            </div>

            <div className="card-grid">
                {loading ? (
                        <p>Loading...</p>
                    ) : 
                    (
                        cards.map((card, index) => (
                            <Card
                                key={index} 
                                descricao={card['descricao']} 
                                nome={card['nome']} 
                                titulo={card['titulo']} 
                                categoria={card['categoria']}
                                id={card['id']}
                                situacao={props.situacao}
                            />
                        ))
                        
                    )
                    }
            </div>
            
        </div>
    )
}

export default Grid;