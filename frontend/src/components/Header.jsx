import {header} from "../utils/data"
import { animateItemNoScroll } from "../utils/gsapAnimations";
import AvailabilityBar from "./AvailabilityBar"
import { IoWifiOutline, IoCloudOutline, IoLaptopOutline } from "react-icons/io5";

const Header = () => {
  animateItemNoScroll('#heroHeader');
  animateItemNoScroll('.header-icons', 1);

  return (
    <header className='overflow-hidden relative w-full h-screen bg-primaryBlue flex items-center justify-center flex-col gap-14'>
      <h1 className="font-semibold text-5xl max-md:text-3xl heading text-center text-white" id="heroHeader">Limitless, affordable <br /> bandwidth for all <br /> your needs</h1>

      <AvailabilityBar sampleLocations={header.sampleLocations} />

      <IoCloudOutline className="headerIcons top-[20%] left-[20%] header-icons max-sm:hidden" size={45} />
      <IoWifiOutline className="headerIcons top-[60%] left-[15%] header-icons max-lg:hidden" size={45} />
      <IoLaptopOutline className="headerIcons top-[45%] md:right-[20%] header-icons right-[5%] max-sm:hidden" size={45} />

      <img src={header.dotGrid} className="headerGridImage" alt="DotGrid" />
      <img src={header.heroImage} className="headerIllustration max-lg:hidden" alt="DotGrid" />
    </header>
  )
}

export default Header
