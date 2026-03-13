import "./ProductViewPage.css";
import ProductGallery from "../../components/ProductGallery/ProductGallery";
import ProductListing from "../../components/ProductListing/ProductListing";
import Section from "../../components/Section";
import { useState } from "react";

const ProductViewPage = () => {

  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <>
      <main className="product-view-page-container">
        <section className="section-product">
          <ProductGallery />
          <aside className="aside-product">
            <h2>Tênis Nike Revolution 6 Next Nature Masculino</h2>
            <p className="info-product">Casual | Nike | REF:38416711</p>

            <div className="rating-product">
              <div className="stars">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span className="star-empty">★</span>
              </div>

              <span className="rating-score">
                4.7 <span>★</span>
              </span>

              <span className="rating-count">(90 avaliações)</span>
            </div>

            <p className="price-product">
              <span className="coin-product">R$</span>
              <strong>
                <span className="value-product">219</span>
                <span className="cents-product">,00</span>
              </strong>
              <span className="dell-price-product">
                <del>219,00</del>
              </span>
            </p>

            <h3>Descrição do Produto</h3>
            <p className="description-p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              esse! Sit labore beatae, praesentium sint hic corrupti porro
              tenetur explicabo ad temporibus laborum necessitatibus qui fugit
              soluta.
            </p>

            <h3>Tamanho</h3>

            <div className="size-product">
              {[31, 35, 38, 40, 42].map((size) => (
                <button
                  key={size}
                  className={selectedSize === size ? "active" : ""}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>

            <h3>Cores</h3>
            <div className="color-product">
              <input type="radio" name="color" id="blue" defaultChecked />
              <label htmlFor="blue" className="color color-blue"></label>

              <input type="radio" name="color" id="red" />
              <label htmlFor="red" className="color color-red"></label>

              <input type="radio" name="color" id="gray" />
              <label htmlFor="gray" className="color color-gray"></label>

              <input type="radio" name="color" id="purple" />
              <label htmlFor="purple" className="color color-purple"></label>
            </div>

            <button type="button" className="buy-button-product">
              COMPRAR
            </button>
          </aside>
        </section>

        <Section title="Produtos recomendados" textAlign="left" link={{ text: "Ver todos →", href: "/produtos"}}>
              <ProductListing limite={4}/>
        </Section>
      </main>
    </>
  );
};

export default ProductViewPage;
