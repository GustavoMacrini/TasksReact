import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Fazendo from "./pages/Fazendo";
import Erro from './pages/Erro';
import Fazer from "./pages/Fazer";
import Feito from "./pages/Feito";
import Login from "./pages/Login";
import Sobre from "./pages/Sobre";
import Cadastro from "./pages/Cadastro";
import CardCriar from "./pages/CardCriar";
import CategoriaCriar from "./pages/CategoriaCriar";
import CategoriaRemove from "./pages/CategoriaRemove";
import PessoaRemove from "./pages/PessoasRemove";

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/fazer' element={<Fazer/>}/>
                <Route path='/fazendo' element={<Fazendo/>} />
                <Route path='/fazendo/:id' element={<Fazendo/>}/>
                <Route path='/feito' element={<Feito/>} />
                <Route path='/feito/:id' element={<Feito/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/sobre' element={<Sobre/>}/>
                <Route path='/registro' element={<Cadastro/>}/>
                <Route path='/cardCriar' element={<CardCriar/>}/>
                <Route path='/categoriaCriar' element={<CategoriaCriar/>}/>
                <Route path='/categoriaRemove' element={<CategoriaRemove/>}/>
                <Route path='/pessoaRemove' element={<PessoaRemove/>}/>

                <Route path='*' element={<Erro/>}/>
            </Routes>
            
        </BrowserRouter>
    )
}

export default RoutesApp;