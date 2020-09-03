import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthStack from '../navigators/auth-stack';
import AppStack from '../navigators/app-stack';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

const Stack = createStackNavigator();

function App({ propsData }) {
  console.log(propsData);
  return (
    <NavigationContainer headerMode={'none'}>
      <Stack.Navigator initialRouteName={'AuthStack'} headerMode={'none'}>
        {!propsData.auth.isLoggedIn
          ? <Stack.Screen name="Auth" component={AuthStack} />
          : <Stack.Screen name="Home" component={AppStack} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

class AppContainer extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <App propsData={this.props} />
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
