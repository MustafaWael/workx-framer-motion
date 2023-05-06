import { motion } from "framer-motion";

const TextReveal = ({ children, inView = true, ...props }) => {
  return (
    <div className="overflow-hidden leading-[1.2]">
      <motion.span
        style={{
          display: "inline-block",
          willChange: "transform, opacity",
        }}
        initial={{ opacity: 0, y: 100, rotate: 8 }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 100,
          rotate: inView ? 0 : 8,
        }}
        transition={{ type: "tween", duration: 0.5, delay: 0.4 }}
        {...props}
      >
        {children}
      </motion.span>
    </div>
  );
};

export default TextReveal;
