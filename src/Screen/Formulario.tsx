import GooeySwitch from "@/componente/micro-interactions/gooey-switch";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Cadastro from "../Screen/Cadastro";
import Login from "../Screen/Login";
import { theme } from "@/styles/global";

export default function Formulario() {
    const [isCadastro, setIsCadastro] = useState(false);

    return (
        <GestureHandlerRootView style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.title}>Seja Bem vindo</Text>
                <Text style={styles.title}>ao Organizador de Estudos</Text>
                <GooeySwitch
                    active={isCadastro}
                    onToggle={setIsCadastro}
                    activeColor={theme.colors.primary}
                    size={150}
                    trackColor={theme.colors.background}
                    gooey={35}
                    deformation={{
                        squishY: 0.5,
                        stretchX: 1.2,
                    }}
                />
            </View>

            <View style={styles.content}>
                {isCadastro ? <Cadastro /> : <Login />}
            </View>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary,
    },
    header: {
        paddingTop: 60,
        alignItems: 'center',
        zIndex: 10,
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: theme.colors.white,
        textAlign: "center",
    }
});
