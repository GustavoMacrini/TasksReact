import './header.css';

import { Link } from "react-router-dom";

function Header(){
    return(
        <section id='header'>
            <div className='wrapper'>                
                <div className='links'>
                    <Link to='/'>
                        <h1>Home</h1>
                    </Link>
                    <Link to='fazer'>
                        <h1>Fazer</h1>
                    </Link>
                    <Link to='/fazendo'>
                        <h1>Fazendo</h1>
                    </Link>
                    <Link to='/feito'>
                        <h1>Feito</h1>
                    </Link>
                    <Link to='/sobre'>
                        <h1>Sobre</h1>
                    </Link>
                </div>

                <div className='login'>
                    <Link to='/login'>
                        Login 
                    </Link>
                </div>

            </div>
        </section>
        
    )
}

export default Header;