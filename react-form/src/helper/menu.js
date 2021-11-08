import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import LocalLibraryOutlinedIcon from "@material-ui/icons/LocalLibraryOutlined";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import React from "react";

export const menu = [
  {
    icon: <HomeOutlinedIcon />,
    title: "Dashboard",
    path: '/landing/dashboard',
    items: []
  },
  {
    icon: <HomeOutlinedIcon />,
    title: "Colors",
    path: '/landing/colors',
    items: []
  },
  {
    icon: <HomeOutlinedIcon />,
    title: "Typography",
    path: '/typography',
    items: []
  },
  {
    icon: <LocalLibraryOutlinedIcon />,
    title: "Base",
    items: [
      {
        title: "Accordian",
        path: '/accordian',
        items: []
      },
      {
        title: "Cards",
        path: '/cards',
        items: []
      },
      {
        title: "Carousel",
        path: '/carousel',
        items: []
      }
    ]
  },
  {
    icon: <TrendingUpOutlinedIcon />,
    title: "Buttons",
    path: '/buttons',
    items: []
  },
  {
    icon: <DescriptionOutlinedIcon />,
    title: "Forms",
    path: '/forms',
    items: []
  }
];
