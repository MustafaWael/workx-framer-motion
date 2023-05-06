import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import characterImage from "../../assets/character.png";
import TextReveal from "../Animation/TextReveal";

const GettingStarted = () => {
  // Refs
  const h2Ref = useRef();
  const sectionRef = useRef();
  const slideRef = useRef();
  const wrapperRef = useRef();

  // 
  const h2InView = useInView(h2Ref);
  const sectionInView = useInView(sectionRef);

  const { scrollYProgress } = useScroll({ target: wrapperRef });

  const x = useTransform(scrollYProgress, [0.4, 1], [2000, -1700]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.55], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.2, 0.55], [1, 0.8]);
  const rotateLeft = useTransform(scrollYProgress, [0.5, 0.8, 1], [20, -20, 0]);
  const rotateRight = useTransform(
    scrollYProgress,
    [0.5, 0.8, 1],
    [-20, 20, 0]
  );
  const sliderScale = useTransform(
    scrollYProgress,
    [0.45, 0.8, 1],
    [1, 0.7, 1]
  );

  return (
    <motion.section className="min-h-[500vh] mt-32" ref={wrapperRef}>
      <motion.div
        className="bg-DarkSlateGrey sticky top-0 left-0 min-h-screen overflow-hidden"
        ref={sectionRef}
        initial={{ clipPath: "circle(5% at 50% 80%)" }}
        animate={{
          clipPath: `circle(${sectionInView ? "100%" : "5%"} at 50% 80%)`,
        }}
        transition={{
          type: "tween",
          duration: sectionInView ? 1.5 : 0.5,
        }}
        style={{ willChange: "clip-path" }}
      >
        <div className="container mx-auto">
          <motion.div
            style={{ opacity, scale, willChange: "transform, opacity" }}
          >
            <div className="flex flex-col justify-center items-center mt-20">
              <span className="text-orange font-medium uppercase">
                Get Started
              </span>
              <h2
                className="text-center text-7xl font-bold flex flex-col items-center"
                ref={h2Ref}
              >
                <TextReveal className="text-white" inView={h2InView}>It doesn't get</TextReveal>
                <TextReveal className="text-orange" inView={h2InView}>much easier</TextReveal>
              </h2>
            </div>

            <div className="flex justify-center mt-20">
              <img
                className="w-[400px] h-[400px]"
                src={characterImage}
                alt="character"
              />
            </div>
          </motion.div>

          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
            ref={slideRef}
          >
            <motion.div
              className="flex gap-x-60"
              style={{ x, scale: sliderScale, willChange: "transform" }}
            >
              {[...new Array(4)].map((_, i) => {
                return (
                  <Card
                    key={i}
                    index={i}
                    rotateLeft={rotateLeft}
                    rotateRight={rotateRight}
                  >
                    <h3 className="text-6xl text-orange font-medium">
                      Hello There
                    </h3>
                    <p className="font-medium text-2xl mt-6">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nam repellat eaque omnis neque minima cupiditate
                      voluptates illum atque est eligendi assumenda hic
                      voluptatem, nisi velit aliquam magnam veritatis.
                      Recusandae, aliquam.
                    </p>
                  </Card>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default GettingStarted;

const Card = ({ index = 0, children, rotateLeft, rotateRight, ...props }) => {
  return (
    <motion.div
      className="flex-[1_0_450px] h-[450px] rounded-[50px] bg-floralwhite p-12"
      initial={{
        rotate: index % 2 === 0 ? 20 : -20,
        transformOrigin: "center center",
      }}
      style={{
        rotate: index % 2 === 0 ? rotateLeft : rotateRight,
        willChange: "transform",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
