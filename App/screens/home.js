import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
} from 'react-native';

import Category from '../components/category';
import * as theme from '../constants/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BagModal from '../components/bagModal';
//import * as Products from '../constants/product';

const currentTheme = theme.colors.light;

const Home = ({navigation}) => {
  const [bagVisible, setBagVisible] = useState(false);
  const ToggleBagVisible = () => {
    setBagVisible(!bagVisible);
  };

  return (
    <View style={{flex: 1}}>
      <Modal
        animationType="slide"
        visible={bagVisible}
        onRequestClose={() => ToggleBagVisible()}>
        <BagModal closeModal={() => ToggleBagVisible()} />
      </Modal>

      <ImageBackground
        source={require('../assets/Login.png')}
        style={styles.container}>
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.titleText}>Do your shopping online</Text>
            <Text style={styles.subTitleText}>choose the items you love</Text>
          </View>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => ToggleBagVisible()}>
            <Icon
              name="shopping-cart"
              color={currentTheme.background}
              size={25}
            />
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>4</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <Icon name="search" color={theme.colors.gray} size={25} />
          <TextInput
            style={styles.textInputContainer}
            placeholder="Search.."
            placeholderTextColor={theme.colors.gray}
          />
        </View>
        <View style={{height: 200, marginTop: 50}}>
          <Text style={styles.CatalogueText}>Category</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProductClothsDetails')}>
              <Category imageUri={require('../assets/one.jpg')} name="Cloths" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProductStollerDetails')}>
              <Category imageUri={require('../assets/2.jpg')} name="Stollers" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProductToyDetails')}>
              <Category imageUri={require('../assets/3.jpg')} name="Toys" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProductOtherDetails')}>
              <Category imageUri={require('../assets/4.jpg')} name="Others" />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: currentTheme.background,
  },

  headerContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  badgeContainer: {
    top: -4,
    right: -4,
    width: 18,
    height: 18,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: theme.colors.green,
  },
  badgeText: {
    color: theme.colors.light.background,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: theme.sizes.h5,
  },
  subTitleText: {
    fontSize: theme.sizes.h3,
    color: theme.colors.gray,
    fontWeight: 'bold',
  },
  CatalogueText: {
    fontWeight: 'bold',
    fontSize: theme.sizes.h5,
  },

  iconContainer: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: currentTheme.foreground,
  },

  searchContainer: {
    paddingLeft: 20,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: theme.colors.clouds,
  },
  textInputContainer: {
    flex: 1,
  },

  bodyContainer: {
    flex: 1,
    marginTop: 40,
  },
});

export default Home;
