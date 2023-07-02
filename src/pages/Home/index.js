import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Dimensions,
  Text,
} from 'react-native';
import React from 'react';
import {HeaderBackground, Logo} from '../../assets';
import {Saldo} from '../../components';

function HomeScreen() {
  return (
    <View style={styles.page}>
      <ImageBackground source={HeaderBackground} style={styles.header}>
        <Image source={Logo} style={styles.logo} />
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcome}>Selamat Datang,</Text>
          <Text style={styles.username}>Admin</Text>
        </View>
      </ImageBackground>
      <Saldo />
    </View>
  );
}

export default HomeScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.3,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  logo: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.06,
  },
  welcomeContainer: {
    marginTop: windowHeight * 0.05,
  },
  welcome: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Regular',
  },
  username: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Bold',
  },
});
