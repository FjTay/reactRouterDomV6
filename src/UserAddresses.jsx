import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { getAddresses } from "./addressesHelpers";
import AddressCard from "./AddressCard";
import { useState, useContext, useEffect, useRef } from "react";
import { UserContext } from "./UserContext";
import SideBarClose from "./SideBarClose";

export async function loader() {
    const addresses = await getAddresses()
    return addresses
}

const UserAddresses = () => {

    const addresses = useLoaderData()
    const navigate = useNavigate()
    const selectedAddress = useRef()
    const {data, setData} = useContext(UserContext)
    const [currentAddress, setCurrentAddress] = useState(data.checkout.currentAddresses.billing)

    useEffect(() => {
        selectedAddress.current = currentAddress
    }, [currentAddress])

    useEffect(() => {
        return (() => {
            if(selectedAddress.current) {
                setData(prevData => ({
                    ...prevData,
                    checkout: {
                        ...prevData.checkout,
                        currentAddresses: {
                            ...prevData.checkout.currentAddresses,
                            billing: selectedAddress.current.id
                        }
                    }
                }))
            }   
        })
    }, [])

    const handleClose = () => {
        setCurrentAddress(false)
        navigate("/FR/checkout")
    }

    return (
        <>
            {addresses.length ?
                <>
                    {/* <div className="sidebarClose">
                        <button type="submit" onClick={() => handleClose()}>&#x2573;</button>
                    </div> */}
                    <SideBarClose callBack={handleClose}/>
                    {addresses.length && 
                        addresses.map((address, index) => 
                            <AddressCard 
                                key={`userAddressCard-${index}`} 
                                isEditMode={true} 
                                userAddress={address} 
                                setCurrentAddress={setCurrentAddress} 
                                isCurrentAddress={address.id === currentAddress?.id}
                            />
                        )
                    }
                    <button 
                        type="button"
                        className="ctabutton"
                    ><Link to="/FR/checkout">SAVE BILLING ADDRESS</Link></button>
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