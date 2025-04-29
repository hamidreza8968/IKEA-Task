export interface Rating {
    rate: number;
    count: number;
}

export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;
    rating: Rating;
};

export interface ProductItemProps {
    product: Product;
}

export interface ProductListProps {
    products: Product[];
}