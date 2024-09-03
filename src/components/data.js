import {
  FaceSmileIcon,
  Cog8ToothIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";


import benefitOneImg from "../../public/img/wall.png";

const benefitOne = {
  title: "About Us",
  desc: "At INpower, we are dedicated to providing top-notch laptop repair services with a commitment to excellence and customer satisfaction. Founded with the vision of delivering reliable and efficient repair solutions, our team of skilled technicians is here to ensure your technology remains in peak condition.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Expert Technicians",
      desc: "Our skilled technicians are experts in repairing all types of laptop issues",
      icon: <Cog8ToothIcon />,
    },
    {
      title: "Customer-Centric Approach",
      desc: "Mainlt focused on Customer needs.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Comprehensive Services",
      desc: "Full range of laptop care.",
      icon: <WrenchScrewdriverIcon />,
    },
  ],
};



export {benefitOne};
