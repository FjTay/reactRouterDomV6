import { useContext } from "react"
import { UserContext } from "./UserContext"
import AddressCard from "./AddressCard"

const Billing = () => {

  const userContext = useContext(UserContext)
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
            userAddress={billing}
            key={`userAddress-billing-selected`}
          />
        }
    </div>
  )
}

export default Billing