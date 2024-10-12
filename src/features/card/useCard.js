import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCards as getCardsAPI } from "../../services/apiCard";

export function useCard() {
    const queryClient = useQueryClient();

    const {
        mutate: getCards,
        isPending,
        data,
    } = useMutation({
        mutationFn: getCardsAPI,
        onSuccess: (data) => {
            console.log(data);
            queryClient.setQueryData(["cards"], data.data);
        },
        onError: (err) => console.log(err),
    });

    return { getCards, isPending, data };
}
