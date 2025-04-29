import { ProductItemProps } from '../../interfaces/IProduct';
import './ProductItem.css';

const ProductItem = ({ product }: ProductItemProps) => {
    return (
        <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            {/*<p className="product-category">Category: {product.category}</p>*/}
            <p className="product-price">${product.price.toFixed(2)}</p>
        </div>
    );
};

export default ProductItem;
