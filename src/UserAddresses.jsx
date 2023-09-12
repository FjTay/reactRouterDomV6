import { Link, Form, useLoaderData } from "react-router-dom";
import { getAddresses } from "./addressesHelpers";

export async function loader() {
    const addresses = await getAddresses()
    return addresses
}

const UserAddresses = () => {

    const addresses = useLoaderData()

    return (
        <>
            {addresses.length ?
                <>
                    <Form
                        action="/FR/checkout"
                        method="post"
                    >

                            <h1>With Radios</h1>
                            <span>
                            <input id="Radio1" name="Radios" type="radio" checked/>
                            <label for="Radio1">Option 1</label>
                            </span>

                            <span>
                            <input id="Radio2" name="Radios" type="radio"/>
                            <label for="Radio2">Option 2</label>
                            </span>

                            <span>
                            <input id="Radio3" name="Radios" type="radio"/>
                            <label for="Radio3">Option 3</label>
                            </span>

                        {/* {addresses.map((address, index) => (
                            <div className="addressCard" key={`userAddress-${address.id}`}>
                            <label className="custom-radio">
                                <input
                                type="radio"
                                id={`userAddress-${address.id}`}
                                name="userAddressGroup"
                                value={JSON.stringify(address)}
                                />
                                {`Option ${index + 1}`}
                            </label>
                            </div>
                        ))} */}
                        <button 
                            type="submit" 
                            className="ctabutton"
                        >SAVE BILLING ADDRESS</button>
                    </Form>
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

{/* <>
                {addresses.map((address, i) =>
                    <AddressCard
                        isEditMode={true}
                        isCurrentAddress={currentAddress?.id === address.id}
                        handleAddress={handleAddress}
                        userAddress={address}
                        index={i}
                        key={`userAddress-${address.id}`}
                    />)
                }
                    <button type="submit" className="ctabutton">SAVE BILLING ADDRESS</button>
                </> */}