import { useState } from "react";


export const Usuario = () => {

    interface User{
        id: string;
        name: string;
    }

    const[user, setUser] = useState<User>()
    const login = ()=>{
        setUser({
            id:"ABC123",
            name: "Flavio"
        })
    }

    return (
        <div className="mt-5">
            <h3>Usuario</h3>    
            <button onClick={login} className="btn btn-outline-primary">Login</button>
            {
                (!user)? <pre>No hay usuario</pre>: <pre>{JSON.stringify(user)}</pre>
            }

        </div>
    );
};



