import { useQuery } from "@tanstack/react-query"

const fetchUsers = () => {
    const data = localStorage.getItem("users")
    return data ? JSON.parse(data) : []
}

export const useUsers = ()=> {
    return useQuery ({
        queryKey: ["users"],
        queryFn: fetchUsers,
    })
}