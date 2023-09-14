import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { getAddresses } from "./addressesHelpers";
import AddressCard from "./AddressCard";
import { useState, useContext, useEffect, useRef } from "react";
import { UserContext } from "./UserContext";
import SideBarClose from "./SideBarClose";
import { AnimatePresence } from "framer-motion";

export async function loader() {
    const addresses = await getAddresses()
    return addresses
}

const UserAddresses = () => {

    const addresses = useLoaderData()
    const navigate = useNavigate()
    const selectedAddress = useRef()
    const {data, setData} = useContext(UserContext)
    const [currentAddressID, setcurrentAddressID] = useState(data.checkout.currentAddresses.billing)

    useEffect(() => {
        selectedAddress.current = currentAddressID
    }, [currentAddressID])

    useEffect(() => {
        return (() => {
            selectedAddress.current && handleUserContext()
        })
    }, [])

    const handleUserContext = (value) => {
        setData(prevData => ({
            ...prevData,
            checkout: {
                ...prevData.checkout,
                currentAddresses: {
                    ...prevData.checkout.currentAddresses,
                    billing: value ?? selectedAddress.current
                }
            }
        }))
    }

    const handleClose = () => {
        setcurrentAddressID(false)
        navigate("/FR/checkout")
    }

    return (
        <>
            {addresses.length ?
                <>
                    <SideBarClose callBack={handleClose}/>
                    <AnimatePresence>
                    {addresses.length && 
                        addresses.map((address, index) =>
                            <AddressCard
                                // key={`userAddress-${index}-${address.id}`}
                                index
                                key={`userAddressssssssssss-${address.id}`}
                                show={addresses.find(item => address.id === item.id)}
                                isEditMode={true} 
                                userAddress={address} 
                                setcurrentAddressID={setcurrentAddressID}
                                handleUserContext={handleUserContext}
                                iscurrentAddressID={address.id === currentAddressID}
                            />
                        )
                    }
                    </AnimatePresence>
                    <button
                        onClick={() => navigate("/FR/checkout")}
                        type="button"
                        className="ctabutton"
                    >SAVE BILLING ADDRESS</button>
                </>
                : <>
                    <p>No addresses for this account</p>
                    <Link to="userAddresses/newAddress">New Address</Link>
                </>
            }
        </>
    )
}

export default UserAddresses