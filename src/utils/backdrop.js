import { motion } from "framer-motion";
const Backdrop = ({ children, onClick }) => {
 
    return (
      <motion.div
          className='fixed flex items-center justify-center inset-0 w-full h-full transition-all z-40  backdrop-blur-sm'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, background:"rgba(0,0,0,0.5)" }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    );
  };

  export default Backdrop