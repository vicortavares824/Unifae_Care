import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "../Screen/Tab";
import Login from "../Screen/Login";
import Cadastro from "../Screen/Cadastro";
import Formulario from "../Screen/Formulario";
import RepSenha from "../Screen/RepSenha";
import Home from "../Screen/Home";
export type RootStackParamList = {
  Formulario: undefined;
  Login: undefined;
  Cadastro: undefined;
  Tabs: undefined;
  RepSenha: undefined;
  home: undefined;
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
    </stack.Navigator>
  );
}
