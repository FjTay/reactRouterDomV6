import { Link } from "react-router-dom"

const CTAButton = ({children, ctAction}) => {
  return (
    <div className="CTAButton"><Link to={ctAction}>{children}</Link></div>
  )
}

export default CTAButton