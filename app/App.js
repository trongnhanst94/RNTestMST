import React from 'react';
import {View} from 'react-native';
// import Header from '../components/Header';
// import MainSection from '../components/MainSection';
import ListTodo from './ListTodo';
import store from './store';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View>
        {/* <Header addTodo={store.addTodo} /> */}
        <ListTodo store={store} />
      </View>
    );
  }
}

export default App;
