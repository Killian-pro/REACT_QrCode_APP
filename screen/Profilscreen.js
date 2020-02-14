import React from 'react'
import {Button} from 'react-native'

class Profilscreen extends React.Component {
    static navigationOptions = {
      title: 'Profile',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <Button title="Go to Jane's profile" onPress={() => navigate('Home')} />
      );
    }
  }

  export default Profilscreen;
