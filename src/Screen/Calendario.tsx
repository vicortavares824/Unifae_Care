import { api } from "@/api/api";
import { theme } from "@/styles/global";
import { Plan } from "@/types/plan.type";
import { DATE_LOCALE } from "@/utils/locale/date-locale";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";

LocaleConfig.locales = DATE_LOCALE;
LocaleConfig.defaultLocale = "pt-br";

export default function Calendario() {
  const [selectedDate, setSelectedDate] = useState("");
  const [planData, setPlanData] = useState<Record<string, string[]>>({});
  const formatSelectedDate = (dateString: string) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    const meses = DATE_LOCALE["pt-br"].monthNames;
    const nomeMes = meses[parseInt(month, 10) - 1];
    return `${parseInt(day, 10)} de ${nomeMes} de ${year}`;
  };

  useEffect(function fetchWeeklyPlan() {
    async function getWeeklyPlan() {
      try {
        const response = await api.get<Plan>("/v1/app/home/plan/week");

        const plan = Object.fromEntries(
          response.data.days.map((day) => [
            day.date,
            day.exercises.map((ex) => ex.title),
          ]),
        );

        setPlanData(plan);
        setSelectedDate(response.data.today);
      } catch (error) {
        console.error("Failed to fetch weekly plan data");
        console.log(error);
      }
    }

    getWeeklyPlan();
  }, []);

  const getExercisesForDate = (dateString: string) => {
    return planData?.[dateString] || [];
  };

  const markedDates = {
    ...Object.fromEntries(
      Object.keys(planData).map((date) => [
        date,
        {
          marked: true,
          dotColor: theme.colors.primary,
        },
      ]),
    ),
    [selectedDate]: {
      selected: true,
      selectedColor: theme.colors.primary,
      marked: false,
    },
  };

  return (
    <ScrollView
      style={styles.mainContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.headerCard}>
        <Calendar
          current={selectedDate}
          markedDates={markedDates}
          onDayPress={(day) => {
            setSelectedDate(day.dateString);
          }}
          renderArrow={(direction) => (
            <Ionicons
              name={direction === "left" ? "chevron-back" : "chevron-forward"}
              size={20}
              color={theme.colors.primary}
            />
          )}
          renderHeader={(date) => {
            const rawMonthStr = date.toString("MMMM, yyyy");
            const formattedMonth =
              rawMonthStr.charAt(0).toUpperCase() + rawMonthStr.slice(1);
            return (
              <View style={styles.customMonthHeader}>
                <Text style={styles.monthHeaderText}>{formattedMonth}</Text>
                <Ionicons
                  name="chevron-down"
                  size={14}
                  color="#8E8E93"
                  style={styles.chevronIcon}
                />
              </View>
            );
          }}
          theme={{
            backgroundColor: "transparent",
            calendarBackground: "transparent",
            textSectionTitleColor: "#AEAEB2",
            selectedDayBackgroundColor: theme.colors.primary,
            selectedDayTextColor: "#FFFFFF",
            todayTextColor: theme.colors.primary,
            dayTextColor: "#1C1C1E",
            textDisabledColor: "#D1D1D6",
            dotColor: theme.colors.primary,
            selectedDotColor: "#FFFFFF",
            monthTextColor: "#1C1C1E",
            textMonthFontWeight: "bold",
            textMonthFontSize: 22,
            textDayFontSize: 15,
            textDayHeaderFontSize: 12,
            textDayHeaderFontWeight: "bold",
          }}
        />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.selectedDateText}>
          {formatSelectedDate(selectedDate)}
        </Text>
        {getExercisesForDate(selectedDate).map((exercise, index) => (
          <TouchableOpacity
            key={index}
            style={styles.exerciseCard}
            activeOpacity={0.8}
          >
            <Text style={styles.exerciseText}>{exercise}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#FFFFFF",
  },
  headerCard: {
    backgroundColor: "#F4F5F6",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingHorizontal: 16,
    paddingBottom: 24,
    paddingTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  customMonthHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  monthHeaderText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1C1C1E",
  },
  chevronIcon: {
    marginLeft: 6,
    marginTop: 6,
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingTop: 24,
    marginBottom: 100,
  },
  selectedDateText: {
    fontSize: 20,
    fontWeight: "300",
    color: "#8E8E93",
    marginBottom: 20,
  },
  exerciseCard: {
    backgroundColor: theme.colors.primary,
    borderRadius: 30,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  exerciseText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
