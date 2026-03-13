import ProductCard from "../ProductCard/ProductCard";
import "./ProductListing.css";

const ProductListing = ({limite}) => {

    const products = [
        {
            productCategory: "Tênis",
            productName: "K-Swiss V8 - Masculino",
            image: "public/product-thumb-1.jpeg",
            price: 200,
            priceDiscount: 100
        },
        {
            productCategory: "Tênis",
            productName: "K-Swiss V8 - Masculino",
            image: "public/product-thumb-2.jpeg",
            price: 200,
            priceDiscount: 100
        },
        {
            productCategory: "Tênis",
            productName: "K-Swiss V8 - Masculino",
            image: "public/product-thumb-2.jpeg",
            price: 200,
            priceDiscount: 100
        },
        {
            productCategory: "Tênis",
            productName: "K-Swiss V8 - Masculino",
            image: "public/product-thumb-2.jpeg",
            price: 200,
            priceDiscount: 100
        },
        {
            productCategory: "Tênis",
            productName: "K-Swiss V8 - Masculino",
            image: "public/product-thumb-2.jpeg",
            price: 200,
            priceDiscount: 100
        },
        {
            productCategory: "Tênis",
            productName: "K-Swiss V8 - Masculino",
            image: "public/product-thumb-2.jpeg",
            price: 200,
            priceDiscount: 100
        },
        {
            productCategory: "Tênis",
            productName: "K-Swiss V8 - Masculino",
            image: "public/product-thumb-2.jpeg",
            price: 200,
            priceDiscount: 100
        },
        {
            productCategory: "Tênis",
            productName: "K-Swiss V8 - Masculino",
            image: "public/product-thumb-2.jpeg",
            price: 200,
            priceDiscount: 100
        },
        {
            productCategory: "Tênis",
            productName: "K-Swiss V8 - Masculino",
            image: "public/product-thumb-2.jpeg",
            price: 200,
            priceDiscount: 100
        },
        {
            productCategory: "Tênis",
            productName: "K-Swiss V8 - Masculino",
            image: "public/product-thumb-2.jpeg",
            price: 200,
            priceDiscount: 100
        },
        {
            productCategory: "Tênis",
            productName: "K-Swiss V8 - Masculino",
            image: "public/product-thumb-2.jpeg",
            price: 200,
            priceDiscount: 100
        },
        {
            productCategory: "Tênis",
            productName: "K-Swiss V8 - Masculino",
            image: "public/product-thumb-2.jpeg",
            price: 200,
            priceDiscount: 100
        },
        {
            productCategory: "Tênis",
            productName: "K-Swiss V8 - Masculino",
            image: "public/product-thumb-2.jpeg",
            price: 200,
            priceDiscount: 100
        },
        {
            productCategory: "Tênis",
            productName: "K-Swiss V8 - Masculino",
            image: "public/product-thumb-2.jpeg",
            price: 200,
            priceDiscount: 100
        },
        {
            productCategory: "Tênis",
            productName: "K-Swiss V8 - Masculino",
            image: "public/product-thumb-2.jpeg",
            price: 200,
            priceDiscount: 100
        },
        {
            productCategory: "Tênis",
            productName: "K-Swiss V8 - Masculino",
            image: "public/product-thumb-2.jpeg",
            price: 200,
            priceDiscount: 100
        },
        {
            productCategory: "Tênis",
            productName: "K-Swiss V8 - Masculino",
            image: "public/product-thumb-2.jpeg",
            price: 200,
            priceDiscount: 100
        },
        {
            productCategory: "Tênis",
            productName: "K-Swiss V8 - Masculino",
            image: "public/product-thumb-2.jpeg",
            price: 200,
            priceDiscount: 100
        },
        {
            productCategory: "Tênis",
            productName: "K-Swiss V8 - Masculino",
            image: "public/product-thumb-2.jpeg",
            price: 200,
            priceDiscount: 100
        },
        {
            productCategory: "Tênis",
            productName: "K-Swiss V8 - Masculino",
            image: "public/product-thumb-2.jpeg",
            price: 200,
            priceDiscount: 100
        }
    ]

    return (
        <>
            <div className="product-listing-container">
                {products.slice(0, limite).map((product, index) => (
                    <ProductCard
                        key={index}
                        productCategory={product.productCategory}
                        productName={product.productName}
                        image={product.image}
                        price={product.price}
                        priceDiscount={product.priceDiscount}
                    />
                ))}

            </div>

        </>
    );
}
export default ProductListing;