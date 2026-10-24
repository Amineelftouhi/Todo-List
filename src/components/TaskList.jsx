import { TaskItem } from "./TaskItem";

export function TaskList({ filteredTasks }) {

    const sortedTasks = [...filteredTasks].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    const groupedTasks = sortedTasks.reduce((groups, task) => {
        const date = new Date(task.date);

        const dateKey = date.toISOString().split("T")[0];

        if (!groups[dateKey]) {
            groups[dateKey] = [];
        }

        groups[dateKey].push(task);

        return groups;
    }, {});

    return (
        <div className="space-y-6">

            {Object.entries(groupedTasks).map(([dateKey, tasks]) => {
                const date = new Date(dateKey);

                const dayName = date.toLocaleDateString("en-US", {
                    weekday: "long",
                });

                const month = date.toLocaleDateString("en-US", {
                    month: "short",
                });

                const day = date.toLocaleDateString("en-US", {
                    day: "2-digit",
                });

                const year = date.getFullYear();

                return (
                    <div key={dateKey}>

                        {/* Day Separator */}
                        <div className="flex items-center gap-3 mb-4">

                            <h3
                                className="
            px-3 py-1
            rounded-full
            bg-gray-100 dark:bg-gray-800
            border border-green-200 dark:border-green-500/30
            text-sm font-semibold
            text-gray-600 dark:text-gray-300
            whitespace-nowrap
        "
                            >
                                {dayName} - {month} {day} - {year}
                            </h3>

                        </div>

                        {/* Tasks of this day */}
                        <div className="space-y-3">
                            {tasks.map((task) => (
                                <TaskItem
                                    key={task.id}
                                    task={task}
                                />
                            ))}
                        </div>

                    </div>
                );
            })}

        </div>
    );
}