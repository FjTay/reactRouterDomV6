import { deleteAddress } from "./addressesHelpers";

export async function deleteAction({params : {addressID}}) {
  await deleteAddress(addressID)
  return addressID
}