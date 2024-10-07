import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";

function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    const { isLoading, isAuthenticated } = useUser();

    useEffect(
        function () {
            if (!isAuthenticated && !isLoading) navigate("/login");
        },
        [navigate, isAuthenticated, isLoading]
    );

    if (isAuthenticated) return children;
}

export default ProtectedRoute;
