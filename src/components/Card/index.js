import './card.css';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import api from '../../services/api';

function Card(props){

    const updateCardsRequisicao = (sit) => {
        return api.put(`cards/${props.id}/` + sit)
            .then(() => {
                window.location.reload();
            })
            .catch(error => {
                console.error("Card error: ", error);
            });
    };

    const deleteCardRequisicao = () => {
        return api.delete(`cards/${props.id}`)
            .then(() => {
                window.location.reload();
            })
    }
    
    const updateCards = (prevNext) => {
        let prev = '';
        let next = '';
        let tela = '';

        if (props.situacao == 1) {
            prev = '0';
            next = '1';
            tela = 'fazer';
        }
        else if(props.situacao == 2){
            prev = '0';
            next = '2';
            tela = 'fazendo';
        }
        else if(props.situacao == 3){
            prev = '1';
            next = '2';
            tela = 'feito';
        }
        updateCardsRequisicao(prevNext? next : prev, tela)
    }
    

    return(
        <section id="card">
            <div className='wrapper'>

                <div className='top-content'>
                    <div className='title'>
                        <div className='close close-hidden'>
                            <IoIosClose />
                        </div>

                        <h1>{props.titulo}</h1>
                        <div className='close'>
                            <IoIosClose onClick={deleteCardRequisicao}/>
                        </div>
                    </div>

                    <div className='description'>
                        <p>
                            {props.descricao}
                        </p>
                    </div>
                </div>                

                <div className='bottom-content'>
                    <div className='detalhes'>
                        <p>
                            Atribuído: {props.nome}
                        </p>
                        <p>
                            Categoria: {props.categoria}
                        </p>
                    </div>

                    <div className='footer'>
                        <div className='arrow'>
                            <FaArrowLeft onClick={() => updateCards(false)}/>
                        </div>
                        
                        <div className='arrow'>
                            <FaArrowRight onClick={() => updateCards(true)}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
 
export default Card;