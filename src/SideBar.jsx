import { motion } from "framer-motion"

const SideBar = ({children, sidebar, show}) => {

     return (
        <>
            {console.log('++ Sidebar ++')}
            {show && (
                <motion.div
                    key={sidebar}
                    className="sideBar"
                    initial={{right: '-20rem'}}
                    animate={{right: '0rem'}}
                    exit={{right: '-20rem'}}
                    transition={{ duration: 0.4, ease:'easeIn' }}
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