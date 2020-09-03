import React, { Component } from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';
import { Container, Root } from 'native-base'
import styles from './style';
import AppHeader from '../../../components/header';

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
    }

    logout = () => {
        this.props.setLogin(false);
    }

    render() {
        let { loading } = this.state;
        return (
            <Container style={{ flex: 1 }} >
                <Root>
                    <AppHeader navigation={this.props.navigation} />
                    <View style={styles.container}>
                        <Text>Home</Text>
                        <Button title={"Logout"}
                            titleStyle={styles.loginText}
                            buttonStyle={{ backgroundColor: 'transparent' }}
                            containerStyle={{ backgroundColor: 'transparent' }}
                            onPress={() => this.logout()}>
                        </Button>
                    </View>
                </Root>
            </Container>
        )
    }
}

export default Home;