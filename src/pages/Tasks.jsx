import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { TaskList } from "../components/TaskList";

export function Tasks() {
    const { tasks } = useContext(TaskContext);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    const filteredTasks = tasks.filter((task) => {
        const matchesSearch = task.title
            .toLowerCase()
            .startsWith(search.toLowerCase());

        const matchesFilter =
            filter === "All" ||
            (filter === "Pending" && !task.completed) ||
            (filter === "Completed" && task.completed);

        return matchesSearch && matchesFilter;
    });

    return (
        <div className="px-2 py-2 md:px-8">

            {/* Page Title */}
            <div className="text-center mb-5">

                <h1 className="text-3xl font-bold dark:text-gray-700">
                    Tasks
                </h1>

                <p className="text-gray-500 dark:text-gray-400 mt-1.5">
                    Manage your tasks and stay productive.
                </p>
            </div>

            {/* Main Tasks Container */}
            <div
                className="max-w-5xl mx-auto
                bg-white dark:bg-gray-900
                border border-gray-200 dark:border-gray-700
                rounded-2xl p-5"
            >

                {/* Add Task */}
                <div className="flex justify-end mb-4">
                    <Link
                        to="/tasks/add"
                    className="
    px-4 py-2 rounded-xl
    bg-slate-700 hover:bg-slate-800
    dark:bg-slate-600 dark:hover:bg-slate-500
    text-white font-medium
    transition-colors cursor-pointer
"
                    >
                        Add Task
                    </Link>
                </div>

                {/* Search & Filter */}
                <div className="flex flex-col md:flex-row gap-3 mb-5">

                    <input
                        type="text"
                        placeholder="Search tasks..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="
    flex-1 px-4 py-2.5 rounded-xl
    border border-gray-200/50 dark:border-gray-700/50
    bg-gray-50 dark:bg-gray-800
    text-gray-900 dark:text-white
    placeholder-gray-400
    outline-none
    focus:border-gray-300
"
                    />

                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="
    px-4 py-2.5 rounded-xl
    border border-gray-200/50 dark:border-gray-700/50
    bg-gray-50 dark:bg-gray-800
    text-gray-700 dark:text-gray-300
    outline-none
    focus:border-gray-300
    cursor-pointer
"
                    >
                        <option value="All">All</option>
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                    </select>

                </div>
                {/* Tasks Header */}
                <div className="flex items-center justify-between mb-3">

                    <h2 className="text-base font-medium text-gray-700 dark:text-gray-300">
                        Your tasks
                    </h2>

                    <span className="text-sm text-gray-400 dark:text-gray-500">
                        {tasks.length} {tasks.length === 1 ? "task" : "tasks"}
                    </span>

                </div>

                {/* Tasks Content */}
                {tasks.length === 0 ? (

                    /* No tasks at all */
                    <div
                        className="min-h-[230px]
        flex flex-col items-center justify-center
        rounded-xl
        bg-gray-50 dark:bg-gray-800/50
        text-center"
                    >

                        <div
                            className="w-12 h-12
            flex items-center justify-center
            rounded-xl
            bg-orange-50 dark:bg-orange-500/10
            text-orange-400 mb-4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.8}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75
                    M21 12a9 9 0 1 1-18 0
                    9 9 0 0 1 18 0Z"
                                />
                            </svg>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            No tasks yet
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            Start by creating a new task.
                        </p>

                    </div>

                ) : filteredTasks.length === 0 ? (

                    /* No search/filter results */
                    <div
                        className="min-h-[230px]
        flex flex-col items-center justify-center
        rounded-xl
        bg-gray-50 dark:bg-gray-800/50
        text-center"
                    >

                        <div
                            className="w-12 h-12
            flex items-center justify-center
            rounded-xl
            bg-orange-50 dark:bg-orange-500/10
            text-orange-400 mb-4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.8}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9.5 9.5h.01
                    M14.5 9.5h.01
                    M9 15c1.5-1 4.5-1 6 0
                    M21 12a9 9 0 1 1-18 0
                    9 9 0 0 1 18 0Z"
                                />
                            </svg>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            No tasks found
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            No tasks match your search or filter.
                        </p>

                    </div>

                ) : (

                    /* Task List */
                    <TaskList filteredTasks={filteredTasks} />

                )}

                {/* Quick Tip */}
                <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-3">

                    <span className="font-medium text-gray-500 dark:text-gray-400">
                        Quick tip:
                    </span>{" "}

                    Keep your tasks short and actionable.

                </p>

            </div>

        </div>
    );
}
