import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import * as theme from '../constants/theme';
import * as Products from '../constants/product';
import ProductBagComponent from './productBagComponent';

const BagModal = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Bag</Text>
        <Text style={styles.headerSubTitle}>4 ITEMS</Text>
      </View>
      <View style={styles.bodyContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Products.Clothes}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            return <ProductBagComponent item={item} />;
          }}
        />
      </View>

      <View style={styles.footerContainer}>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => navigation.navigate('Payment')}>
          <Text style={styles.btnText}>CHECKOUT</Text>
          <Icon
            name="keyboard-arrow-right"
            size={30}
            color={theme.colors.light.foreground}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.light.background,
  },
  header: {
    height: 80,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: theme.sizes.h6,
  },
  headerSubTitle: {
    fontSize: theme.sizes.h2,
    color: theme.colors.gray,
  },
  bodyContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  footerContainer: {
    padding: 20,
    backgroundColor: theme.colors.light.background,
  },
  btnContainer: {
    flex: 1,
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    flexDirection: 'row',
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: theme.sizes.h3,
  },
});

export default BagModal;
