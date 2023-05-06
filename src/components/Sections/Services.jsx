import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TextReveal from "../Animation/TextReveal";

const Services = () => {
  const ref = useRef();
  const inView = useInView(ref, { margin: "0px 0px -100px 0px" });

  return (
    <section className="bg-white  mt-32">
      <div className="container mx-auto px-20">
        <div className="flex flex-col gap-y-2 items-center">
          <span className="text-orange font-medium">Our services</span>
          <h2
            className="text-center text-7xl font-bold flex flex-col items-center"
            ref={ref}
          >
            <TextReveal inView={inView}>Home management,</TextReveal>
            <TextReveal inView={inView}>simplified</TextReveal>
          </h2>
        </div>
        <Cards />
      </div>
    </section>
  );
};

export default Services;

const Cards = () => (
  <div className="masonry mt-40">
    <Card className="bg-orange h-[700px]" delay={0.2}></Card>
    <Card className="bg-orange h-[500px]" delay={0.2}></Card>
    <Card className="bg-orange h-[500px]" delay={0.3}></Card>
    <Card className="bg-orange h-[700px]" delay={0.3}></Card>
  </div>
);

const Card = ({ children, className, delay = 0, ...props }) => {
  const ref = useRef();
  const inView = useInView(ref, { margin: "50px" });

  return (
    <motion.div
      ref={ref}
      style={{ willChange: "transform, opacity" }}
      className={`p-10 rounded-[50px] ${className}`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
      transition={{ type: "tween", duration: 0.5, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
