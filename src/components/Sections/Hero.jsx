import rightArrow from "../../assets/right-arrow.png";
import rightArrow1 from "../../assets/right-arrow-1.png";
import celine from "../../assets/céline.jpg";
import beyzaa from "../../assets/beyzaa-yurtkuran.jpg";
import teona from "../../assets/teona-swift.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-[100vh] bg-orange-100">
      <div className="container mx-auto px-12 flex flex-col justify-center items-center min-h-[100vh]">
        <span className="text-orange font-medium uppercase -mt-8 mb-8">
          BUILT-IN APARTMENT SERVICES
        </span>
        <h1 className="text-9xl font-medium text-center">
          <span className="inline-flex items-center overflow-clip">
            <motion.span
              className="inline-flex items-center"
              initial={{ y: 150 }}
              animate={{ y: 0 }}
              transition={{ type: "tween", duration: 1.2, delay: 1 }}
            >
              All <Images /> the services
            </motion.span>
          </span>
          <br />
          <span className="inline-flex overflow-clip pb-[10px]">
            <motion.span
              className="inline-flex"
              initial={{ y: 150 }}
              animate={{ y: 0 }}
              transition={{ type: "tween", duration: 1.2, delay: 1.5 }}
            >
              you need <Arrows />, right
            </motion.span>
          </span>
          <br />
          <span className="inline-flex overflow-clip pb-[10px]">
            <motion.span
              className="inline-flex items-center"
              initial={{ y: 150 }}
              animate={{ y: 0 }}
              transition={{ type: "tween", duration: 1.2, delay: 1.9 }}
            >
              at{" "}
              <button className="py-8 px-12 mx-4 mt-4 h-fit rounded-full align-middle text-lg text-white bg-orange inline-flex justify-center items-center">
                Get the App
              </button>{" "}
              your app
            </motion.span>
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;

const Images = () => {
  return (
    <div className="inline-flex px-4">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "tween", duration: 0.6, delay: 1.5 }}
        className="w-[85px] h-[85px] overflow-clip border-white border-[3.5px] rounded-3xl align-middle relative"
      >
        <img
          className="absolute w-full h-full object-cover"
          src={celine}
          alt=""
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "tween", duration: 0.6, delay: 1.7 }}
        className="w-[85px] h-[85px] overflow-clip border-white border-[3.5px] rounded-3xl align-middle relative -ml-6"
      >
        <img
          className="absolute w-full h-full object-cover"
          src={beyzaa}
          alt=""
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "tween", duration: 0.6, delay: 1.9 }}
        className="w-[85px] h-[85px] overflow-clip border-white border-[3.5px] rounded-3xl align-middle relative -ml-6"
      >
        <img
          className="absolute w-full h-full object-cover"
          src={teona}
          alt=""
        />
      </motion.div>
    </div>
  );
};

const Arrows = () => {
  return (
    <div className="inline-flex translate-x-2">
      <motion.img
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "tween", duration: 0.6, delay: 2 }}
        className="w-[100px] inline-flex align-middle"
        src={rightArrow}
        alt=""
      />
      <motion.img
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "tween", duration: 0.6, delay: 2.2 }}
        className="w-[100px] inline-flex align-middle -ml-10"
        src={rightArrow1}
        alt=""
      />
    </div>
  );
};
