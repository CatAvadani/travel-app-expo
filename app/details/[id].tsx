import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

const DestinationDetails = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Destination Details {id}</Text>
    </View>
  );
};

export default DestinationDetails;

const styles = StyleSheet.create({});
