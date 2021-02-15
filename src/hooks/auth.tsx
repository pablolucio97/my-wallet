import React, {useContext, createContext, useState} from 'react'

interface IAuthContext{
    logged: boolean;
    signIn(email: string, password: string):void;
    signOut():void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider : React.FC = ({children}) => {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@my-wallet:logged')
        return !!isLogged
    })

    const signIn = (email: string, password: string) => {
        if(email === 'admin@test.com' && password === '12345678'){
            localStorage.setItem('@my-wallet:logged' , 'true');
            setLogged(true)
        }else{
            window.alert('Password or e-mail is incorrect!');
        }
    }
    
    const signOut = () => {
        localStorage.removeItem('@my-wallet:logged');
        setLogged(false);
    }

    return (
        <AuthContext.Provider value={{signIn, signOut, logged}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth () : IAuthContext {
    
    const context = useContext(AuthContext);

    return context;
}

export{useAuth, AuthProvider}