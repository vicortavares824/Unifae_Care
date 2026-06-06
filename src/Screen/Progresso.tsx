import { CircularProgress } from "@/componente/organisms/circular-progress";
import { theme } from "@/styles/global";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";

interface ProgressProps {
    Progress: number;
}

export default function Progresso({ Progress }: ProgressProps) {
    const progressValue = useSharedValue(Progress);

    React.useEffect(() => {
        progressValue.value = Progress;
    }, [Progress, progressValue]);

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                <View
                    style={{
                        padding: 20,
                    }}
                >
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <CircularProgress
                            progress={progressValue}
                            size={100}
                            strokeWidth={8}
                            outerCircleColor="rgba(255,255,255,0.15)"
                            progressCircleColor={theme.colors.primary}
                            backgroundColor="#0000000f"
                            renderIcon={() => <Text>{Progress}%</Text>}
                        />
                        <View style={{ marginLeft: 10, gap: 10 }}>
                            <Text
                                style={{
                                    color: theme.colors.text,
                                    fontSize: 12,
                                    fontWeight: "bold",
                                }}
                            >
                                Você está indo muito bem!
                            </Text>
                            <Text style={{ color: theme.colors.textSecondary, fontSize: 12 }}>
                                Continue Assim 💚
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
});