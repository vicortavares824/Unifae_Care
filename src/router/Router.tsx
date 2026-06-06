import Feedback from "@/Screen/Feedback";
import Formulario from "@/Screen/Formulario";
import Home from "@/Screen/Home";
import Termos from "@/Screen/Termos";
import { createStackNavigator } from "@react-navigation/stack";
import Cadastro from "../Screen/Cadastro";
import Login from "../Screen/Login";
import RepSenha from "../Screen/RepSenha";
import Tabs from "../Screen/Tab";
import Exercicios from "@/Screen/Exercicios";
import Calendario from "@/Screen/Calendario";
import Progressao from "@/Screen/Progresso";
export type RootStackParamList = {
  Formulario: undefined;
  Login: undefined;
  Cadastro: undefined;
  Tabs: undefined;
  RepSenha: undefined;
  home: undefined;
  Termos: undefined;
  Feedback: { executionId: number };
  Exercicios:  { prescriptionItemId: number };
  Calendario: undefined;
  Progressao: { Progress: number };
};

const stack = createStackNavigator<RootStackParamList>();

export default function Router() {
  return (
    <stack.Navigator
      initialRouteName="Formulario"
      screenOptions={{ headerShown: false }}
    >
      <stack.Screen name="Formulario" component={Formulario} />
      <stack.Screen name="Login" component={Login} />
      <stack.Screen name="Cadastro" component={Cadastro} />
      <stack.Screen name="Tabs" component={Tabs} />
      <stack.Screen name="RepSenha" component={RepSenha} />
      <stack.Screen name="home" component={Home} />
      <stack.Screen name="Termos" component={Termos} />
      <stack.Screen name="Feedback" component={Feedback} />
      <stack.Screen name="Exercicios" component={Exercicios} />
      <stack.Screen name="Calendario" component={Calendario} />
      <stack.Screen name="Progressao" component={Progressao} />
    </stack.Navigator>
  );
}
