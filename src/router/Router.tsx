import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screen/Home";
import Login from "../Screen/Login";
import Cadastro from "../Screen/Cadastro";
import Formulario from "../Screen/Formulario";
import RepSenha from "../Screen/RepSenha";
export type RootStackParamList = {
    Formulario: undefined;
    Login: undefined;
    Cadastro: undefined;
    Home: undefined;
    RepSenha: undefined; 
};

const stack = createStackNavigator<RootStackParamList>();

export default function Router() {
    return (
        <stack.Navigator initialRouteName="Formulario" screenOptions={{ headerShown: false }}>
            <stack.Screen name="Formulario" component={Formulario}/>
            <stack.Screen name="Login" component={Login} />
            <stack.Screen name="Cadastro" component={Cadastro} />
            <stack.Screen name="Home" component={Home} />
            <stack.Screen name="RepSenha" component={RepSenha} />
        </stack.Navigator>
    );
}