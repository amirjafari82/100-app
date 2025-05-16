import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getBalance as getBalanceAPI } from "../../services/apiBalance";
import { useSearchParams } from "react-router-dom";

export function useGetBalance() {
    const [searchParams, setSearchParams] = useSearchParams();

    const {
        mutateAsync: getBalance,
        isPending,
        isSuccess,
        data
    } = useMutation({
        mutationFn: getBalanceAPI,
        onSuccess: (res) => {
            if (res.data.status == 406) toast.error(res.data.message);
            if (res.data.status == 204) toast.error("Card Not Found");
            if (res.data.status == 200) {
                searchParams.set("status", "success");
                setSearchParams(searchParams);
                toast.success("144IRT was deducted from your account for the fee.");
                return res.data.balance;
            }
        },
        onError: (err) => console.log(err),
    });

    return { getBalance, isPending, isSuccess, data };
}
