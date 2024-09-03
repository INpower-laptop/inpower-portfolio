import {
  FaceSmileIcon,
  Cog8ToothIcon,
  WrenchScrewdriverIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";


import benefitOneImg from "../../public/img/wall.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

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

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
