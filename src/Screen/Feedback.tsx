import { api } from "@/api/api";
import Button from "@/componente/base/button";
import { RootStackParamList } from "@/router/Router";
import { theme } from "@/styles/global";
import { Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type BorgLevel = {
  score: number;
  emoji: string;
  title: string;
  description: string;
};

const BORG_SCALE: BorgLevel[] = [
  {
    score: 0,
    emoji: "😊",
    title: "Sem Dor/Esforço",
    description: "Absolutamente confortável",
  },
  {
    score: 2,
    emoji: "🙂",
    title: "Leve",
    description: "Atividade tranquila e sustentável",
  },
  {
    score: 5,
    emoji: "😐",
    title: "Moderado",
    description: "Senti o esforço, mas sem dor",
  },
  {
    score: 8,
    emoji: "😣",
    title: "Intenso",
    description: "Exigiu bastante concentração",
  },
  {
    score: 10,
    emoji: "😫",
    title: "Exaustão",
    description: "Limite físico atingido",
  },
];

interface FeedbackProps {
  route?: {
    params: {
      executionId: number;
    };
  };
}

interface ErrorProps {
  message: string;
  statusCode: string;
}

export default function Feedback({ route }: FeedbackProps) {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [selectedScore, setSelectedScore] = useState<number | null>(null);
  const [notes, setNotes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const executionId = route?.params?.executionId || "";

  const handleSave = async () => {
    if (selectedScore === null) return;

    const url = `v1/app/home/plan/executions/${executionId}/feedback`;
    const payload = {
      score: selectedScore,
      notes: notes.trim(),
    };

    setIsLoading(true);
    try {
      console.log("Enviando feedback:", payload);
      await api.post(url, payload);
      console.log("Feedback enviado com sucesso");
      navigation.replace("Tabs");
    } catch (e: any) {
      const error: ErrorProps = e.response?.data;
      e.stack = "";
      e.message = `ERRO: ${error.statusCode} - ${error.message}`;
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />

      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.replace("Tabs")}
          hitSlop={12}
          accessibilityRole="button"
          accessibilityLabel="Fechar"
        >
          <Ionicons name="close" size={26} color={theme.colors.text} />
        </TouchableOpacity>
        <Text style={styles.brand}>UNIFAE Care</Text>
        <View style={{ width: 26 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.sessionLabel}>SESSÃO FINALIZADA</Text>
        <Text style={styles.title}>Como você se sente?</Text>
        <Text style={styles.subtitle}>
          Avalie seu nível de dor e esforço após o exercício para que possamos
          ajustar seu plano.
        </Text>

        {/* Escala de Borg */}
        <View style={styles.optionsList}>
          {BORG_SCALE.map((level) => {
            const isSelected = selectedScore === level.score;
            return (
              <TouchableOpacity
                key={level.score}
                activeOpacity={0.8}
                onPress={() => setSelectedScore(level.score)}
                style={[styles.option, isSelected && styles.optionSelected]}
                accessibilityRole="radio"
                accessibilityState={{ selected: isSelected }}
              >
                <View style={styles.emojiBox}>
                  <Text style={styles.emoji}>{level.emoji}</Text>
                </View>
                <View style={styles.optionText}>
                  <Text
                    style={[
                      styles.optionTitle,
                      isSelected && styles.optionTitleSelected,
                    ]}
                  >
                    {level.title}
                  </Text>
                  <Text style={styles.optionDescription}>
                    {level.description}
                  </Text>
                </View>
                <Text
                  style={[
                    styles.optionScore,
                    isSelected && styles.optionScoreSelected,
                  ]}
                >
                  {level.score}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Observações adicionais */}
        <View style={styles.notesCard}>
          <Text style={styles.notesLabel}>Observações Adicionais</Text>
          <TextInput
            style={styles.notesInput}
            placeholder="Descreva qualquer desconforto específico ou comentário sobre os exercícios de hoje..."
            placeholderTextColor={theme.colors.textSecondary}
            multiline
            textAlignVertical="top"
            value={notes}
            onChangeText={setNotes}
          />
        </View>

        {/* Banner motivacional */}
        <View style={styles.banner}>
          <Text style={styles.bannerBrand}>UNIFAE Care</Text>
          <Text style={styles.bannerText}>
            Seu progresso é nossa prioridade.
          </Text>
        </View>
      </ScrollView>

      {/* Salvar Feedback */}
      <View style={styles.footer}>
        <Button
          width={320}
          height={56}
          backgroundColor={theme.colors.primary}
          borderRadius={12}
          disabled={selectedScore === null}
          isLoading={isLoading}
          showLoadingIndicator
          loadingText="Salvando..."
          onPress={handleSave}
          style={{ opacity: selectedScore === null ? 0.5 : 1 }}
        >
          <Text style={styles.footerButtonText}>Salvar Feedback</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.Background2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 12,
    backgroundColor: theme.colors.background,
  },
  brand: {
    fontSize: 16,
    fontWeight: "700",
    color: theme.colors.primary,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },
  sessionLabel: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
    color: theme.colors.primary,
    marginBottom: 6,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "800",
    color: theme.colors.text,
    marginBottom: 12,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 15,
    lineHeight: 22,
    color: theme.colors.textSecondary,
    marginBottom: 24,
  },
  optionsList: {
    gap: 12,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.background,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1.5,
    borderColor: "transparent",
  },
  optionSelected: {
    borderColor: theme.colors.primary,
    backgroundColor: "#f1faf1",
  },
  emojiBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: theme.colors.Background2,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  emoji: {
    fontSize: 24,
  },
  optionText: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: theme.colors.text,
  },
  optionTitleSelected: {
    color: theme.colors.primary,
  },
  optionDescription: {
    fontSize: 13,
    color: theme.colors.textSecondary,
    marginTop: 2,
  },
  optionScore: {
    fontSize: 26,
    fontWeight: "800",
    color: theme.colors.unfocused,
    marginLeft: 12,
  },
  optionScoreSelected: {
    color: theme.colors.primary,
  },
  notesCard: {
    backgroundColor: theme.colors.Background2,
    borderRadius: 16,
    padding: 16,
    marginTop: 24,
  },
  notesLabel: {
    fontSize: 15,
    fontWeight: "700",
    color: theme.colors.text,
    marginBottom: 10,
  },
  notesInput: {
    minHeight: 110,
    backgroundColor: theme.colors.background,
    borderRadius: 12,
    padding: 14,
    fontSize: 14,
    color: theme.colors.text,
  },
  banner: {
    marginTop: 24,
    borderRadius: 16,
    paddingVertical: 28,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.text,
    alignItems: "center",
  },
  bannerBrand: {
    fontSize: 22,
    fontWeight: "800",
    color: theme.colors.white,
  },
  bannerText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
    color: theme.colors.white,
  },
  footer: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 28,
    backgroundColor: theme.colors.background,
    flexDirection: "row",
    justifyContent: "center",
  },
  footerButtonText: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: "700",
  },
});
