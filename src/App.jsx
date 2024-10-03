import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Home from "./pages/home";
import Onboarding from "./pages/Onboarding";
import { AuthProvider } from "./context/AuthContext";
import GlobalStyles from "./styles/GlobalStyles";
import Login from "./pages/Login";
import ProtectedRoute from "./ui/ProtectedRoute";

const queryClinet = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        },
    },
});

function App() {
    return (
        <AuthProvider>
            <QueryClientProvider client={queryClinet}>
                <ReactQueryDevtools initialIsOpen={false} />
                <GlobalStyles />
                <BrowserRouter>
                    <Routes>
                        <Route element={<Onboarding />} path="/" />
                        <Route
                            element={<Login page="welcome" />}
                            path="/login"
                        />
                        <Route
                            element={<Login page="verification" />}
                            path="/login/verification"
                        />
                        <Route
                            element={
                                <ProtectedRoute>
                                    <Home />
                                </ProtectedRoute>
                            }
                            path="/account"
                        />
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </AuthProvider>
    );
}

export default App;
