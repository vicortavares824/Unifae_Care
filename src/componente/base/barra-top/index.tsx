import { theme } from "@/styles/global";
import { Text, View, StyleSheet } from "react-native";

interface BarraTopProps {
  title: string;
  description: string;
}
export default function BarraTop({ title, description }: BarraTopProps) {
  return (
    <View style={styles.Lateral}>
      <Text style={styles.texto}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  texto: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: "bold",
  },
  Lateral: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  description: {
    color: theme.colors.textSecondary,
    fontSize: 16,
    paddingTop: 6,
  },
});
