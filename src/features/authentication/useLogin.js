import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: login, isPending } = useMutation({
        mutationFn: (phone) => loginApi(phone),
        onSuccess: (data) => {
            queryClient.setQueryData(["user"], data.data);
            navigate("/services", { replace: true });
            toast.success("You logged in successfully");
        },
        onError: (err) => console.log(err),
    });

    return { login, isPending };
}
