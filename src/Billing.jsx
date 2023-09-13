import { useContext } from "react"
import { UserContext } from "./UserContext"
import AddressCard from "./AddressCard"
import { useLoaderData } from "react-router-dom"

const Billing = () => {

  const userContext = useContext(UserContext)
  const addresses = useLoaderData()
  const {
    data : {
      checkout: {
        currentAddresses: {billing}
      }
    }
  } = userContext;

  return (
    <div className="checkoutStep">
    {console.log("Billing")}
        <h2>Billing</h2>
        {billing &&
          <AddressCard
            isEditMode={false}
            userAddress={addresses.find(address => address.id === billing)}
            key={`userAddress-billing-selected`}
          />
        }
    </div>
  )
}

export default Billing