import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundStyled = styled.body`
    main{
        height: 800px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    h1{
        padding: 0;
        margin: 0;
        font-size: 64px;
    }
    a{
        color: blue;
        text-decoration: underline;
    }
`

const NotFound = () => {
    return (
        <NotFoundStyled>
            <main>
                <h1>404</h1>
                <h2>Página não encontrada</h2>
                <Link to={"/"}>Voltar</Link>
            </main>
        </NotFoundStyled>
    );
}
 
export default NotFound;