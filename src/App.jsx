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
import EditProfile from "./pages/EditProfile";
import ProtectedScreen from "./ui/ProtectedScreen";
import { Toaster } from "react-hot-toast";

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
                    <Route
                        element={
                            <ProtectedScreen>
                                <Onboarding />
                            </ProtectedScreen>
                        }
                        path="/"
                    />
                    <Route
                        element={
                            <ProtectedScreen>
                                <Login page="welcome" />
                            </ProtectedScreen>
                        }
                        path="/login"
                    />
                    <Route
                        element={
                            <ProtectedScreen>
                                <Login page="verification" />
                            </ProtectedScreen>
                        }
                        path="/login/verification"
                    />
                    <Route
                        element={
                            <ProtectedRoute>
                                <ProtectedScreen>
                                    <Services />
                                </ProtectedScreen>
                            </ProtectedRoute>
                        }
                        path="/services"
                    />
                    <Route
                        element={
                            <ProtectedRoute>
                                <ProtectedScreen>
                                    <Cards />
                                </ProtectedScreen>
                            </ProtectedRoute>
                        }
                        path="/cards"
                    />
                    <Route
                        element={
                            <ProtectedRoute>
                                <ProtectedScreen>
                                    <Profile />
                                </ProtectedScreen>
                            </ProtectedRoute>
                        }
                        path="/profile"
                    />
                    <Route
                        path="/profile/edit"
                        element={
                            <ProtectedRoute>
                                <ProtectedScreen>
                                    <EditProfile />
                                </ProtectedScreen>
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </BrowserRouter>
            <Toaster
                position="top-center"
                gutter={7.5}
                containerStyle={{
                    margin: "8px",
                }}
                toastOptions={{
                    success: {
                        duration: 3000,
                    },
                    error: {
                        duration: 5000,
                    },
                    style: {
                        fontSize: "12px",
                        maxWidth: "300px",
                        padding: "16px 24px",
                        backgroundColor: "#ffffff",
                        color: "#0F1FD1",
                    },
                }}
            />
        </QueryClientProvider>
    );
}

export default App;
