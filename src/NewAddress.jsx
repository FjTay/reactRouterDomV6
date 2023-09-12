import { useLoaderData, useNavigation, useParams, Form } from "react-router-dom";

const inputData = {
    addressName: ["Address Name", "text"],
    city: ["City", "text"],
    address: ["Address", "text"],
    postCode: ["Post code", "text"],
    country: ["Country", "text"],
}

const NewAddress = ({isEditMode}) => {

    const navigation = useNavigation()
    const addresses = useLoaderData()
    const {addressID} = useParams()

    return (
        <>
        {console.log("++ New Address ++")}
        <div className="formContainer">
            <Form
                    action="/FR/checkout/userAddresses"
                    method="post"
            >
                {Object.entries(inputData).map(([key, [label, type]]) =>
                    <input
                        key={`address-input-${label}`}
                        placeholder={label}
                        aria-label={label}
                        type={type}
                        name={key}
                        defaultValue={isEditMode ? addresses.find(address => address.id === addressID)?.[key] : ""}
                    />
                )}
                <button type="submit" className="ctabutton">SAVE ADDRESS</button>
            </Form>
            {navigation.state === 'submitting' && <div>...saving</div>}
        </div>
        </>
    )
}

export default NewAddress