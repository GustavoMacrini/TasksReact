import Grid from "../../components/Grid";
import './fazer.css';

function Fazer() {
    
    return (
        <section id='fazer'>
            
            <div className="wrapper-content">
                
                <div className='title-fazer'>
                    <h1>Tarefas a serem realizadas</h1>
                </div>

                <Grid situacao={1}/>

            </div>

        </section>
    );
}

export default Fazer;
