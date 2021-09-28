import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "../Avatar";
import { styles } from "./style";

export function Profile() {
    return(
        <View style={styles.container}>
            
        <Avatar urlImage="https://github.com/moabedebug.jpg"/>

        <View>
            <View style={styles.user}>
                <Text style={styles.greenting}>
                    Olá,
                 </Text>

                 <Text style={styles.username}> 
                     Moabe
                 </Text>
            </View>

            <Text style={styles.message}>
                Hoje é dia de vitória
            </Text>

        </View>

        </View>
    )
}