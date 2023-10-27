import { MaterialIcons } from '@expo/vector-icons';
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from '../style.js';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.js';

export default function Comanda({ navigation }) {
    const {username} = useContext(AuthContext)
    return (
        <View style={styles.containerBetween}>
            <View style={styles.header}>
                <View>
                    <Text>Olá,</Text>
                    <Text style={styles.title}>{username}</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <MaterialIcons name="exit-to-app" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View>
                <TextInput style={styles.input} placeholder="Comanda" />
                <TouchableOpacity onPress={() => navigation.navigate('Produtos')} style={styles.button}>
                    <Text style={styles.buttonText}>Confirmar</Text>
                </TouchableOpacity>
            </View>

            <Text>Digite o código da comanda para iniciar um pedido</Text>

        </View>
    )
}