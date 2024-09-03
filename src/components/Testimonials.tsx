"use client";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardBody } from "@nextui-org/react";
import { useSwipeable } from "react-swipeable";
import Fade from "./ui/Fade";
import ResponsiveBox from "./ui/Responsivebox";


interface serviceData{
  imageSrc: string;
  name: string;
  description: string;
}

interface ServicesProps {
  ServiceData: serviceData[];
}

const Testimonials: React.FC<ServicesProps> = ({ ServiceData }) => {

  const numServices = ServiceData.length;
  const [positionIndexes, setPositionIndexes] = useState(
    Array.from({ length: numServices }, (_, i) => i)
  );

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % numServices
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex - 1 + numServices) % numServices
      );
      return updatedIndexes;
    });
  };

  const calculatePositions = (index: number) => {
    const centerIndex = Math.floor(numServices / 2);
    const offset = index - centerIndex;
    const xPosition = `${offset * 60}%`;
    const scale = 1 - Math.abs(offset) * 0.2;
    const zIndex = numServices - Math.abs(offset);
    return { x: xPosition, scale, zIndex };
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleBack,
    onSwipedRight: handleNext,
    trackMouse: true,
  });

  
  return (
    
    <ResponsiveBox
      classNames="bg-[var(--dialogColor)] items-center justify-center"
      
    >
      <section className="bg-white dark:bg-[var(--bgColor)] bg-[var(--bgColor)] w-full">
      

        <Fade opacity={0.8}>
          <div
            className="relative h-[550px] flex items-center justify-center w-full overflow-hidden"
            {...handlers}
          >
            <div
              className="absolute inset-0 w-1/2"
              onClick={handleNext}
              style={{ cursor: "pointer", zIndex: 999 }}
            />
            <div
              className="absolute inset-0 w-1/2 left-1/2 "
              onClick={handleBack}
              style={{ cursor: "pointer", zIndex: 999 }}
            />

            {ServiceData.map((Services, index) => {
              const position = calculatePositions(positionIndexes[index]);
              return (
                <motion.div
                  key={index}
                  className="rounded-[12px] absolute w-[80%] sm:w-[55%] md:w-[35%]"
                  initial={{ x: "0%", scale: 1, zIndex: 1 }}
                  animate={position}
                  transition={{ duration: 0.6 }}
                  // style={{ width: "35%" }}
                >
                  <Card
                    isBlurred
                    className=" bg-white dark:bg-gray-900 max-w-[610px] border-2 border-sky-800 w-full shadow-lg rounded-xl mx-auto"
                    shadow="lg"
                  >
                    <CardBody>
                      <img
                        className="h-auto max-w-lg rounded-xl m-3 border-2 border-sky-300"
                        src={Services.imageSrc}
                      />

                      <div className="flex flex-col items-center justify-center p-4">
                        <h3 className="text-2xl font-bold leading-tight text-blue-900 dark:text-white my-3 text-center">
                          {Services.name}
                        </h3>      
                        <p className="text-lg font-normal my-5 text-gray-500 dark:text-gray-400 text-center">
                          {Services.description}
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Fade>
      </section>
    </ResponsiveBox>
 
  );
};


export {Testimonials};
