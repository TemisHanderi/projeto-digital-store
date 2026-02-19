import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import "../components/Header.css";

const Header = () => {
    return (
            <div className="header-body">
                <div className="main-header">
                    <Logo/>
                    <form>
                        <div className="search-wrapper">
                            <input type="search" name="buscar" id="buscar" placeholder="Pesquisar produto..."/>
                            <button type="submit"><i className="bi bi-search"></i></button>
                        </div>
                    </form>
                    <nav>
                        <ul>
                            <li className="sign-up"><NavLink to="/cadastro">Cadastre-se</NavLink></li>
                            <li className="sign-in"><NavLink to="/login">Entrar</NavLink></li>
                        </ul>
                    </nav>
                    <button className="mini-chart"><img src="../src/assets/mini-cart.svg" alt="mini-cart" /></button>
                </div>
                <div className="nav-links">
                    <nav>
                        <ul>
                            <li><NavLink to={"/"}>Home</NavLink></li>
                            <li><NavLink to={"/produtos"}>Produtos</NavLink></li>
                            <li><NavLink to={"/categorias"}>Categorias</NavLink></li>
                            <li><NavLink to={"/pedidos"}>Meus Pedidos</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
    );
}
 
export default Header;