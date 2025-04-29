import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../api/apiClient';
import { Product } from '../interfaces/types';

export const useProducts = () => {
    return useQuery<Product[]>({
        queryKey: ['products'],
        queryFn: () => apiClient<Product[]>('/products'),
        staleTime: 1000 * 60 * 5
    });
};
