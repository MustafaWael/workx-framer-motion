import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import defaulf from "../../assets/defaulf.png";

const Why = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [300, -1700]);

  return (
    <section className="bg-white min-h-[500vh]" ref={ref}>
      <div className="sticky top-0 left-0 min-h-screen overflow-hidden">
        <div className="container mx-auto px-20">
          <div className="flex justify-between">
            <div className="flex flex-col justify-center">
              <h2 className="text-8xl font-bold leading-[1.1]">
                Why{" "}
                <span className="inline-flex items-center justify-center w-28 h-24 translate-y-4 bg-orange rounded-full">
                  <img className="w-[80px] h-[80px] object-cover" src={defaulf} alt="" />
                </span>
                <br /> Workx
              </h2>
            </div>
            <motion.div
              className="grid grid-cols-1 gap-y-10 h-screen"
              style={{ y, willChange: "transform" }}
            >
              {[...new Array(8)].map((i) => (
                <Card key={i} className="bg-lemonChiffon">
                  <div className="flex flex-col gap-y-4 text-DarkSlateGrey">
                    <span>icon</span>
                    <p className="font-medium text-xl">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas pariatur voluptates commodi ducimus rem veritatis
                      molestias possimus
                    </p>
                  </div>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;

const Card = ({ children, className, ...props }) => {
  return (
    <div className={`w-[400px] p-10 rounded-[50px] ${className}`} {...props}>
      {children}
    </div>
  );
};
