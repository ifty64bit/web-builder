import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../libs/react-query";

function DefaultProvider({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}

export default DefaultProvider;
