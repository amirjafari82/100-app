import { useQuery } from "@tanstack/react-query";
import { getDesCards as getDesCardsAPI } from "../../services/apiCard";

export function useDesCard() {
    const { isPending, data } = useQuery({
        queryKey: ["des-cards"],
        queryFn: getDesCardsAPI,
    });

    return { isPending, data };
}
