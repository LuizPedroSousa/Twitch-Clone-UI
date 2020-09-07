import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Discover from './Pages/Discover/index';
import Following from './Pages/Following/index';
const { Navigator, Screen } = createBottomTabNavigator();
import { Entypo, EvilIcons, AntDesign } from '@expo/vector-icons';
import { ThemeProvider } from 'styled-components/native';
import { lighten, shade } from 'polished';
import dark from './styles/themes/dark';
import Search from './Pages/Search/index';
import Esports from './Pages/Esports/index';
import Transmit from './Pages/Transmit/index';
import ThemeChangeProvider from './styles/Utils/themeProvider';
import Context from './styles/Utils/themeContext';
const Router: React.FunctionComponent = () => {
    return (
        <NavigationContainer>
            <ThemeChangeProvider>
                <Context.Consumer>
                    {theme => (
                        <ThemeProvider theme={theme.theme}>
                            <Navigator
                                tabBarOptions={{
                                    style: {
                                        height: 65,
                                        backgroundColor: lighten(0.01, dark.colors.primary),
                                        fontSize: 22,
                                        fontFamily: 'roboto_500Medium',
                                        borderTopWidth: 0,
                                    },
                                    tabStyle: {
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    },
                                    iconStyle: {
                                        flex: 0,
                                        width: 35,
                                        height: 35,
                                    },
                                    labelStyle: {
                                        fontFamily: 'Roboto_400Regular',
                                        fontSize: 12,
                                        paddingBottom: 12,
                                    },
                                    inactiveTintColor: dark.colors.black,
                                    activeTintColor: lighten(0.1, dark.colors.purple),
                                }}
                            >
                                <Screen
                                    name="Seguindo"
                                    component={Following}
                                    options={{
                                        tabBarIcon: ({ focused, size }) => {
                                            return (
                                                <Entypo
                                                    name="heart"
                                                    size={size}
                                                    color={
                                                        focused
                                                            ?
                                                            shade(0.2, dark.colors.purple)
                                                            :
                                                            dark.colors.black
                                                    }
                                                />
                                            );
                                        }
                                    }}
                                />
                                <Screen
                                    name="Descubra"
                                    component={Discover}
                                    options={{
                                        tabBarIcon: ({ focused, size }) => {
                                            return (
                                                <Entypo
                                                    name="compass"
                                                    size={size}
                                                    color={
                                                        focused
                                                            ?
                                                            shade(0.2, dark.colors.purple)
                                                            :
                                                            dark.colors.black
                                                    }
                                                />
                                            );
                                        }
                                    }}
                                />
                                <Screen
                                    name="Procurar"
                                    component={Search}
                                    options={{
                                        tabBarIcon: ({ focused, size }) => {
                                            return (
                                                <AntDesign
                                                    name="file1"
                                                    size={size}
                                                    color={
                                                        focused
                                                            ?
                                                            shade(0.2, dark.colors.purple)
                                                            :
                                                            dark.colors.black
                                                    }
                                                />
                                            );
                                        }
                                    }}
                                />
                                <Screen
                                    name="Esports"
                                    component={Esports}
                                    options={{
                                        tabBarIcon: ({ focused, size }) => {
                                            return (
                                                <EvilIcons
                                                    name="trophy"
                                                    size={size}
                                                    color={
                                                        focused
                                                            ?
                                                            shade(0.2, dark.colors.purple)
                                                            :
                                                            dark.colors.black
                                                    }
                                                />
                                            );
                                        }
                                    }}
                                />
                                <Screen
                                    name="Transmitir"
                                    component={Transmit}
                                    options={{
                                        tabBarIcon: ({ focused, size }) => {
                                            return (
                                                <Entypo
                                                    name="rss"
                                                    size={size}
                                                    color={
                                                        focused
                                                            ?
                                                            shade(0.2, dark.colors.purple)
                                                            :
                                                            dark.colors.black
                                                    }
                                                />
                                            );
                                        }
                                    }}
                                />
                            </Navigator>
                        </ThemeProvider>
                    )}
                </Context.Consumer>
            </ThemeChangeProvider>
        </NavigationContainer>
    );
}

export default Router;