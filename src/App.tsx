import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomePage from './pages/HomePage.tsx';

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <HomePage />
            </div>
        </QueryClientProvider>
    );
};

export default App;
