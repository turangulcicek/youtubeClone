import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

// Kategoriler
export const categories = [
  { name: "Homepage", icon: <AiFillHome />, type: "home" },
  {
    name: "Popular",
    icon: <MdLocalFireDepartment />,
    type: "category",
  },
  {
    name: "Music",
    icon: <CgMusicNote />,
    type: "category",
  },
  { name: "Movies", icon: <FiFilm />, type: "category" },
  { name: "Live", icon: <MdLiveTv />, type: "category" },
  {
    name: "Game",
    icon: <IoGameControllerSharp />,
    type: "category",
  },
  {
    name: "News",
    icon: <ImNewspaper />,
    type: "category",
  },
  {
    name: "Sports",
    icon: <GiDiamondTrophy />,
    type: "category",
  },
  {
    name: "Informative  ",
    icon: <RiLightbulbLine />,
    type: "category",
  },
  {
    name: "Güzellik & Kozmetik",
    icon: <GiEclipse />,
    type: "category",
    divider: true,
  },
  { name: "Ayarlar", icon: <FiSettings />, type: "menu" },

  {
    name: "Report History",
    icon: <AiOutlineFlag />,
    type: "menu",
  },

  { name: "Yardım", icon: <FiHelpCircle />, type: "menu" },

  {
    name: "Send feedback",
    icon: <RiFeedbackLine />,
    type: "menu",
  },
];

// api isteği için
export const options = {
  url: "/home/",
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": "2b463333d7msh300a2f8a6e0e1edp1f0b1ajsn26d4e6813607",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};
