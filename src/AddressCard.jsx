import { useMemo } from "react"
import { Form, Link } from "react-router-dom"

const AddressCard = ({isEditMode, userAddress, setCurrentAddress, isCurrentAddress}) => {

    const {address, addressName, city, country, postCode, id, updatedAt} = userAddress

    const addresscard = useMemo(() => {
        return (
            <>
                {console.log("++ Address Card++")}
                <div className="userAddress" >
                    <div className="addressData" onClick={() => isEditMode && setCurrentAddress(userAddress)}>
                        <div className="left">
                            <ul>
                                {[addressName, address, postCode, city, country].map((item, i) => <li key={`address-card-${i}`}>{item}</li>)}
                            </ul>
                        </div>
                        <div className="right">
                            {(isCurrentAddress || userAddress.isCurrent) && <div className="selected"></div>}
                        </div>
                    </div>
                    <div className="buttonContainer">
                        {isEditMode && 
                            <Form
                                action={`userAddresses/destroy/${id}`}
                                method="post"
                            >
                                <button type="submit">Delete Address</button>
                            </Form>
                        }
                        <Link 
                            to={`userAddresses/editAddress/${id}`}
                        >
                            <button type="button">Edit Address</button>
                        </Link>
                    </div>
                </div>
            </>
        )
    }, [isCurrentAddress, updatedAt])

    return (
        addresscard
    )
}

export default AddressCard