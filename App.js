import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import Temperature from './app/components/Temp'
import Distance from './app/components/Distance'
import Num from './app/components/Number'
import Time from './app/components/Tme'
import Currency from './app/components/Currency'
import Home from './app/components/Home'

const SideNav = createDrawerNavigator({
  Home:{
    screen:Home,
  },
  Temperature:{
    screen:Temperature,
  },
  Number:{
    screen:Num,
  },
  Distance:{
    screen:Distance,
  },
  Time:{
    screen:Time,
  },
  Currency:{
    screen:Currency,
  },
})

export default createAppContainer(SideNav)