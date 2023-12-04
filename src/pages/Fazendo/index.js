import Grid from "../../components/Grid";
import './fazendo.css';

function Fazendo() {
  return (
    <section id='fazendo'>
        <div className="wrapper-content">
            
            <div className='title-fazer'>
                <h1>Tarefas a serem realizadas</h1>
            </div>

            <Grid situacao={2}/>

        </div>
    </section>
  );
}

export default Fazendo;