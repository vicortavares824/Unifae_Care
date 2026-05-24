import { theme } from "@/styles/global";
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = {
    monthNames: [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ],
    monthNamesShort: [
        'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
    ],
    dayNames: [
        'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
    ],
    dayNamesShort: [
        'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'
    ]
};
LocaleConfig.defaultLocale = 'pt-br';


const EXERCISES_DATA: Record<string, string[]> = {
    '2026-05-20': [
        "Rotação Externa De Ombro",
        "Rotação de Perna",
        "Rotação de Braços"
    ],
    '2026-05-24': [
        "Mobilidade de Ombro",
        "Alongamento Escapular",
        "Fortalecimento Cervical"
    ],
    '2026-05-25': [
        "Fortalecimento de Punho",
        "Mobilidade de Quadril",
        "Alongamento de Pernas"
    ],
    '2026-05-26': [
        "Alongamento Cervical",
        "Rotação de Ombros",
        "Rotação de Perna"
    ],
    '2026-05-29': [
        "Mobilidade de Ombro",
        "Fortalecimento Cervical"
    ]
};

export default function Calendario() {
    const [selectedDate, setSelectedDate] = useState('2026-05-24');
    const formatSelectedDate = (dateString: string) => {
        if (!dateString) return "";
        const [year, month, day] = dateString.split('-');
        const meses = [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ];
        const nomeMes = meses[parseInt(month, 10) - 1];
        return `${parseInt(day, 10)} de ${nomeMes} de ${year}`;
    };
    const getExercisesForDate = (dateString: string) => {
        return EXERCISES_DATA[dateString] || [
            "Exercício Respiratório Leve",
            "Alongamento Geral Integrado"
        ];
    };
    const markedDates = {
        '2026-05-20': { marked: true, dotColor: '#10B981' },
        '2026-05-24': { marked: true, dotColor: '#FFFFFF' },
        '2026-05-25': { marked: true, dotColor: '#10B981' },
        '2026-05-26': { marked: true, dotColor: '#10B981' },
        '2026-05-29': { marked: true, dotColor: '#10B981' },
        [selectedDate]: {
            selected: true,
            selectedColor: theme.colors.primary,
            marked: true,
            dotColor: '#FFFFFF'
        }
    };
    return (
        <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.headerCard}>
                <Calendar
                    current={selectedDate}
                    markedDates={markedDates}
                    onDayPress={(day) => {
                        setSelectedDate(day.dateString);
                    }}
                    renderArrow={(direction) => (
                        <Ionicons
                            name={direction === 'left' ? 'chevron-back' : 'chevron-forward'}
                            size={20}
                            color={theme.colors.primary}
                        />
                    )}
                    renderHeader={(date) => {
                        const rawMonthStr = date.toString('MMMM, yyyy');
                        const formattedMonth = rawMonthStr.charAt(0).toUpperCase() + rawMonthStr.slice(1);
                        return (
                            <View style={styles.customMonthHeader}>
                                <Text style={styles.monthHeaderText}>{formattedMonth}</Text>
                                <Ionicons name="chevron-down" size={14} color="#8E8E93" style={styles.chevronIcon} />
                            </View>
                        );
                    }}
                    theme={{
                        backgroundColor: 'transparent',
                        calendarBackground: 'transparent',
                        textSectionTitleColor: '#AEAEB2',
                        selectedDayBackgroundColor: theme.colors.primary,
                        selectedDayTextColor: '#FFFFFF',
                        todayTextColor: theme.colors.primary,
                        dayTextColor: '#1C1C1E',
                        textDisabledColor: '#D1D1D6',
                        dotColor: theme.colors.primary,
                        selectedDotColor: '#FFFFFF',
                        monthTextColor: '#1C1C1E',
                        textMonthFontWeight: 'bold',
                        textMonthFontSize: 22,
                        textDayFontSize: 15,
                        textDayHeaderFontSize: 12,
                        textDayHeaderFontWeight: 'bold',
                    }}
                />

            </View>

            <View
                style={styles.contentContainer}
            >
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
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    monthHeaderText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1C1C1E',
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
        fontWeight: '300',
        color: '#8E8E93',
        marginBottom: 20,
    },
    exerciseCard: {
        backgroundColor: theme.colors.primary,
        borderRadius: 30,
        paddingVertical: 18,
        paddingHorizontal: 24,
        marginBottom: 12,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: theme.colors.primary,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 3,
    },
    exerciseText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
});
