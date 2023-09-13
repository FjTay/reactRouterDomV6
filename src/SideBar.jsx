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
                            {children}
                        </div>
                </motion.div>
            )}
        </>
    )
}

export default SideBar