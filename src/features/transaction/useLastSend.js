import { useQuery } from "@tanstack/react-query";

import { last_sends } from "../../services/apiTransaction";

export function useLastSend() {
    const { isPending, data } = useQuery({
        queryKey: ["last_sends"],
        queryFn: last_sends,
    });

    return { data, isPending };
}
