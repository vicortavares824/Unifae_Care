import { RootStackParamList } from "@/router/Router";
import { Exercise } from "@/types/plan.type";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

interface ExercisePlanProps {
  exercises: Exercise[];
}

export default function ExercisePlan({ exercises = [] }: ExercisePlanProps) {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  function handleExerciseClick(exercise: Exercise) {
    navigation.navigate("Exercicios", {
      exercise: exercise,
    });
  }

  return (
    <View
      style={{
        backgroundColor: "#eeeeeeff",
        borderRadius: 10,
        margin: 5,
        padding: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 10 }}>
          Seu Plano de Hoje
        </Text>
        <Text style={{ color: "green" }}>{exercises.length} Exercício(s)</Text>
      </View>
      {exercises.map((exercise, index) => (
        <TouchableOpacity
          key={exercise.exerciseId}
          style={{
            width: 290,
            backgroundColor: exercise.execution.completed
              ? "#4caf50ff"
              : "#d6d6d6ff",
            height: 100,
            borderRadius: 10,
            margin: 10,
            flexDirection: "row",
            alignItems: "flex-start",
          }}
          onPress={() => handleExerciseClick(exercise)}
        >
          <View style={{ margin: 20 }}>
            <Text
              style={{
                color: exercise.execution.completed ? "#ffffff" : "#000000",
                fontSize: 15,
                fontWeight: "bold",
                marginBottom: 5,
              }}
            >
              {exercise.title}
            </Text>
            <Text
              style={{
                color: exercise.execution.completed ? "#ffffff" : "#9c9c9c",
                fontSize: 10,
              }}
            >
              {exercise.description}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
