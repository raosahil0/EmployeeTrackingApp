import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const mockLogs = [
  { id: '1', date: '2023-10-01', checkIn: '09:00', checkOut: '17:00', location: 'Office' },
  { id: '2', date: '2023-10-02', checkIn: '08:30', checkOut: '16:30', location: 'Site A' },
];

export default function WorkLogsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Work Logs</Text>
      <FlatList
        data={mockLogs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.logItem}>
            <Text>Date: {item.date}</Text>
            <Text>Check In: {item.checkIn}</Text>
            <Text>Check Out: {item.checkOut}</Text>
            <Text>Location: {item.location}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  logItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});