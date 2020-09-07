import React, {useState} from "react";
import {View, ScrollView, StyleSheet, Button, TextInput, Text} from "react-native";
import {generarAtaques} from "../helpers";

const Home = () => {
    let inputPocionRoja;
    let inputPocionAzul;
    let inputPocionVerde;
    let inputPocionAmarilla;
    let inputPocionGris;


    const [pocionRoja, guardarPocionRoja] = useState({color: 'Roja', numero: 0});
    const [pocionAzul, guardarPocionAzul] = useState({color: 'Azul', numero: 0});
    const [pocionVerde, guardarPocionVerde] = useState({color: 'Verde', numero: 0});
    const [pocionAmarilla, guardarPocionAmarilla] = useState({color: 'Amarilla', numero: 0});
    const [pocionGris, guardarPocionGris] = useState({color: 'Gris', numero: 0});
    const [efectividad, guardarEfectividad] = useState(0);

    const obtenerEfectividad = () => {
        const efectividad = generarAtaques([pocionRoja, pocionAzul, pocionVerde, pocionAmarilla, pocionGris]);
        guardarEfectividad(efectividad);
        inputPocionRoja.setNativeProps({text: ''});
        inputPocionAzul.setNativeProps({text: ''});
        inputPocionAmarilla.setNativeProps({text: ''});
        inputPocionVerde.setNativeProps({text: ''});
        inputPocionGris.setNativeProps({text: ''});
    }
    return (
        <View>
            <ScrollView
                style={styles.inputContainer}>
                <TextInput
                        placeholder='Poción Roja'
                        keyboardType='numeric'
                        ref = {input => inputPocionRoja = input}
                        style={styles.input}
                        onChangeText={valor => guardarPocionRoja({color: 'Roja', numero: parseInt(valor) || 0})}
                />
                <TextInput
                    placeholder='Poción Azul'
                    keyboardType='numeric'
                    ref = {input => inputPocionAzul = input}
                    style={styles.input}
                    onChangeText={valor => guardarPocionAzul({color: 'Azul', numero: parseInt(valor) || 0})}
                />
                <TextInput
                    placeholder='Poción Verde'
                    keyboardType='numeric'
                    ref = {input => inputPocionVerde = input}
                    style={styles.input}
                    onChangeText={valor => guardarPocionVerde({color: 'Verde', numero: parseInt(valor) || 0})}
                />
                <TextInput
                    placeholder='Poción Amarilla'
                    keyboardType='numeric'
                    ref = {input => inputPocionAmarilla = input}
                    style={styles.input}
                    onChangeText={valor => guardarPocionAmarilla({color: 'Amarilla', numero: parseInt(valor) || 0})}
                />
                <TextInput
                    placeholder='Poción Gris'
                    keyboardType='numeric'
                    ref = {input => inputPocionGris = input}
                    style={styles.input}
                    onChangeText={valor => guardarPocionGris({color: 'Gris', numero: parseInt(valor) || 0})}
                />
                <View
                    style={styles.buttonContainer}>
                    <Button
                        title="Generar ataques"
                        color="#3FA7D6"
                        onPress={() => obtenerEfectividad()}
                    />
                </View>
            </ScrollView>
            {efectividad === 0 ? null : <View style={styles.textContainer}>
                <Text style={styles.textContainer}>EFECTIVIDAD: {efectividad} %</Text>
            </View> }
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 30,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 20
    },
    input: {
        height: 50,
        marginTop: 20,
        borderBottomColor: '#b7b7a4',
        borderBottomWidth: 1,

    },
    buttonContainer: {
      marginTop: 30,
    },
    textContainer: {
        alignItems: 'center',
        fontWeight: "bold",
        height: 70,
        fontSize: 25
    }

});

export default Home
