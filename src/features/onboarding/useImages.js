import { useQuery } from "@tanstack/react-query";
import { getImages } from "../../services/apiOnboardingImages";

export function useImages() {
    const {
        isLoading,
        data: images,
        error,
    } = useQuery({
        queryKey: ["images"],
        queryFn: getImages,
    });

    return { isLoading, images, error };
}
