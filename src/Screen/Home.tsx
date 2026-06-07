import { api } from "@/api/api";
import CompHeader from "@/comp/CompHeader";
import CompProgress from "@/comp/CompProgress";
import ExercisePlan from "@/comp/ExercisePlan";
import { theme } from "@/styles/global";
import { Day } from "@/types/plan.type";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Home() {
  const [planData, setPlanData] = useState<Day | null>(null);

  useEffect(function fetchTodayPlan() {
    async function getTodayPlan() {
      try {
        const response = await api.get<Day>("/v1/app/home/plan/today");

        const todayPlan = response.data;

        setPlanData(todayPlan);
      } catch (error) {
        console.error("Failed to fetch today's plan data");
        console.log(error);
      }
    }

    getTodayPlan();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <CompHeader />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 10,
            }}
          ></View>
          <CompProgress Progress={planData?.summary.percentCompleted || 0} />
        </View>
        <ExercisePlan exercises={planData?.exercises || []} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: theme.colors.white,
    flexDirection: "column",
    height: "100%",
    paddingBottom: 100,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
