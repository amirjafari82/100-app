import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";
import toast from "react-hot-toast";

function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    const { isPending, isAuthenticated } = useUser();

    useEffect(
        function () {
            if (!isAuthenticated && !isPending) {
                navigate("/login");
            }
        },
        [navigate, isAuthenticated, isPending]
    );

    if (isAuthenticated) return children;
}

export default ProtectedRoute;
