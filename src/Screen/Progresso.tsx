import { CircularProgress } from "@/componente/organisms/circular-progress";
import { theme } from "@/styles/global";
import React, { useMemo } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@/router/Router";

type ProgressRouteProp = RouteProp<RootStackParamList, "Progressao">;

export default function Progresso() {
    const route = useRoute<ProgressRouteProp>();
    const Progress = route?.params?.Progress ?? 30;
    const progressValue = useSharedValue(Progress);

    React.useEffect(() => {
        progressValue.value = Progress;
    }, [Progress, progressValue]);
    const progressColor = useMemo(() => {
        const t = Math.max(0, Math.min(1, Progress / 100));
        const r = Math.round(255 * (1 - t));
        const g = Math.round(255 * t);
        return `rgb(${r},${g},0)`;
    }, [Progress]);
    const statusMessage = useMemo(() => {
        if (Progress < 30) return "Começo de jornada! Continue assim.";
        if (Progress < 70) return "Você está indo muito bem, quase lá!";
        if (Progress < 100) return "Falta muito pouco, não desista agora!";
        return "Parabéns! Você concluiu tudo!";
    }, [Progress]);

    return (
        <View style={styles.container}>
            <ScrollView 
                showsVerticalScrollIndicator={false} 
                contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.circularSection}>
                    <CircularProgress
                        progress={progressValue}
                        size={200}
                        strokeWidth={15}
                        outerCircleColor="rgba(255,255,255,0.15)"
                        progressCircleColor={progressColor}
                        backgroundColor="#0000000f"
                        renderIcon={() => <Text style={styles.percentageText}>{Progress}%</Text>}
                    />
                    <Text style={styles.fractionText}>
                        {Math.round(Progress / 3)} / 30
                    </Text>
                </View>
                <View style={styles.statusSection}>
                    <Text style={styles.statusText}>{statusMessage}</Text>
                </View>
                <View style={styles.linearProgressContainer}>
                    <Text style={styles.sectionTitle}>Progresso Linear</Text>
                    <View style={styles.linearProgressBarBg}>
                        <View 
                            style={[
                                styles.linearProgressBarFill, 
                                { width: `${Progress}%`, backgroundColor: progressColor }
                            ]} 
                        />
                    </View>
                </View>
                <View style={styles.cardsContainer}>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Concluído</Text>
                        <Text style={styles.cardValue}>{Progress}%</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Restante</Text>
                        <Text style={styles.cardValue}>{Math.max(0, 100 - Progress)}%</Text>
                    </View>
                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5", 
    },
    scrollContent: {
        padding: 20,
        paddingTop: 80,
        alignItems: "center",
    },
    circularSection: {
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 20,
    },
    percentageText: {
        fontSize: 24,
        fontWeight: "bold",
    },
    fractionText: {
        marginTop: 20,
        fontSize: 20,
        color: theme.colors.text,
        fontWeight: "bold",
    },
    statusSection: {
        marginBottom: 40,
        paddingHorizontal: 20,
    },
    statusText: {
        fontSize: 16,
        textAlign: "center",
        color: "#666",
        fontStyle: "italic",
    },
    linearProgressContainer: {
        width: "100%",
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#333",
    },
    linearProgressBarBg: {
        height: 12,
        backgroundColor: "#e0e0e0",
        borderRadius: 10,
        overflow: "hidden",
    },
    linearProgressBarFill: {
        height: "100%",
        borderRadius: 10,
    },
    cardsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        gap: 15,
    },
    card: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, 
    },
    cardTitle: {
        fontSize: 14,
        color: "#888",
        marginBottom: 5,
        fontWeight: "500",
    },
    cardValue: {
        fontSize: 22,
        fontWeight: "bold",
        color: theme.colors.text,
    },
});