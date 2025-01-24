import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getUser as APIGetUser } from "../../services/apiAuth";

export function useGetUser() {
    const queryClient = useQueryClient();

    const { mutate: getUser, isPending } = useMutation({
        mutationFn: (id) => APIGetUser(id),
        onSuccess: (data) => {
            queryClient.setQueryData(['user', data.id], data);
            console.log(data);
        },
        onError: (err) => console.log(err),
    });

    return { getUser, isPending, };
}
