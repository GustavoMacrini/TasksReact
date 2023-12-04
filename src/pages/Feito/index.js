import './feito.css';
import Grid from "../../components/Grid";

function Feito (){
    return(
        <section id='feito'>
            <div className="wrapper-content">
                
                <div className='title-fazer'>
                    <h1>Tarefas finalizadas</h1>
                </div>

                <Grid situacao={3}/>

            </div>
        </section>
    )
}

export default Feito;