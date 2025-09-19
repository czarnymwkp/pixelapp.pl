import { useMutation, useQueryClient } from "@tanstack/react-query"

type User = {
    name:string,
    surname:string,
}

export const useAddUser = () => {
    const queryClient = useQueryClient();
    return useMutation(
       {
        mutationFn: (newUser : User) => {
            const data = localStorage.getItem("users")
            const users = data ? JSON.parse(data) : [];

            const update = [ ...users, newUser]

            localStorage.setItem("users", JSON.stringify(update))

            return Promise.resolve(update) 
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["users"]})
        }

       }
    )
}