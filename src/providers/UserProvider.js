import React, {useState, useEffect,  createContext} from "react";
import { auth } from "../services/firebase";

export const UserContext = createContext({user: null});

const UserProvider = (props) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
        if(user){
            console.log(user);
            const { displayName, email,uid,photoURL } = user;
            setUser({
                displayName,
                email,
                uid,
                photoURL
            });
        }
    });
}, []);



  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  )
}

export default UserProvider;