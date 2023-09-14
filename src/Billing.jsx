import { useContext, useEffect } from "react"
import { UserContext } from "./UserContext"
import AddressCard from "./AddressCard"
import { useLoaderData, useParams } from "react-router-dom"

const Billing = () => {

  const userContext = useContext(UserContext)
  const addresses = useLoaderData()
  const {
    data : {
      checkout: {
        currentAddresses: {billing}
      }
    }
  } = userContext

  const params = useParams()

  return (
    <div className="checkoutStep">
    {console.log("Billing")}
        <h2>Billing</h2>
        {billing  &&
          <AddressCard
            index={1}
            show={true}
            isEditMode={false}
            userAddress={addresses.find(address => address.id === billing)}
            key={`userAddress-billing-selected`}
          />
        }
    </div>
  )
}

export default Billing