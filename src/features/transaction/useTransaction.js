import { useQuery } from "@tanstack/react-query";
import { getTransactions as getTransactionsAPI } from "../../services/apiTransaction";

export function useGetTransactions() {
    const { isPending, data } = useQuery({
        queryKey: ["transactions"],
        queryFn: getTransactionsAPI,
    });

    return { isPending, data };
}
