import { useLoaderData, useParams, useLoaderData } from "react-router-dom"
import NewAddress from "./NewAddress"

const EditAddress = () => {

  const addresses  = useLoaderData()
  const {addressID} = useParams()

  return (
    <>
      {console.log("++ Edit Address ++")}
      <NewAddress address={addresses?.find(address => address.id === addressID)}></NewAddress>
    </>
  )
}

export default EditAddress