import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
} from "@iconscout/react-unicons";

import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "List Offer",
  },
  {
    icon: UilUsersAlt,
    heading: "Interns Accounts",
  },
  {
    icon: UilPackage,
    heading: 'Newsletter'
  },
  {
    icon: UilChart,
    heading: 'Analytics'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Views",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "20K",
    png: UilUsersAlt,
    series: [
      {
        name: "Views",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Latest Offers",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "10K",
    png: UilClipboardAlt,
    series: [
      {
        name: "Latest Offers",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Feedback",
    color: {
      backGround:
      "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
    boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4K",
    png: UilPackage,
    series: [
      {
        name: "Feedback",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "As a marketing intern, I had the opportunity to actively contribute to diverse marketing.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "s a web development intern, I had the incredible opportunity to work alongside experienced developers.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron WoMan",
    noti: "As a business intern, I had a transformative experience delving into various facets of the company.",
    time: "2 hours ago",
  },
];