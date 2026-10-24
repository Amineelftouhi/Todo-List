import { useContext } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { TaskContext } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

export function TaskItem({ task }) {
    const navigate = useNavigate();
    const { toggleTask, deleteTask } = useContext(TaskContext);

    return (
        <div
            className="
        flex flex-col gap-4
        md:flex-row md:items-center md:justify-between
        p-4
        rounded-xl
        border border-gray-200
        bg-gray-50/60
        hover:bg-gray-100/70
        dark:bg-gray-800/40
        dark:hover:bg-gray-800/60
        dark:border-gray-700
        cursor-pointer
        hover:border-white/30
        transition-all duration-200
    "
        >

            {/* Left side */}
            <div className="flex items-center gap-3 min-w-0">

                {/* Checkbox */}
                <label className="relative cursor-pointer shrink-0">
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTask(task.id)}
                        className="peer sr-only"
                    />

                    <span
                        className="
                            w-5 h-5
                            flex items-center justify-center
                            rounded-md
                            border border-gray-300
                            bg-transparent
                            transition-all duration-200
                            peer-checked:bg-green-500
                            peer-checked:border-green-500
                        "
                    >
                        {task.completed && (
                            <span className="text-white text-xs font-bold">
                                ✓
                            </span>
                        )}
                    </span>
                </label>

                {/* Title */}
                <span
                    className={`
                        font-medium
                        truncate
                        ${task.completed
                            ? "line-through text-gray-400"
                            : "text-gray-700 dark:text-gray-200"
                        }
                    `}
                >
                    {task.title}
                </span>

            </div>

            {/* Right side */}
            <div className="flex items-center gap-2 ml-8 md:ml-0 whitespace-nowrap">

                {/* Date */}
                <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    {new Date(task.date).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    })}
                </span>

                {/* Status */}
                <span
                    className={`
            px-2 py-1 md:px-2.5
            rounded-full
            text-xs font-medium
            whitespace-nowrap
            ${task.completed
                            ? "bg-green-50 text-green-600"
                            : "bg-yellow-50 text-yellow-600"
                        }
        `}
                >
                    {task.completed ? "Completed" : "Pending"}
                </span>

                {/* Edit */}
                <button
                    type="button"
                    onClick={() => navigate(`/tasks/add?edit=${task.id}`)}
                    className="
            inline-flex items-center gap-1
            px-2 py-1.5 md:px-3
            rounded-lg
            bg-blue-50
            text-blue-500
            text-xs md:text-sm font-medium
            hover:bg-blue-100
            transition-colors
            cursor-pointer
            whitespace-nowrap
        "
                >
                    <Pencil className="w-4 h-4" />
                    Edit
                </button>

                {/* Delete */}
                <button
                    type="button"
                    onClick={() => deleteTask(task.id)}
                    className="
            inline-flex items-center gap-1
            px-2 py-1.5 md:px-3
            rounded-lg
            bg-red-50
            text-red-500
            text-xs md:text-sm font-medium
            hover:bg-red-100
            transition-colors
            cursor-pointer
            whitespace-nowrap
        "
                >
                    <Trash2 className="w-4 h-4" />
                    Delete
                </button>

            </div>

        </div>
    );
}