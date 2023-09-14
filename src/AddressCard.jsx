import { useMemo } from "react"
import { motion } from "framer-motion"
import AddressCardButtonLine from "./AddressCardButtonLine"

const AddressCard = (
    {
        isEditMode, 
        userAddress, 
        setcurrentAddressID, 
        iscurrentAddressID, 
        handleUserContext,
        show,
        index
    }) => {

    const {address, addressName, city, country, postCode, id, updatedAt} = userAddress

    const addressCard = () => {
        return (
            <>
                {console.log("++ Address Card++")}
                <motion.div
                    className="userAddressCard"
                    key={`userAddress-${id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 * index, ease: "easeIn" }}
                >
                    <div className="addressData" onClick={() => isEditMode && setcurrentAddressID(id)}>
                        <div className="left">
                            <ul>
                                {[addressName, address, postCode, city, country].map((item, i) => <li key={`address-card-${i}`}>{item}</li>)}
                            </ul>
                        </div>
                        <div className="right">
                            {(iscurrentAddressID || userAddress.isCurrent) && <div className="selected"></div>}
                        </div>
                    </div>
                    <AddressCardButtonLine 
                        isEditMode={isEditMode} 
                        iscurrentAddressID={iscurrentAddressID}
                        handleUserContext={handleUserContext} 
                        id={id}
                    />
                </motion.div>
            </>
        )
    }

    const memoizedAddressCard = useMemo(() => 
        addressCard()
    , [iscurrentAddressID, updatedAt, show])

    return (
        <>
            {show && isEditMode ? memoizedAddressCard : addressCard()}
        </>
    )
}

export default AddressCard