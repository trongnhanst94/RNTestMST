import {AppRegistry} from 'react-native';
import Books from './srcMobx/Books';
import AddBook from './srcMobx/AddBook';

import {TabNavigator} from 'react-navigation';

export default App = TabNavigator({
  Books: {screen: Books},
  // AddBook: {screen: AddBook},
});
