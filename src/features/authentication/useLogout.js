import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogout() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: logout, isPending } = useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
            toast.success("You Successfully Logged Out.");
            queryClient.removeQueries();
            navigate("/login", { replace: true });
        },
        onError: (err) => {
            console.log(err);
        },
    });

    return { logout, isPending };
}
