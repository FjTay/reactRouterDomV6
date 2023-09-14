import { Form, Link } from "react-router-dom"

const AddressCardButtonLine = ({isEditMode, iscurrentAddressID, handleUserContext, id}) => {
  return (
    <div className="buttonContainer">
        {isEditMode &&
            <Form
                action={`userAddresses/destroy/${id}`}
                method="post"
                onSubmit={() => iscurrentAddressID && handleUserContext(false)}
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
  )
}

export default AddressCardButtonLine