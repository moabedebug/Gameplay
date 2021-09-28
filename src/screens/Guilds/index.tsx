import React from "react";
import { View,FlatList } from "react-native";

import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

import { styles } from './style'

type Props = {
    handleGuildSelect: (guild: GuildProps) => void
}

export function Guilds({ handleGuildSelect } : Props){
const guilds = [
    {
        id:'1',
        name: 'Lendários',
        icon: null,
        owner: false

    },
    {
        id:'2',
        name: 'Galera do Game',
        icon: null,
        owner: false

    }
]

    return(
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Guild
                        data={item}
                        onPress={() => handleGuildSelect(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => <ListDivider isCentered />}
                contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
                ItemSeparatorComponent={() => <ListDivider isCentered  />}
                style={styles.guilds}
            />
        </View>
    )
}