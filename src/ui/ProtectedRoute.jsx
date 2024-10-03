import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    useEffect(
        function () {
            if (!isAuthenticated) navigate("/login");
        },
        [navigate, isAuthenticated]
    );

    if (isAuthenticated) return children;
}

export default ProtectedRoute;
