import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, Image, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';

class SideMenu extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    navigateToScreen = (route) => {
        this.props.navigation.navigate(route);
        this.props.navigation.closeDrawer();
    }

    signOut = () => {
        this.props.setLogin(false);
    }

    render() {
        return (
            // <Container style={ApplicationStyles.drawerContainer}>
            <View style={{ flex: 1 }}>
                {/* <DrawerItems {...this.props} /> */}
                {/* <View
                        style={ApplicationStyles.drawerIcon} >
                        <Image
                            square
                            style={{ height: 100, width: 100 }}
                            source={Images.logo}
                            resizeMode='contain'
                        />
                    </View> */}
                <SafeAreaView style={{ flex: 1 }}>
                    <ScrollView showsVerticalScrollIndicator={true}>
                        <TouchableOpacity style={styles.drawerRoute} onPress={() => this.navigateToScreen('Home')}>
                            <AntDesign name="home" size={25} />
                            <Text style={styles.drawerRouteText}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.drawerRoute} onPress={() => { this.signOut() }}>
                            <AntDesign name="logout" size={25} />
                            <Text style={styles.drawerRouteText}>Logout</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </SafeAreaView>
            </View>
            // </Container>
        )
    }
}

export default SideMenu;