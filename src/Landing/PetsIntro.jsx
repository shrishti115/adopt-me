import "./langing.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const arr = [
  {
    id: 1,
    name: "Jasper",
    age: "2 years",
    brief: "Jasper Likes to play with balls and eat food",
    image:
      "/Pictures Of Golden Retrievers - Golden Retriever Photo Gallery.jpeg",
  },
  {
    id: 2,
    name: "Snowbell",
    age: "1 years",
    brief: "Snowbell loves Summer and fishes",
    image: "/Summer Lady Kitty.jpeg",
  },

  {
    id: 3,
    name: "Looney",
    age: "1 years",
    brief: "Looney watches TV and eats carrots",
    image: "/Cutie!.jpeg",
  },
];

function PetsIntro() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
  });

  return (
    <>
      <motion.div
        className="pets-container"
        ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{
          duration: 0.7,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        {arr.map((item) => {
          return (
            <div key={item.id}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="pet-card"
              >
                <img className="pet-image" src={item.image} alt="pet" />
                <div className="pet-info">
                  <h2>Name:{item.name}</h2>
                  <br />
                  <h3>Age:{item.age}</h3>
                  <br />
                  <p>About: {item.brief}</p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </>
  );
}

export default PetsIntro;
