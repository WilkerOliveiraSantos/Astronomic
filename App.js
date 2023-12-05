 import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Splash from './janelas/splash';
import DadosCliente from './janelas/DadosCliente';  
import Principal from './janelas/principal';  
const App = () => {
  return (

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash"  options={{headerShown: false}} component={Splash}/>
          <Stack.Screen name="DadosCliente"  options={{headerShown: false}} component={DadosCliente}/>
          <Stack.Screen name="Principal"  options={{headerShown: false}} component={Principal}/>
        </Stack.Navigator>
      </NavigationContainer>

  );
}

export default App;