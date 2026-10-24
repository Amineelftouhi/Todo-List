import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

const START_DATE = "2026-09-07";

function getCurrentCycleDay() {
    const [year, month, day] = START_DATE.split("-").map(Number);

    const startDate = new Date(year, month - 1, day);

    const today = new Date();

    const difference = today - startDate;

    const daysPassed = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    if (daysPassed < 0) {
        return 1;
    }

    return (daysPassed % 7) + 1;
}

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    const currentCycleDay = getCurrentCycleDay();

    useEffect(() => {
        const savedTasks = localStorage.getItem("tasks");

        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    function addTask(title, date) {
        const newTask = {
            id: Date.now(),
            title: title,
            date: date,
            completed: false,
        };

        setTasks((currentTasks) => {
            const updatedTasks = [newTask, ...currentTasks];

            localStorage.setItem(
                "tasks",
                JSON.stringify(updatedTasks)
            );

            return updatedTasks;
        });
    }

    function toggleTask(id) {
        setTasks((currentTasks) => {
            const updatedTasks = currentTasks.map((task) =>
                task.id === id
                    ? {
                        ...task,
                        completed: !task.completed,
                    }
                    : task
            );

            localStorage.setItem(
                "tasks",
                JSON.stringify(updatedTasks)
            );

            return updatedTasks;
        });
    }

    function updateTask(id, title, date) {
        setTasks((currentTasks) => {
            const updatedTasks = currentTasks.map((task) =>
                task.id === id
                    ? {
                        ...task,
                        title: title,
                        date: date,
                    }
                    : task
            );

            localStorage.setItem(
                "tasks",
                JSON.stringify(updatedTasks)
            );

            return updatedTasks;
        });
    }

    function deleteTask(id) {
        setTasks((currentTasks) => {
            const updatedTasks = currentTasks.filter(
                (task) => task.id !== id
            );

            localStorage.setItem(
                "tasks",
                JSON.stringify(updatedTasks)
            );

            return updatedTasks;
        });
    }

    return (
        <TaskContext.Provider
            value={{
                tasks,
                setTasks,
                addTask,
                toggleTask,
                updateTask,
                deleteTask,
                currentCycleDay,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
}