import Colors from '@/constants/Colors';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { SlideInDown } from 'react-native-reanimated';

interface BookingButtonsProps {
  price?: string;
}

const BookingButtons = ({ price }: BookingButtonsProps) => {
  return (
    <Animated.View
      style={styles.buttonContainer}
      entering={SlideInDown.delay(200)}
    >
      <Pressable onPress={() => {}} style={styles.buttonBook}>
        <Text style={{ color: Colors.white, textTransform: 'uppercase' }}>
          Book Now
        </Text>
      </Pressable>
      <View style={styles.price}>
        <Text style={{ color: Colors.white, textTransform: 'uppercase' }}>
          {price} kr
        </Text>
      </View>
    </Animated.View>
  );
};

export default BookingButtons;

const styles = StyleSheet.create({
  buttonBook: {
    backgroundColor: Colors.secondaryColor,
    padding: 10,
    width: '48%',
    alignItems: 'center',
    borderRadius: 5,
  },
  price: {
    backgroundColor: Colors.primaryColor,
    padding: 10,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    padding: 16,
    paddingBottom: 30,
    flex: 1,
  },
});
