import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';
import Header from './src/components/Header';
import TaskItem from './src/components/TaskItem';
import colors from './src/styles/colors';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    console.log('App initialized');
    return () => console.log('App cleaned up');
  }, []);

  const addTask = () => {
    if (input.trim()) {
      const newTask = {
        id: Date.now().toString(),
        title: input,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInput('');
    }
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteCompletedTasks = (taskId) => {
    Alert.alert(
      'Delete Task',
      'Apa kamu yakin ingin menghapus kegiatan ini?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Hapus',
          style: 'destructive',
          onPress: () =>
            setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId)),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Header title="To-Do List" />
      <TextInput
        style={styles.input}
        placeholder="Ketikkan Kegiatan"
        value={input}
        onChangeText={setInput}
      />
      <Button title="Masukkan Kegiatan" onPress={addTask} color={colors.primary} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            toggleCompletion={() => toggleTaskCompletion(item.id)}
            deleteTask={() => deleteCompletedTasks(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  input: {
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
  },
});

export default App;