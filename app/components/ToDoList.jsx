import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';

/**
 * ToDoList Component
 * 
 * Displays a scrollable list of all tasks.
 * Each task is rendered as a pressable item that could potentially
 * be extended with additional functionality (like marking complete or deleting).
 * 
 * @param {Object} props - Component props
 * @param {Array<string>} props.tasks - Array of task strings to display
 */
export default function ToDoList({ tasks }) {

  return (
    <ScrollView>
      {/* Map over the tasks array to render each task */}
      {tasks.map((task, index) => {
        return (
          // Pressable component allows for touch interactions
          // Using index as key (could be improved with unique IDs)
          <Pressable key={index} style={styles.task}>
            <Text style={styles.taskText}>{task}</Text>
          </Pressable>
        )
      })
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});
