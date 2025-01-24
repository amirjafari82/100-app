import { useMutation } from "@tanstack/react-query";

import { transfer as apiTransfer } from "../../services/apiTransaction";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useTransfer() {
    const navigate = useNavigate();

    const { mutate: transfer, isPending: isTransfering } = useMutation({
        mutationFn: (data) => apiTransfer(data),
        onSuccess: (data) => {
            navigate("/services", { replace: true });
            toast.success("Transfer successfully Completed!");
            console.log(data);
        },
        onError: (err) => console.log(err),
    });

    return { transfer, isTransfering };
}
