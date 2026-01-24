import "bootstrap-icons/font/bootstrap-icons.css";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styled from "styled-components";

const HeaderStyled = styled.header`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

    :root{
        --primary: #C92071;
        --secondary: #B5B6F2;
        --tertiary: #991956;
        --error: #EE4266;
        --success: #52CA76;
        --warning: #F6AA1C;

        /* Grayscale */
        --dark-gray: #1F1F1F;
        --dark-gray-2: #474747;
        --dark-gray-3: #666666;
        --light-gray: #8F8F8F;
        --light-gray-2: #CCCCCC;
        --light-gray-3: #F5F5F5;
        --white: #FFFFFF;
    }

    a{
        text-decoration: none;
        color: var(--dark-gray-2);
    }

    .header-body {
        font-family: 'Inter', sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 150px;
        padding-right: 150px;
        padding-top: 35px;
        padding-bottom: 30px;
    }

    .main-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 10px;
        gap: 50px;
    }

    .search-wrapper{
        position: relative;
        width: 100%;
    }

    .search-wrapper input{
        width: 900px;
        height: 60px;
        border-radius: 4px;
        border: 1px solid var(--light-gray-3);
        background-color: var(--light-gray-3);
        font-size: 16px;
        padding: 20px;
    }

    .search-wrapper button {  
        position: absolute; 
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        background: none;
        border: none;
        padding: 10px;
    }

    .search-wrapper button i{
        color: var(--light-gray-2);
    }

    .main-header nav ul li{
        list-style: none;
    }

    .main-header ul{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        padding: 0px;
        margin: 0px;
    }

    .sign-up a{
        font-size: 16px;
        text-decoration: underline;
        text-underline-offset: 5px;
    }

    .sign-in a{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--primary);
        width: 114px;
        height: 40px;
        border-radius: 4px;
        text-decoration: none;
        font-weight: bold;
        color: var(--white);
        font-size: 14px;
    }

    .sign-in a:hover{
        transition: 0.5s ease;
        background-color: var(--tertiary);
    }

    .mini-chart{
        background: none;
        border: none;
    }

    .nav-links{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        margin-top: 35px;
    }

    .nav-links ul{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px;
        gap: 35px;
    }

    .nav-links ul li{
        list-style: none;
    }

    .nav-links a{
        font-size: 16px;
    }

    .active{
        color: var(--primary);
        font-weight: bold;
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 5px;
    }
`;

const Header = () => {
    return (
        <HeaderStyled>
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
        </HeaderStyled>
    );
}
 
export default Header;