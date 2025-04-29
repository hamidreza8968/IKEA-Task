import { ProductListProps } from '../../interfaces/IProduct.ts';
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem.tsx";

const ProductList= ({ products } : ProductListProps) => {
    return (
        <div className="product-grid">
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
