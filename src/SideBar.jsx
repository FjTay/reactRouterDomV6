import { motion } from "framer-motion"
import { Form } from "react-router-dom";

const SideBar = ({children, sidebar, show}) => {

    const cardVariants = {
        initial: {
          right: '-20rem'
        },
        in: {
            right: '0rem',
        },
        out: {
            right: '-20rem',
        }
      };

     return (
        <>
            {console.log('++ Sidebar ++')}
            {show && (
                <motion.div
                    key={sidebar}
                    className={"sideBar"}
                    initial="initial"
                    animate="in"
                    exit="out"
                    transition={{ duration: 0.4, ease:'easeIn' }}
                    variants={cardVariants}
                >
                        <div className="sideBarContainer">
                            <div className="sidebarClose">
                                <Form
                                    method="get"
                                    action="/FR/checkout"    
                                >
                                    <button type="submit">&#x2573;</button>
                                </Form>
                            </div>
                            {children}
                        </div>
                </motion.div>
            )}
        </>
    )
}

export default SideBar