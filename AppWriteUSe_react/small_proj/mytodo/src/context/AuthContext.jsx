import { useState, useEffect, createContext, useContext } from "react";
import { account } from "../appwrite/config";

//Here we are creating the context :---> by default we can give value in createContext(defaultvalue)
const AuthContext = createContext();

//We created one function Authprovider and writing all the funtionality withis this function
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        const response = await checkUserStatus();
        setUser(response);
        setLoading(false);
    };

    const checkUserStatus = async () => {
        try {
            const userData = await account.get();
            return userData;
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    const loginUser = async (email, password) => {
        setLoading(true);
        try {
            await account.createEmailPasswordSession(email, password);
            const response = await checkUserStatus();
            setUser(response);

        } catch (error) {

            console.error(error);
        }
        setLoading(false);
    };

    const registerUser = async(name,email,password)=>{
        setLoading(true);
        try {
           await account.create(name,email,password);
           const response = await checkUserStatus();
           setUser(response);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    }

    const logoutUser = async () => {
        await account.deleteSession("current");
        setUser(null);
    };

    //Here we are accumilating all the functions within one variable.
    const contextData = { user, loginUser, logoutUser,registerUser};

    //we are returning with provider so that we will directly warap with AuthContext in App.jsx
    return (
        <AuthContext.Provider value={contextData}>
            {loading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    );
};

// Here we are creating one another function so no need to use in every file useContext from here only we are managing.

const useAuth = () => {
    return useContext(AuthContext);
};

//Here we are exporting.
export { useAuth };

export default AuthProvider;