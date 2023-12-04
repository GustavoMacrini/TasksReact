import './sobre.css';
import emoji from './img/emoji_like.jpeg'

function Sobre(){
    return(
        <section id='sobre'>
            <div className='wrapper'>
                <div className='emoji'>
                    <img src={emoji} alt=''/>
                </div>

                <div className='content'>
                    <h1>Tema: Task List</h1>
                    <h1>Objetivo: Criar modelo estilo KANBAN</h1>
                    <h1>Desenvolvedor: Gustavo Macrini Godencio</h1>
                    <h1>RA: 2840482313016</h1>
                </div>
            </div>
        </section>          
    )
}

export default Sobre;