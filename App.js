import React, { useContext } from "react"
import { Provider } from "react-redux"
import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import {
  configureStore,
  createReducer,
  combineReducers
} from "@reduxjs/toolkit"
import { screens } from "@screens"
import { modules, reducers, hooks, initialRoute } from "@modules"
import { connectors } from "@store"
import Icon from 'react-native-vector-icons/Feather';
import { SheetProvider } from "react-native-actions-sheet";
import { useFonts } from 'expo-font';

import './components/sheets';

Icon.loadFont();

const Stack = createStackNavigator()

import { GlobalOptionsContext, OptionsContext, getOptions } from "@options"

const getNavigation = (modules, screens, initialRoute) => {
  const Navigation = () => {
    const routes = modules.concat(screens).map(mod => {
      const pakage = mod.package;
      const name = mod.value.title;
      const Navigator = mod.value.navigator;
      const Component = (props) => {
        return (
          <OptionsContext.Provider value={getOptions(pakage)}>
            <Navigator {...props} />
          </OptionsContext.Provider>
        )
      }
      return <Stack.Screen key={name} name={name} component={Component} />
    })

    const screenOptions = { headerShown: false };

    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={"Onboarding"}
          screenOptions={screenOptions}
        >
          {routes}
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  return Navigation
}

const getStore = (globalState) => {
  const appReducer = createReducer(globalState, _ => {
    return globalState
  })

  const reducer = combineReducers({
    app: appReducer,
    ...reducers,
    ...connectors
  })

  return configureStore({
    reducer: reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
  })
}

const App = () => {
  const global = useContext(GlobalOptionsContext)
  const Navigation = getNavigation(modules, screens, initialRoute)
  const store = getStore(global);
  const [loaded] = useFonts({
    'Ginora-Sans-Regular': require('./assets/fonts/Ginora-Sans-Regular.otf'),
  });

  if (!loaded) {
    return null;
  }

  let effects = {}
  hooks.map(hook => {
    effects[hook.name] = hook.value()
  })

  return (
    <Provider store={store}>
      <SheetProvider>
        <Navigation />
      </SheetProvider>
    </Provider>
  )
}

export default App
