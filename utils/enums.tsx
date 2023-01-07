import MobileLanguageIcon from "@/components/common/Navbar/MobileLanguageIcon";
import Booking from "./icons/Booking";
import Home from "./icons/Home";
import Key from "./icons/Key";
import Noti from "./icons/Noti";
import Room from "./icons/Room";
import Wifi from "./icons/Wifi";
// import Noti from "./icons/Noti";
import { featureInterface, NavigationsInterface, ServiceInterface } from "./interfaces";
import { languages } from "./languages";

export const NAVIGATIONS: NavigationsInterface[] = [
    {
        id: 1,
        icon: <Home size={15} color={"gray"} />,
        name: languages.home,
        href: '/'
    },
    {
        id: 2,
        icon: <Booking size={15} color={"gray"} />,
        name: languages.myBookAndOrder,
        href: '/booking'
    },
]

export const MOBILE_NAVIGATIONS: NavigationsInterface[] = [
    {
        id: 1,
        icon: <Home size={15} color={"gray"} />,
        name: languages.home,
        href: '/',
        isLink: true,
    },
    {
        id: 2,
        icon: <Booking size={15} color={"gray"} />,
        name: languages.myBookAndOrder,
        href: '/booking',
        isLink: true,
    },
    {
        id: 3,
        icon: <Noti size={15} color={"gray"} />,
        name: languages.notification,
        href: '/notification',
        isLink: true,
    },
    {
        id: 4,
        icon: <MobileLanguageIcon />,
        name: languages.language,
        href: '/booking',
        isLink: false,
    },
]

export const FEATURES:featureInterface[] = [
    {
        id: 1,
        icon: <Key size={'50%'} color={"white"} />,
        name: languages.virtualKey
    },
    {
        id: 2,
        icon: <Room size={'50%'} color={"white"} />,
        name: languages.smartRoom
    },
    {
        id: 3,
        icon: <Wifi size={'50%'} color={"white"} />,
        name: languages.wifi
    },
    {
        id: 4,
        icon: <Key size={'50%'} color={"white"} />,
        name: languages.hotelInformation
    },
]

export const SERVICES:ServiceInterface[] = [
    {
        id: 1,
        name: languages.roomService,
        img: "/images/hotel1.jpg"
    },
    {
        id: 2,
        name: languages.serviceRequest,
        img: "/images/hotel2.jpg"
    },
    {
        id: 3,
        name: languages.roomService,
        img: "/images/hotel3.jfif"
    },
    {
        id: 4,
        name: languages.serviceRequest,
        img: "/images/hotel1.jpg"
    }
]