import "./footer.css";
import logo from "../../assets/logo-footer.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";

function Footer() {
  return (
    <>
      <footer className="container-fluid px-0">
        <div className="footer-container">

          <main className="footer-data">

            <div className="text-left">

              <img className="img-logo" src={logo} alt="" />

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
                commodi aliquid sed animi qui veniam repellat excepturi, dignissimos voluptate illo!
              </p>

              <div className="container-icon">
                <img className="icon" src={facebook} alt="Logo do Facebook" />
                <img className="icon" src={instagram} alt="Logo do Instagram" />
                <img className="icon" src={twitter} alt="Logo do Twitter" />
              </div>
            </div>

            <div className="text-right">
              <div className="footer-column">
                <h3>Informações</h3>
                <ul>
                  <li>Sobre Drip Store</li>
                  <li>Segurança</li>
                  <li>Whishlist</li>
                  <li>Blog</li>
                  <li>Trabalhe Conosco</li>
                  <li>Meus Pedidos</li>
                </ul>
              </div>

              <div className="footer-column">
                <h3>Categorias</h3>
                <ul>
                  <li>Camisetas</li>
                  <li>Calças</li>
                  <li>Bonés</li>
                  <li>Headphones</li>
                  <li>Tênis</li>
                </ul>
              </div>

              <div className="footer-column">
                <h3>Contato</h3>
                <ul>
                  <li>
                    Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
                    60150-161
                  </li>
                  <li>(85) 3051-3411</li>
                </ul>
              </div>
            </div>
          </main>
          <p className="copyright">@ 2022 Digital College</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
