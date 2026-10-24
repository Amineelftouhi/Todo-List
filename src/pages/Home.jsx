import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";
import { TaskContext } from "../context/TaskContext";

import {
    CheckCircle2,
    ListTodo,
    Clock3,
    TrendingUp,
    CalendarDays,
    BarChart3,
} from "lucide-react";

import {
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const START_DATE = "2026-09-07";

function getDateFromString(dateString) {
    const [year, month, day] = dateString.split("-").map(Number);

    return new Date(year, month - 1, day);
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

function getCurrentCycleStart() {
    const startDate = getDateFromString(START_DATE);
    const today = new Date();

    startDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const difference = today - startDate;

    const daysPassed = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    if (daysPassed < 0) {
        return startDate;
    }

    const cycleStart = new Date(startDate);

    cycleStart.setDate(
        cycleStart.getDate() +
        Math.floor(daysPassed / 7) * 7
    );

    return cycleStart;
}

function getCycleDays() {
    const cycleStart = getCurrentCycleStart();

    return Array.from({ length: 7 }, (_, index) => {
        const date = new Date(cycleStart);

        date.setDate(
            cycleStart.getDate() + index
        );

        return date;
    });
}

export function Home() {
    const { user } = useContext(AuthContext);
    const { tasks } = useContext(TaskContext);

    const cycleDays = getCycleDays();

    const cycleStart = formatDate(cycleDays[0]);
    const cycleEnd = formatDate(cycleDays[6]);

    // Current 7-day cycle tasks
    const cycleTasks = tasks.filter(
        (task) =>
            task.date >= cycleStart &&
            task.date <= cycleEnd
    );

    // Weekly summary
    const totalTasks = cycleTasks.length;

    const completedTasks = cycleTasks.filter(
        (task) => task.completed
    ).length;

    const pendingTasks = cycleTasks.filter(
        (task) => !task.completed
    ).length;

    const completionPercentage =
        totalTasks === 0
            ? 0
            : Math.round(
                (completedTasks / totalTasks) * 100
            );

    // Daily statistics
    const weeklyStats = cycleDays.map((date) => {
        const dateString = formatDate(date);

        const dayTasks = cycleTasks.filter(
            (task) => task.date === dateString
        );

        const total = dayTasks.length;

        const completed = dayTasks.filter(
            (task) => task.completed
        ).length;

        const pending = dayTasks.filter(
            (task) => !task.completed
        ).length;

        const percentage =
            total === 0
                ? 0
                : Math.round(
                    (completed / total) * 100
                );

        return {
            date,
            dateString,
            total,
            completed,
            pending,
            percentage,
        };
    });

    // Chart data
    const chartData = weeklyStats.map((day) => ({
        day: day.date.toLocaleDateString(
            "en-US",
            {
                weekday: "short",
            }
        ),

        percentage:
            day.total === 0
                ? null
                : day.percentage,

        completed: day.completed,
        pending: day.pending,
    }));

    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-950">

            {/* Animated Background */}

            <div className="pointer-events-none absolute inset-0 animated-grid" />

            <div
                className="
                    pointer-events-none
                    absolute
                    -top-40
                    left-[20%]
                    w-[500px]
                    h-[500px]
                    rounded-full
                    bg-blue-500/10
                    blur-[120px]
                    glow-one
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    top-[40%]
                    right-[10%]
                    w-[450px]
                    h-[450px]
                    rounded-full
                    bg-violet-500/10
                    blur-[120px]
                    glow-two
                "
            />


            {/* Main Content */}

            <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-8 md:py-10">

                {/* HEADER */}

                <div className="mb-8">

                    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

                        <div>

                            <div className="flex items-center gap-2 mb-3">

                                <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center">

                                    <BarChart3 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />

                                </div>

                                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                                    Productivity Dashboard
                                </span>

                            </div>

                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                                Welcome back, {user?.name} 
                            </h1>

                            <p className="mt-3 max-w-2xl text-sm md:text-base text-gray-400">
                                Track your daily tasks and monitor your
                                progress throughout the week.
                            </p>

                        </div>


                        <div className="flex items-center gap-2 w-fit px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 shadow-sm">

                            <CalendarDays className="w-4 h-4 text-indigo-400" />

                            <span className="text-sm font-semibold text-gray-300">
                                7-Day Cycle
                            </span>

                        </div>

                    </div>

                </div>


                {/* WEEKLY SUMMARY */}

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8">

                    {/* Total */}

                    <div className="p-4 md:p-5 rounded-2xl bg-white dark:bg-gray-800 border border-blue-100 dark:border-blue-500/20 shadow-sm hover:shadow-md transition-all">

                        <div className="flex items-center justify-between">

                            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center">

                                <ListTodo className="w-5 h-5 text-blue-600 dark:text-blue-400" />

                            </div>

                            <span className="hidden sm:block text-xs font-semibold text-blue-500">
                                WEEK
                            </span>

                        </div>

                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                            Total Tasks
                        </p>

                        <p className="mt-1 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                            {totalTasks}
                        </p>

                    </div>


                    {/* Completed */}

                    <div className="p-4 md:p-5 rounded-2xl bg-white dark:bg-gray-800 border border-green-100 dark:border-green-500/20 shadow-sm hover:shadow-md transition-all">

                        <div className="flex items-center justify-between">

                            <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-500/10 flex items-center justify-center">

                                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />

                            </div>

                            <span className="hidden sm:block text-xs font-semibold text-green-500">
                                DONE
                            </span>

                        </div>

                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                            Completed
                        </p>

                        <p className="mt-1 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                            {completedTasks}
                        </p>

                    </div>


                    {/* Pending */}

                    <div className="p-4 md:p-5 rounded-2xl bg-white dark:bg-gray-800 border border-yellow-100 dark:border-yellow-500/20 shadow-sm hover:shadow-md transition-all">

                        <div className="flex items-center justify-between">

                            <div className="w-10 h-10 rounded-xl bg-yellow-50 dark:bg-yellow-500/10 flex items-center justify-center">

                                <Clock3 className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />

                            </div>

                            <span className="hidden sm:block text-xs font-semibold text-yellow-500">
                                TODO
                            </span>

                        </div>

                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                            Pending
                        </p>

                        <p className="mt-1 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                            {pendingTasks}
                        </p>

                    </div>


                    {/* Completion */}

                    <div className="p-4 md:p-5 rounded-2xl bg-white dark:bg-gray-800 border border-purple-100 dark:border-purple-500/20 shadow-sm hover:shadow-md transition-all">

                        <div className="flex items-center justify-between">

                            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center">

                                <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />

                            </div>

                            <span className="hidden sm:block text-xs font-semibold text-purple-500">
                                RATE
                            </span>

                        </div>

                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                            Completion
                        </p>

                        <p className="mt-1 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                            {completionPercentage}%
                        </p>

                    </div>

                </div>


                {/* DAILY STATISTICS */}

                <div className="mb-8">

                    <div className="mb-5">

                        <h2 className="text-xl font-bold text-white">
                            Daily Statistics
                        </h2>

                        <p className="mt-1 text-sm text-gray-400">
                            Detailed performance for each day
                        </p>

                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

                        {weeklyStats.map((day) => {

                            const dayName =
                                day.date.toLocaleDateString(
                                    "en-US",
                                    {
                                        weekday: "long",
                                    }
                                );

                            const shortDate =
                                day.date.toLocaleDateString(
                                    "en-US",
                                    {
                                        month: "short",
                                        day: "2-digit",
                                    }
                                );

                            return (
                                <div
                                    key={day.dateString}
                                    className="
                                        group
                                        p-5
                                        rounded-2xl
                                        bg-white
                                        dark:bg-gray-800
                                        border border-gray-200
                                        dark:border-gray-700
                                        shadow-sm
                                        hover:shadow-lg
                                        hover:-translate-y-1
                                        transition-all
                                        duration-300
                                    "
                                >

                                    {/* Day */}

                                    <div className="flex items-center justify-between mb-5">

                                        <div>

                                            <h3 className="font-bold text-gray-900 dark:text-white">
                                                {dayName}
                                            </h3>

                                            <p className="mt-0.5 text-xs text-gray-400">
                                                {shortDate}
                                            </p>

                                        </div>

                                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10">

                                            <span className="text-sm font-bold text-purple-600 dark:text-purple-400">
                                                {day.total === 0
                                                    ? "—"
                                                    : `${day.percentage}%`}
                                            </span>

                                        </div>

                                    </div>


                                    {/* Daily stats */}

                                    <div className="grid grid-cols-3 gap-2">

                                        {/* Total */}

                                        <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-500/10">

                                            <ListTodo className="w-4 h-4 text-blue-600 dark:text-blue-400 mb-2" />

                                            <p className="text-[11px] text-blue-600/70 dark:text-blue-400/70">
                                                Total
                                            </p>

                                            <p className="mt-0.5 text-lg font-bold text-blue-700 dark:text-blue-300">
                                                {day.total}
                                            </p>

                                        </div>


                                        {/* Completed */}

                                        <div className="p-3 rounded-xl bg-green-50 dark:bg-green-500/10">

                                            <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mb-2" />

                                            <p className="text-[11px] text-green-600/70 dark:text-green-400/70">
                                                Done
                                            </p>

                                            <p className="mt-0.5 text-lg font-bold text-green-700 dark:text-green-300">
                                                {day.completed}
                                            </p>

                                        </div>


                                        {/* Pending */}

                                        <div className="p-3 rounded-xl bg-yellow-50 dark:bg-yellow-500/10">

                                            <Clock3 className="w-4 h-4 text-yellow-600 dark:text-yellow-400 mb-2" />

                                            <p className="text-[11px] text-yellow-600/70 dark:text-yellow-400/70">
                                                Pending
                                            </p>

                                            <p className="mt-0.5 text-lg font-bold text-yellow-700 dark:text-yellow-300">
                                                {day.pending}
                                            </p>

                                        </div>

                                    </div>


                                    {/* Progress */}

                                    <div className="mt-5">

                                        <div className="flex items-center justify-between mb-2">

                                            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                                Completion
                                            </span>

                                            <span className="text-xs font-bold text-purple-600 dark:text-purple-400">
                                                {day.total === 0
                                                    ? "No tasks"
                                                    : `${day.percentage}%`}
                                            </span>

                                        </div>

                                        <div className="h-2 rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden">

                                            <div
                                                className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-700"
                                                style={{
                                                    width:
                                                        day.total === 0
                                                            ? "0%"
                                                            : `${day.percentage}%`,
                                                }}
                                            />

                                        </div>

                                    </div>

                                </div>
                            );
                        })}

                    </div>

                </div>


                {/* TWO CHARTS */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* LINE CHART */}

                    <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">

                        <div className="mb-6">

                            <div className="flex items-center gap-2">

                                <div className="w-9 h-9 rounded-lg bg-green-50 dark:bg-green-500/10 flex items-center justify-center">

                                    <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />

                                </div>

                                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                                    Weekly Completion
                                </h2>

                            </div>

                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Completion percentage for each day
                            </p>

                        </div>


                        <div className="h-72">

                            <ResponsiveContainer
                                width="100%"
                                height="100%"
                            >

                                <LineChart
                                    data={chartData}
                                    margin={{
                                        top: 10,
                                        right: 10,
                                        left: 0,
                                        bottom: 5,
                                    }}
                                >

                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        vertical={false}
                                        stroke="#e5e7eb"
                                    />

                                    <XAxis
                                        dataKey="day"
                                        tickLine={false}
                                        axisLine={false}
                                    />

                                    <YAxis
                                        domain={[0, 100]}
                                        tickFormatter={(value) =>
                                            `${value}%`
                                        }
                                        tickLine={false}
                                        axisLine={false}
                                    />

                                    <Tooltip
                                        formatter={(value) => [
                                            `${value}%`,
                                            "Completion",
                                        ]}
                                    />

                                    <Line
                                        type="monotone"
                                        dataKey="percentage"
                                        connectNulls={false}
                                        stroke="#22c55e"
                                        strokeWidth={3}
                                        dot={{
                                            r: 5,
                                            fill: "#22c55e",
                                        }}
                                        activeDot={{
                                            r: 7,
                                        }}
                                    />

                                </LineChart>

                            </ResponsiveContainer>

                        </div>

                    </div>


                    {/* BAR CHART */}

                    <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">

                        <div className="mb-6">

                            <div className="flex items-center gap-2">

                                <div className="w-9 h-9 rounded-lg bg-yellow-50 dark:bg-yellow-500/10 flex items-center justify-center">

                                    <BarChart3 className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />

                                </div>

                                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                                    Weekly Progress
                                </h2>

                            </div>

                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Completed and pending tasks
                            </p>

                        </div>


                        <div className="h-72">

                            <ResponsiveContainer
                                width="100%"
                                height="100%"
                            >

                                <BarChart
                                    data={chartData}
                                    margin={{
                                        top: 10,
                                        right: 10,
                                        left: 0,
                                        bottom: 5,
                                    }}
                                >

                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        vertical={false}
                                        stroke="#e5e7eb"
                                    />

                                    <XAxis
                                        dataKey="day"
                                        tickLine={false}
                                        axisLine={false}
                                    />

                                    <YAxis
                                        allowDecimals={false}
                                        tickLine={false}
                                        axisLine={false}
                                    />

                                    <Tooltip />

                                    <Bar
                                        dataKey="completed"
                                        name="Completed"
                                        fill="#22c55e"
                                        radius={[
                                            6,
                                            6,
                                            0,
                                            0,
                                        ]}
                                    />

                                    <Bar
                                        dataKey="pending"
                                        name="Pending"
                                        fill="#eab308"
                                        radius={[
                                            6,
                                            6,
                                            0,
                                            0,
                                        ]}
                                    />

                                </BarChart>

                            </ResponsiveContainer>

                        </div>


                        {/* Legend */}

                        <div className="mt-5 flex items-center gap-5">

                            <div className="flex items-center gap-2">

                                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />

                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                    Completed
                                </span>

                            </div>

                            <div className="flex items-center gap-2">

                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />

                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                    Pending
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}