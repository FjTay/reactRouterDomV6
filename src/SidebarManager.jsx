import { useParams } from "react-router-dom"
import NewAddress from "./NewAddress"
import UserAddresses from "./UserAddresses"
import SideBar from "./SideBar"
import { AnimatePresence } from "framer-motion"

const SidebarManager = () => {

  const params = useParams()  

  return (
    <>
      <AnimatePresence>
        {console.log('++ SidebarManager ++')}
        {
        params.dataType === "userAddresses" &&
          <SideBar  sidebar={"userAddresses"} show={params.dataType === "userAddresses"}>
            <UserAddresses></UserAddresses>
          </SideBar>
        }
        {params.actionType === "newAddress" &&
          <SideBar key={"newAddress"} sidebar={"newAddress"} show={params.actionType === "newAddress"}>
              <NewAddress></NewAddress>
          </SideBar>
        }
        {params.actionType === "editAddress" &&
          <SideBar key={"editAddress"} sidebar={"editAddress"} show={params.actionType === "editAddress"}>
              <NewAddress isEditMode={true}></NewAddress>
          </SideBar>
        }
      </AnimatePresence>
    </>
  )
}

export default SidebarManager