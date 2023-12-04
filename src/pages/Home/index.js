import './home.css';
import { Link, useNavigate} from 'react-router-dom';
import api from '../../services/api';

function Home() {

  const navigate = useNavigate();

  const exportJson = () => {
    api.post('/exportar_zip');
    navigate('/', {replace: true});
  }

  return (
    <section id='home'>
      <div className='wrapper'>
        <div className='title'>
          <h1>Opções Gerais</h1>
        </div>

        <div className='export-json'>
          <button onClick={exportJson}>Exportar Json</button>
        </div>

        <div className='card'>
            <h2>Card</h2>
            <Link to='/cardCriar'>Criar</Link>
        </div>

        <div className='categoria'>
            <h2>Categoria</h2>            
            <Link to='/categoriaCriar'>Criar</Link>
            <Link to='/categoriaRemove'>Remover</Link>
        </div>

        <div className='pessoa'>
            <h2>Pessoas</h2>            
            <Link to='/pessoaRemove'>Remover</Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
