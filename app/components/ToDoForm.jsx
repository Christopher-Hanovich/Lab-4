"use client";
import { StyleSheet, View, TextInput, Button } from "react-native";
import React from "react";

/**
 * ToDoForm Component
 * 
 * Provides a form interface for users to add new tasks to the to-do list.
 * Manages its own local state for the input field and communicates with
 * the parent component through the addTask callback prop.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.addTask - Callback function to add a new task to the parent's task list
 */
export default function ToDoForm({ addTask }) {
    // Local state to track the current input value
    const [taskText, setTaskText] = React.useState("");

    /**
     * Handles the add task button press
     * 
     * Validates that taskText is not empty, calls the addTask prop function,
     * and clears the input field after adding the task
     */
    const handleAddTask = () => {
        if (taskText) {
            addTask(taskText);
            setTaskText(""); // Clear the input after adding
        }
    };

    return (
        <View style={styles.form}>
            {/* Text input field for entering task description */}
            <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                onChangeText={(text => setTaskText(text))} // Update state as user types
                value={taskText} // Controlled component - value comes from state
            />
            {/* Button to trigger task addition */}
            <Button title="Add" onPress={() => handleAddTask()} />
        </View>);
}
const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    }
});