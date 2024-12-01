import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';

const TaskItem = ({ task, toggleCompletion, deleteTask }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity
        style={[
          styles.checkbox,
          task.completed && styles.checkboxCompleted,
        ]}
        onPress={toggleCompletion}
      >
        {task.completed && <Text style={styles.checkmark}>✔</Text>}
      </TouchableOpacity>
      <View style={styles.details}>
        <Text style={[styles.text, task.completed && styles.completed]}>
          {task.title}
        </Text>
        <Text style={styles.subtext}>
          {task.date} | {task.time}
        </Text>
      </View>
      {task.completed && (
        <TouchableOpacity onPress={deleteTask} style={styles.deleteButton}>
          <Text style={styles.deleteText}>🗑️</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: colors.white,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  text: {
    fontSize: 16,
  },
  subtext: {
    fontSize: 12,
    color: colors.primary,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: colors.danger,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxCompleted: {
    backgroundColor: colors.primary,
  },
  checkmark: {
    color: colors.white,
    fontSize: 16,
  },
  deleteButton: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteText: {
    fontSize: 18,
    color: colors.danger,
  },
});

export default TaskItem;
