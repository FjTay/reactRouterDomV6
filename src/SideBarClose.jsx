import { Form } from "react-router-dom"

const SideBarClose = ({callBack}) => {
  return (
    <div className="sidebarClose">
        <Form
            method="get"
            action="/FR/checkout"    
        >
            <button 
                type="submit" 
                onClick={() => callBack && callBack()}
            >&#x2573;</button>
        </Form>
    </div>
  )
}

export default SideBarClose