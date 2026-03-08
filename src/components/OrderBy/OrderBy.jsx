import "./OrderBy.css";

const OrderBy = () => {

    return (
        <div className="order-by">
            <label for="price">Ordenar por:</label>

            <select name="price" id="price">
                <option value="menor-preco">menor preço</option>
                <option value="maior-preco">maior preço</option>
            </select>
        </div>
    )
}

export default OrderBy;