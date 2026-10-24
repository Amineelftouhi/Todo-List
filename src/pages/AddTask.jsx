import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";

export function AddTask() {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [titleError, setTitleError] = useState("");
    const [dateError, setDateError] = useState("");

    const { tasks, addTask, updateTask } = useContext(TaskContext);
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const editId = searchParams.get("edit");

    const isEditing = Boolean(editId);

    useEffect(() => {
        if (editId) {
            const taskToEdit = tasks.find(
                (task) => task.id === Number(editId)
            );

            if (taskToEdit) {
                setTitle(taskToEdit.title);
                setDate(taskToEdit.date);
            }
        }
    }, [editId, tasks]);

    function handleSubmit(e) {
        e.preventDefault();

        setTitleError("");
        setDateError("");

        let hasError = false;

        if (!title.trim()) {
            setTitleError("Please enter a task title.");
            hasError = true;
        }

        if (!date) {
            setDateError("Please select a date.");
            hasError = true;
        }

        if (hasError) {
            return;
        }

        if (isEditing) {
            updateTask(Number(editId), title, date);
        } else {
            addTask(title, date);
        }

        navigate("/tasks");
    }

    return (
        <div className="px-5 py-6 md:px-8">

            {/* Page Header */}
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-gray-400 dark:text-gray-700">
                    {isEditing ? "Edit Task" : "Add Task"}
                </h1>

                <p className="text-gray-500 dark:text-gray-400 mt-1.5">
                    {isEditing
                        ? "Update your task and keep your week organized."
                        : "Create a new task and keep your week organized."
                    }
                </p>
            </div>

            {/* Form Container */}
            <div
                className="max-w-2xl mx-auto
                bg-white dark:bg-gray-900
                border border-gray-200 dark:border-gray-700
                rounded-2xl p-6 md:p-7"
            >

                {/* Form */}
                <form className="space-y-5" onSubmit={handleSubmit}>

                    {/* Task Title */}
                    <div>
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium
                            text-gray-700 dark:text-gray-300 mb-2"
                        >
                            Task title
                        </label>

                        <input
                            id="title"
                            type="text"
                            placeholder="What needs to be done ?"
                            className="w-full px-4 py-3 rounded-xl
                            border border-gray-200 dark:border-gray-700
                            bg-gray-50 dark:bg-gray-800
                            text-black dark:text-white
                            placeholder-gray-400
                            outline-none
                            cursor-pointer
                            focus:ring-2 focus:ring-orange-400"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        {titleError && (
                            <p className="mt-2 text-sm text-red-500">
                                {titleError}
                            </p>
                        )}
                    </div>

                    {/* Date */}
                    <div>
                        <label
                            htmlFor="date"
                            className="block text-sm font-medium
                            text-gray-700 dark:text-gray-300 mb-2"
                        >
                            Date
                        </label>

                        <input
                            id="date"
                            type="date"
                            className="w-full px-4 py-3 rounded-xl
                            border border-gray-200 dark:border-gray-700
                            bg-gray-50 dark:bg-gray-800
                            text-black dark:text-white
                            outline-none
                            cursor-pointer
                            focus:ring-2 focus:ring-orange-400"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />

                        {dateError && (
                            <p className="mt-2 text-sm text-red-500">
                                {dateError}
                            </p>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-end gap-3 pt-2">

                        <button
                            type="button"
                            className="px-4 py-2.5 rounded-xl
                            border border-gray-200 dark:border-gray-700
                            text-gray-600 dark:text-gray-300
                            hover:bg-gray-50 dark:hover:bg-gray-800
                            transition-colors cursor-pointer"
                            onClick={() => navigate("/tasks")}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="px-5 py-2.5 rounded-xl
                            bg-slate-700 hover:bg-slate-800
                            dark:bg-slate-600 dark:hover:bg-slate-500
                            text-white font-medium
                            transition-colors cursor-pointer"
                        >
                            {isEditing ? "Edit Task" : "Add Task"}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}