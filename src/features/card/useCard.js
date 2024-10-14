import { useQuery } from "@tanstack/react-query";
import { getCards as getCardsAPI } from "../../services/apiCard";

export function useCard() {
    const { isPending, data } = useQuery({
        queryKey: ["cards"],
        queryFn: getCardsAPI,
    });

    return { isPending, data };
}
