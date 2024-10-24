import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
    const queryClient = useQueryClient();

    const { mutate: updateUser, isPending: isUpdating } = useMutation({
        mutationFn: updateProfile,
        onSuccess: () => {
            toast.success("Successfully Saved.");
            queryClient.invalidateQueries({
                queryKey: ["user"],
            });
        },
        onError: (err) => console.log(err),
    });

    return { updateUser, isUpdating };
}
