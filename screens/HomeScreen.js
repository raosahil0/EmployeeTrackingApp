import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location';

export default function HomeScreen({ navigation }) {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission denied', 'Location permission is required for check-in.');
      }
    })();
  }, []);

  const handleCheckInOut = async () => {
    if (!isCheckedIn) {
      // Check in
      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
      setIsCheckedIn(true);
      Alert.alert('Checked In', `Location: ${loc.coords.latitude}, ${loc.coords.longitude}`);
      // Save to logs or something
    } else {
      // Check out
      setIsCheckedIn(false);
      Alert.alert('Checked Out');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Employee Tracking App</Text>
      <TouchableOpacity style={styles.button} onPress={handleCheckInOut}>
        <Text style={styles.buttonText}>{isCheckedIn ? 'Check Out' : 'Check In'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('WorkLogs')}>
        <Text style={styles.buttonText}>View Work Logs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UploadBills')}>
        <Text style={styles.buttonText}>Upload Bills</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});