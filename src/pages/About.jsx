import {
    CheckCircle2,
    ListTodo,
    Search,
    BarChart3,
    ShieldCheck,
    Zap,
    Code2,
    Target,
    ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

export function About() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-950">

            {/* Background */}

            <div className="pointer-events-none absolute inset-0 animated-grid" />

            <div
                className="
                    pointer-events-none
                    absolute
                    -top-40
                    left-[15%]
                    w-[500px]
                    h-[500px]
                    rounded-full
                    bg-indigo-500/10
                    blur-[120px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    top-[45%]
                    right-[5%]
                    w-[450px]
                    h-[450px]
                    rounded-full
                    bg-purple-500/10
                    blur-[120px]
                "
            />

            <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 md:py-16">

                {/* HERO */}

                <section className="text-center max-w-3xl mx-auto">

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20">

                        <Zap className="w-4 h-4 text-indigo-400" />

                        <span className="text-sm font-medium text-indigo-400">
                            Simple. Focused. Productive.
                        </span>

                    </div>

                    <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-white">
                        Stay organized.
                        <span className="block text-indigo-400">
                            Get things done.
                        </span>
                    </h1>

                    <p className="mt-5 text-base md:text-lg leading-8 text-gray-400">
                        TodoApp is a modern task management application
                        designed to help you organize your work, track your
                        progress, and build better productivity habits.
                    </p>

                </section>


                {/* ABOUT */}

                <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                    {/* About Card */}

                    <div className="p-7 md:p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">

                        <div className="flex items-center gap-3 mb-5">

                            <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center">

                                <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />

                            </div>

                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                                What is TodoApp?
                            </h2>

                        </div>

                        <p className="text-sm md:text-base leading-7 text-gray-500 dark:text-gray-400">
                            TodoApp is a lightweight productivity tool built
                            to make task management simple and efficient.
                            Instead of complicated project management
                            systems, TodoApp focuses on the essential things:
                            creating tasks, organizing them, tracking their
                            status, and measuring your progress.
                        </p>

                        <p className="mt-4 text-sm md:text-base leading-7 text-gray-500 dark:text-gray-400">
                            The application is designed with a clean and
                            responsive interface so you can manage your tasks
                            comfortably across different screen sizes.
                        </p>

                    </div>


                    {/* Mission Card */}

                    <div className="p-7 md:p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">

                        <div className="flex items-center gap-3 mb-5">

                            <div className="w-11 h-11 rounded-xl bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center">

                                <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />

                            </div>

                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                                Our Goal
                            </h2>

                        </div>

                        <p className="text-sm md:text-base leading-7 text-gray-500 dark:text-gray-400">
                            The goal of TodoApp is simple: help you spend less
                            time managing your tasks and more time completing
                            them.
                        </p>

                        <div className="mt-6 flex items-center gap-3">

                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />

                            <span className="text-sm text-gray-600 dark:text-gray-300">
                                Keep your tasks organized
                            </span>

                        </div>

                        <div className="mt-3 flex items-center gap-3">

                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />

                            <span className="text-sm text-gray-600 dark:text-gray-300">
                                Track your productivity
                            </span>

                        </div>

                        <div className="mt-3 flex items-center gap-3">

                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />

                            <span className="text-sm text-gray-600 dark:text-gray-300">
                                Stay focused on what matters
                            </span>

                        </div>

                    </div>

                </section>


                {/* FEATURES */}

                <section className="mt-16">

                    <div className="text-center mb-8">

                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                            Everything you need to stay productive
                        </h2>

                        <p className="mt-2 text-sm text-gray-400">
                            Simple tools designed around your daily workflow.
                        </p>

                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                        {/* Feature 1 */}

                        <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

                            <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center">

                                <ListTodo className="w-5 h-5 text-blue-600 dark:text-blue-400" />

                            </div>

                            <h3 className="mt-5 font-bold text-gray-900 dark:text-white">
                                Task Management
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                                Create, edit, complete, and delete tasks
                                from one simple interface.
                            </p>

                        </div>


                        {/* Feature 2 */}

                        <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

                            <div className="w-11 h-11 rounded-xl bg-green-50 dark:bg-green-500/10 flex items-center justify-center">

                                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />

                            </div>

                            <h3 className="mt-5 font-bold text-gray-900 dark:text-white">
                                Task Status
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                                Easily mark tasks as completed or keep them
                                pending until they are finished.
                            </p>

                        </div>


                        {/* Feature 3 */}

                        <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

                            <div className="w-11 h-11 rounded-xl bg-yellow-50 dark:bg-yellow-500/10 flex items-center justify-center">

                                <Search className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />

                            </div>

                            <h3 className="mt-5 font-bold text-gray-900 dark:text-white">
                                Search & Filter
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                                Quickly find tasks and filter them by their
                                current status.
                            </p>

                        </div>


                        {/* Feature 4 */}

                        <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

                            <div className="w-11 h-11 rounded-xl bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center">

                                <BarChart3 className="w-5 h-5 text-purple-600 dark:text-purple-400" />

                            </div>

                            <h3 className="mt-5 font-bold text-gray-900 dark:text-white">
                                Productivity Dashboard
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                                Monitor completed tasks, pending tasks, and
                                your weekly completion rate.
                            </p>

                        </div>


                        {/* Feature 5 */}

                        <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

                            <div className="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center">

                                <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />

                            </div>

                            <h3 className="mt-5 font-bold text-gray-900 dark:text-white">
                                Persistent Data
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                                Your tasks remain available when you navigate
                                between pages or refresh the application.
                            </p>

                        </div>


                        {/* Feature 6 */}

                        <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

                            <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-500/10 flex items-center justify-center">

                                <Zap className="w-5 h-5 text-slate-600 dark:text-slate-300" />

                            </div>

                            <h3 className="mt-5 font-bold text-gray-900 dark:text-white">
                                Fast & Responsive
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                                A clean interface that works smoothly on
                                desktop, tablet, and mobile devices.
                            </p>

                        </div>

                    </div>

                </section>


                {/* TECHNOLOGY */}

    <section className="mt-16">

    <div className="p-7 md:p-9 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">

        <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center">

                <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />

            </div>

            <div>

                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Built by Amine
                </h2>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                    A project built with purpose.
                </p>

            </div>

        </div>

        <div className="mt-6 space-y-4">

            <p className="text-sm md:text-base leading-7 text-gray-500 dark:text-gray-400">
                Hi, I'm Amine, a web developer and the creator of TodoApp.
                I built this application to solve a simple but common problem:
                keeping daily tasks organized and knowing what has been
                completed and what still needs attention.
            </p>

            <p className="text-sm md:text-base leading-7 text-gray-500 dark:text-gray-400">
                The idea behind TodoApp was to create a simple and practical
                space where users can manage their tasks without unnecessary
                complexity, while also being able to follow their progress
                over time.
            </p>

            <p className="text-sm md:text-base leading-7 text-gray-500 dark:text-gray-400">
                At the same time, this project is part of my journey as a
                developer. I built it to practice my skills, understand how
                different parts of a web application work together, and
                challenge myself to turn an idea into a complete and
                functional product.
            </p>

        </div>

    </div>

</section>


                {/* CTA */}

                <section className="mt-16 text-center">

                    <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">

                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                            Ready to get organized?
                        </h2>

                        <p className="mt-3 text-sm md:text-base text-gray-400">
                            Start managing your tasks and keep your
                            productivity moving forward.
                        </p>

                        <Link
                            to="/tasks"
                            className="
                                inline-flex
                                items-center
                                gap-2
                                mt-6
                                px-5
                                py-3
                                rounded-xl
                                bg-slate-700
                                hover:bg-slate-600
                                text-white
                                font-medium
                                transition-colors
                            "
                        >
                            Go to Tasks
                            <ArrowRight className="w-4 h-4" />
                        </Link>

                    </div>

                </section>

            </div>

        </div>
    );
}