import React from "react";
import { createStackNavigator } from "@react-navigation/stack"; 

import { Home } from "../screens/Home"; 
import { SignIn } from "../screens/SignIn";
import { AppointmentDetails } from "../screens/AppointmenstDetails"
import { AppointmentCreate } from "../screens/AppointmenstCreate";

import { theme } from "../global/styles/theme";

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes(){
     return(
         <Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: theme.colors.secondary100
                },
                headerShown: false
            }}
         >
             <Screen
                name="SignIn"
                component={SignIn} 
             />
            <Screen                
                name="Home"
                component={Home}
             />
            <Screen                
                name="AppointmentDetails"
                component={AppointmentDetails}
             />
             <Screen                
                name="AppointmentCreate"
                component={AppointmentCreate}
             />
             
             
             
         </Navigator>
         
     )
}