import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: login, isLoading } = useMutation({
        mutationFn: (phone) => loginApi(phone),
        onSuccess: (data) => {
            console.log(data);
            queryClient.setQueryData(["user"], data.data);
            navigate("/account", { replace: true });
        },
        onError: (err) => console.log(err),
    });

    return { login, isLoading };
}
