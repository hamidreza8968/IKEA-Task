import React from 'react';

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div className="product-grid">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>${product.price.toFixed(2)}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
