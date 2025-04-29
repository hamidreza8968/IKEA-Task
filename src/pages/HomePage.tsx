import React, { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductList from '../components/ProductList/ProductList';
import Pagination from '../components/Pagination/Pagination';
import Input from '../components/ui/Input/Input';
import '../styles/global.css';
import './HomePage.css';
import Spinner from "../components/ui/Spinner/Spinner";

const HomePage = () => {
    const { data: products = [], isLoading, isError, error } = useProducts();
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 6;

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const displayedProducts = filteredProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    if (isLoading) return <Spinner />;
    if (isError) return <div className="error">{(error as Error).message}</div>;

    return (
        <div className="container">
            <h1>Product Store</h1>
            <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <ProductList products={displayedProducts} />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default HomePage;
