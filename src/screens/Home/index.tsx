import React, { useState } from "react";
import { View, FlatList, } from "react-native";
import { useNavigation } from "@react-navigation/core";

import { CategorySelect } from "../../components/CategorySelect";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointments";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";


import { styles } from "./style";



export function Home(){
    const [category, setCategory] = useState('')

    const navigation = useNavigation()

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owener: true
            },
            category: '1',
            date: '22/06 ás 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owener: true
            },
            category: '1',
            date: '22/06 ás 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    function handleAppointmenDetails(){
        navigation.navigate('AppointmentDetails')
    }

    function handleAppointmentCreate(){
        navigation.navigate('AppointmentCreate')
    }

    return(
        <Background>
            <View style={styles.Header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate}/>
        </View>
               
           <CategorySelect
             CategorySelect={category}
             setCategory={handleCategorySelect}
             />

                <ListHeader
                    title='Partidas agendadas'
                    subtitle='Total 6'
                />
   
                <FlatList
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Appointment 
                        data={item}
                        onPress={handleAppointmenDetails}
                        />
                    )}
                        ItemSeparatorComponent={() => <ListDivider /> }
                        contentContainerStyle={{ paddingBottom: 69 }}
                        style={styles.matches}
                        showsVerticalScrollIndicator={false}

                />
     </Background>
    )
} 