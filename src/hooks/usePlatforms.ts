import platforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query";
import useData, { FetchResponse } from "./useData";
import apiClient from "../services/api-client";

interface Platform {
    id: number,
    name: string,
    slug: string
}

const usePlatforms = () => //{
    //return useData<Platform>("/platforms/lists/parents");
    //}
    useQuery({
        queryKey: ["platforms"],
        queryFn: () =>
            apiClient
                .get<FetchResponse<Platform>>("/platforms/lists/parents")
                .then(res => res.data),
        staleTime: 24 * 60 * 60 * 1000, //24h
        initialData: { count: platforms.length, results: platforms }
    })

export default usePlatforms;