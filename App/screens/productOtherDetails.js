import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
//import ImageBack from '../components/imageBack';
import * as theme from '../constants/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProductComponent from '../components/productsComponent';
import BagModal from '../components/bagModal';
import * as Products from '../constants/product';

const currentTheme = theme.colors.light;

const ProductOtherDetails = () => {
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

      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.titleText}>Do your shopping online</Text>
            <Text style={styles.subTitleText}>
              find the best choices for you
            </Text>
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

        <View style={styles.bodyContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={Products.Others}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              return <ProductComponent item={item} />;
            }}
          />
        </View>
      </View>
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
  },
  iconContainer: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: currentTheme.foreground,
  },

  searchContainer: {
    paddingLeft: 10,
    marginTop: 20,
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
    marginTop: 20,
  },
});

export default ProductOtherDetails;
