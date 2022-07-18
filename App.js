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
import Icon from "react-native-vector-icons/Feather"
import { SheetProvider } from "react-native-actions-sheet"
import { useFonts } from "expo-font"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { GlobalOptionsContext, OptionsContext, getOptions } from "@options"
import { View } from "react-native"
import Home from '@screens/home';

import "./components/sheets"
import { centerCenter, COLORS, fontSize6 } from "./assets/styles"
import { Text } from "./components"

Icon.loadFont()

const Stack = createStackNavigator()
const BottomTab = createBottomTabNavigator()

const ScreenPlaceholder = ({ route, navigation }) => {
  return (
    <View style={{ flex: 1, ...centerCenter }}>
      <Text>This is a placeholder</Text>
      <Text>{route?.name}</Text>
    </View>
  )
}

const BottomNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name={"Home"}
        component={Home}
        options={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.grey,
          tabBarLabelStyle: {
            ...fontSize6
          },
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home"
              size={25}
              color={focused ? COLORS.primary : COLORS.grey}
            />
          )
        }}
      />
      <BottomTab.Screen
        name={"Note Board"}
        component={ScreenPlaceholder}
        options={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.grey,
          tabBarLabelStyle: {
            ...fontSize6
          },
          tabBarIcon: ({ focused }) => (
            <Icon
              name="file-text"
              size={25}
              color={focused ? COLORS.primary : COLORS.grey}
            />
          )
        }}
      />
      <BottomTab.Screen
        name={"Search"}
        component={ScreenPlaceholder}
        options={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.grey,
          tabBarLabelStyle: {
            ...fontSize6
          },
          tabBarIcon: ({ focused }) => (
            <Icon
              name="search"
              size={25}
              color={focused ? COLORS.primary : COLORS.grey}
            />
          )
        }}
      />
      <BottomTab.Screen
        name={"Profile"}
        component={ScreenPlaceholder}
        options={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.grey,
          tabBarLabelStyle: {
            ...fontSize6
          },
          tabBarIcon: ({ focused }) => (
            <Icon
              name="user"
              size={25}
              color={focused ? COLORS.primary : COLORS.grey}
            />
          )
        }}
      />
      <BottomTab.Screen
        name={"Settings"}
        component={ScreenPlaceholder}
        options={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.grey,
          tabBarLabelStyle: {
            ...fontSize6
          },
          tabBarIcon: ({ focused }) => (
            <Icon
              name="settings"
              size={25}
              color={focused ? COLORS.primary : COLORS.grey}
            />
          )
        }}
      />
    </BottomTab.Navigator>
  )
}

const getNavigation = (modules, screens, initialRoute) => {
  const Navigation = () => {
    const routes = modules.concat(screens).map(mod => {
      const pakage = mod.package
      const name = mod.value.title
      const Navigator = mod.value.navigator
      const Component = props => {
        return (
          <OptionsContext.Provider value={getOptions(pakage)}>
            <Navigator {...props} />
          </OptionsContext.Provider>
        )
      }
      return <Stack.Screen key={name} name={name} component={Component} />
    })

    const screenOptions = { headerShown: false }

    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={"Onboarding"}
          screenOptions={screenOptions}
        >
          {routes}
          <Stack.Screen name="Root" component={BottomNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  return Navigation
}

const getStore = globalState => {
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
  const store = getStore(global)
  const [loaded] = useFonts({
    "Ginora-Sans-Regular": require("./assets/fonts/Ginora-Sans-Regular.otf")
  })

  if (!loaded) {
    return null
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
