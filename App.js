import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screen/Homescreen'
import J1 from './screen/J1'
import J2 from './screen/J2'
import J3 from './screen/J3'
import J4 from './screen/J4'
import J5 from './screen/J5'
import J6 from './screen/J6'
import Troll from './screen/Troll'

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  J1: { screen: J1 },
  J2: { screen: J2 },
  J3: { screen: J3 },
  J4: { screen: J4 },
  J5: { screen: J5 },
  J6: { screen: J6 },
  Troll :{screen: Troll},
});

const App = createAppContainer(MainNavigator);

export default App;


