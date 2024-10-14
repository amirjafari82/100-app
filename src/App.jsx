import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Onboarding from "./pages/Onboarding";
import GlobalStyles from "./styles/GlobalStyles";
import ProtectedRoute from "./ui/ProtectedRoute";
import Cards from "./pages/Cards";
import Profile from "./pages/Profile";

const queryClinet = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClinet}>
            <ReactQueryDevtools
                initialIsOpen={false}
                position="bottom"
                buttonPosition="bottom-left"
            />
            <GlobalStyles />
            <BrowserRouter>
                <Routes>
                    <Route element={<Onboarding />} path="/" />
                    <Route element={<Login page="welcome" />} path="/login" />
                    <Route
                        element={<Login page="verification" />}
                        path="/login/verification"
                    />
                    <Route
                        element={
                            <ProtectedRoute>
                                <Services />
                            </ProtectedRoute>
                        }
                        path="/services"
                    />
                    <Route
                        element={
                            <ProtectedRoute>
                                <Cards />
                            </ProtectedRoute>
                        }
                        path="/cards"
                    />
                    <Route
                        element={
                            <ProtectedRoute>
                                <Profile />
                            </ProtectedRoute>
                        }
                        path="/profile"
                    />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
