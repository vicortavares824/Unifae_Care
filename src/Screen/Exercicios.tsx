import { api } from "@/api/api";
import Botao from "@/componente/base/button";
import { RootStackParamList } from "@/router/Router";
import { theme } from "@/styles/global";
import { CompletionResponse } from "@/types/plan.type";
import { Ionicons } from "@expo/vector-icons";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import YoutubePlayer from "react-native-youtube-iframe";
import CompVoltar from "../comp/CompVoltar";

type FeedbackRouteProp = RouteProp<RootStackParamList, "Exercicios">;

interface ExerciciosProps {
  route: FeedbackRouteProp;
}

export default function Exercicios({ route }: ExerciciosProps) {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { exercise } = route.params;

  async function handleConclusion() {
    setIsLoading(true);

    const result = await api.post<CompletionResponse>(
      `/v1/app/home/plan/exercises/${exercise.prescriptionItemId}/complete`,
    );

    const completion = result.data;

    setIsLoading(true);
    navigation.navigate("Feedback", { executionId: completion.executionId });
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginLeft: -10, marginTop: 10 }}>
          <CompVoltar tile="UNIFAE Care" />
          <Image
            source={require("../../assets/images/Fae_Logo.jpg")}
            style={{
              width: 50,
              height: 50,
              resizeMode: "contain",
              borderRadius: 50,
              position: "absolute",
              right: 10,
              top: 20,
            }}
          />
        </View>
        <View style={styles.center}>
          <Text style={styles.botaoMembros}>
            {exercise.taxonomy.axis.toUpperCase()}
          </Text>
          <Text style={styles.botaoMembros}>
            {exercise.taxonomy.objective.toUpperCase()}
          </Text>
          <Text style={styles.botaoMembros}>
            {exercise.taxonomy.problem.toUpperCase()}
          </Text>
        </View>
        <View style={styles.center1}>
          <Text style={styles.tilte}>{exercise.title}</Text>
          {exercise.videoUrl && (
            <View style={{ marginTop: 20, width: "100%", height: 250 }}>
              <YoutubePlayer
                height={250}
                width={"100%"}
                videoId={exercise.videoUrl.substring(
                  exercise.videoUrl.lastIndexOf("v=") + 2,
                  exercise.videoUrl.indexOf("&") === -1
                    ? undefined
                    : exercise.videoUrl.indexOf("&"),
                )}
              />
            </View>
          )}
        </View>
        <View style={styles.cards}>
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              paddingVertical: 10,
              borderRadius: 10,
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: theme.colors.primary,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="barbell-outline"
                size={26}
                color={theme.colors.white}
              />
            </View>
            <View>
              <Text style={styles.titulo}>Séries</Text>
              <Text>{exercise.metrics.series}</Text>
              <Text>Unidades</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              paddingVertical: 10,
              borderRadius: 10,
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: theme.colors.primary,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="accessibility-outline"
                size={26}
                color={theme.colors.white}
              />
            </View>
            <View>
              <Text style={styles.titulo}>Volume</Text>
              <Text>{exercise.metrics.volume}</Text>
              <Text>Repetições</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.PasTitle}>Passo Passo</Text>

          {exercise.steps.map((step) => (
            <View
              key={step.order}
              style={{ flexDirection: "row", gap: 10, marginTop: 20 }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: 50,
                  height: 50,
                  backgroundColor: theme.colors.primary,
                  borderRadius: 50,
                }}
              >
                <Text style={{ color: theme.colors.white, fontWeight: "bold" }}>
                  {step.order}
                </Text>
              </View>
              <View style={{ width: "85%" }}>
                <Text style={{ fontWeight: "bold" }}>Passo {step.order}</Text>
                <Text>{step.text}</Text>
              </View>
            </View>
          ))}
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.PasTitle}>Notas do Fisioterapeuta</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 10, marginTop: 20 }}>
          <View style={{ width: "85%" }}>
            <Text>{exercise.physiotherapistNotes}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 100,
          }}
        >
          <Botao
            backgroundColor={theme.colors.primary}
            width={320}
            onPress={() => handleConclusion()}
            isLoading={isLoading}
            loadingText="finalizando..."
            showLoadingIndicator
            style={{
              alignSelf: "center",
              borderRadius: 10,
              marginTop: 40,
            }}
          >
            <Text style={{ color: theme.colors.white, fontWeight: "bold" }}>
              Concluir Atividade
            </Text>
          </Botao>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  PasTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  cards: {
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
  banner: {
    marginTop: 24,
    borderRadius: 16,
    paddingVertical: 28,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.text,
    alignItems: "center",
    width: "100%",
    height: 150,
  },
  bannerBrand: {
    fontSize: 22,
    fontWeight: "800",
    color: theme.colors.white,
  },
  compVoltar: {
    marginTop: 20,
    marginBottom: 20,
  },
  center: {
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  center1: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  botaoMembros: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  tilte: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
  },
  titulo: {
    fontSize: 16,
    color: "#8f8f8fff",
  },
});
