import { createContext, useState } from "react";

export const UserContext = createContext()

export function UserContextProvider({ children }) {
    const [data, setData] = useState({
        customer : {
            addressBook: [
                {
                    id: "context adress"
                }
            ]
        },
        checkout: {
            currentAddresses: {
                shipping: null,
                billing: null
            }
        }
    })

    return (
        <UserContext.Provider value={{ data, setData }}>
            {children}
        </UserContext.Provider>
    )
}