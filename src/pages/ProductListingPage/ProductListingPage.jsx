
import OrderBy from "../../components/OrderBy/OrderBy";
import FilterGroup from "../../components/FilterGroup/FilterGroup";
import Section from "../../components/Section";
import "./ProductListingPage.css";
import ProductListing from "../../components/ProductListing/ProductListing";

const ProductListingPage = () => {

    const OptionMarca = [
        { "text": "Adiddas", "value": "opt1" },
        { "text": "Calenciaga" },
        { "text": "K-Swiss", "value": "opt3" },
        { "text": "Nike" }
    ]

    const OptionCategoria = [
        { "text": "Esporte e Lazer", "value": "opt1" },
        { "text": "Casual" },
        { "text": "Utilitário", "value": "opt3" },
        { "text": "Corrida" }
    ]

    const OptionGenero = [
        { "text": "Masculino", "value": "opt1" },
        { "text": "Feminino" },
        { "text": "Unissex", "value": "opt3" }
    ]

    const OptionEstado = [
        { "text": "Novo", "value": "opt1" },
        { "text": "Usado" }
    ]

    return (
        <>
            <main className="product-listing-page-container">
                <section className="filter-and-order-container-left">
                    <OrderBy />

                    <div className="filter-by">
                        <h2 id="title-filtrar-por">Filtrar por</h2>

                        <FilterGroup
                            title="Marka"
                            inputType="checkbox"
                            options={OptionMarca}
                        />
                        <FilterGroup
                            title="Categoria"
                            inputType="checkbox"
                            options={OptionCategoria}
                        />
                        <FilterGroup
                            title="Gênero"
                            inputType="checkbox"
                            options={OptionGenero}
                        />
                        <FilterGroup
                            title="Estado"
                            inputType="radio"
                            options={OptionEstado}
                        />
                    </div>
                </section>

                <Section title="Resultados para Tênis - 359 itens" textAlign="left">
                    <ProductListing />
                </Section>

            </main>
 
        </>
    );

}


export default ProductListingPage;