import { createAddress, updateaddress } from "./addressesHelpers"
import { Link, Outlet, Form, useParams, redirect } from "react-router-dom"
import SidebarManager from "./SidebarManager"
import Billing from "./Billing"
import { useContext } from "react"
import { UserContext } from "./UserContext"

let callBack;

export async function sidebarAction({request}) {
    await callBack(request)
    return null
}

const Checkout = () => {

    const { data, setData } = useContext(UserContext)
    const params = useParams()  
    const switchAction = {
    "newAddress" : async (request) => {
        const formData = await request.formData()
        const newAddress = Object.fromEntries(formData)
        await createAddress(newAddress)
        redirect("/FR/checkout/userAddresses")
        return null
    },
    "editAddress" : async (request) => {
        const formData = await request.formData()
        const updatedAddress = {...Object.fromEntries(formData), updatedAt: Date.now()}
        await updateaddress(params.addressID, updatedAddress)
        redirect("/FR/checkout/userAddresses")
        return null
    },
    "userAddresses" : async (request) => {
        const formData = await request.formData()
        const {userAddress} = Object.fromEntries(formData)
        console.log(userAddress)
        setData(prevData => ({
            ...prevData,
            checkout: {
                ...prevData.checkout,
                currentAddresses: {
                    ...prevData.checkout.currentAddresses,
                    billing: JSON.parse(userAddress)
                }
            }
        }))
        return null
    },
    "default" : () => alert("hello summary")
  }
  callBack = switchAction[params.actionType || params.dataType || "default"]

    return (
        <div>
            {console.log('++ Checkout ++')}
            <SidebarManager/>
            <div className="checkoutHeader">
                <div className='logoContainer'>
                    <Link to="/FR/home">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/KENZO-PARIS_LOGO.svg/2560px-KENZO-PARIS_LOGO.svg.png"></img>
                    </Link>
                </div>
            </div>
            <Link to="/FR/checkout">Checkout</Link>
            <Link to="userAddresses/newAddress">New Address</Link>
            <Link to="userAddresses">User Address</Link>
            <Link to="orderSummary">Order Summary</Link>
            <Billing />
            <Outlet/>
            <Form
                method="post"
                action=""
            >
                <button type="submit">SUBMIT CHECKOUT</button>
            </Form>
        </div>
    )
}

export default Checkout