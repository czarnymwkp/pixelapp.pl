import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../firebase"


type User = {
    id:string,
    login:string,
    password:string
}

export const UserDemo = () => {
    const [user, setUser] = useState<User[]>([]);

    useEffect(()=> {
        const fetchUsers = async () => {
            const snap = await getDocs(collection(db, "users"));
            const list = snap.docs.map(doc => ({
                id: doc.id,
                ...(doc.data() as {login:string; password: string})
            }))
            setUser(list)
        }
        fetchUsers()
    }, []); 
    return (
        <div style={{ padding: "20px" }}>
            <h2>Lista użytkowników</h2>
            <ul>
                {user.map(u => (
                    <li key={u.id}>
                        {u.login} | {u.password}
                    </li>
                ))}
            </ul>
        </div>
    )
    
}
