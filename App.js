import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import RandomColorsScreen from "./src/screens/RandomColorsScreen";
import GradienScreen from "./src/screens/GradienScreen";
import TODOScreen from "./src/screens/TODOScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Details: DetailsScreen,
    Random: RandomColorsScreen,
    Gradient: GradienScreen,
    TODO: TODOScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
