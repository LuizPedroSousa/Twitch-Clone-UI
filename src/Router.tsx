import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Discover from './Pages/Discover/index';
import Following from './Pages/Following/index';
const { Navigator, Screen } = createBottomTabNavigator();
import {
    Entypo,
    EvilIcons,
    AntDesign,
    MaterialCommunityIcons,
    FontAwesome,
    Octicons,

} from '@expo/vector-icons';
import { ThemeProvider } from 'styled-components/native';
import { lighten, shade } from 'polished';
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
                                        backgroundColor: lighten(0.01, theme.theme.colors.primary),
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
                                    inactiveTintColor: theme.theme.colors.black,
                                    activeTintColor: lighten(0.1, theme.theme.colors.purple),
                                }}
                            >
                                <Screen
                                    name="Seguindo"
                                    component={Following}
                                    options={{
                                        tabBarIcon: ({ focused, size }) => {
                                            return (
                                                focused
                                                    ?
                                                    <Entypo
                                                        name="heart"
                                                        size={size}
                                                        color={shade(0.2, theme.theme.colors.purple)}
                                                    />
                                                    :
                                                    <Entypo
                                                        name='heart-outlined'
                                                        size={size}
                                                        color={theme.theme.colors.black}
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
                                                focused
                                                    ?
                                                    <MaterialCommunityIcons
                                                        name="compass"
                                                        size={size}
                                                        color={shade(0.2, theme.theme.colors.purple)}
                                                    />
                                                    :
                                                    <Entypo
                                                        name="compass"
                                                        size={size}
                                                        color={theme.theme.colors.black}
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
                                                focused
                                                    ?
                                                    <FontAwesome
                                                        name='file'
                                                        color={shade(0.2, theme.theme.colors.purple)}
                                                        size={size}
                                                    />
                                                    :
                                                    <AntDesign
                                                        name="file1"
                                                        size={size}
                                                        color={theme.theme.colors.black}
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
                                                focused
                                                    ?
                                                    <Entypo
                                                        name='trophy'
                                                        color={shade(0.2, theme.theme.colors.purple)}
                                                        size={size}
                                                    />
                                                    :
                                                    <EvilIcons
                                                        name="trophy"
                                                        size={size}
                                                        color={theme.theme.colors.black}
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
                                                focused
                                                    ?
                                                    <Entypo
                                                        name="rss"
                                                        size={size}
                                                        color={shade(0.2, theme.theme.colors.purple)}
                                                    />
                                                    :
                                                    <Octicons
                                                        name='rss'
                                                        color={theme.theme.colors.black}
                                                        size={size}
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