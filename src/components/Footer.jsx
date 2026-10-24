import { CheckSquare } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-gray-800 bg-gray-950 text-gray-400">

            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-8">

                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                    {/* Logo */}

                    <div>

                        <div className="flex items-center gap-2">

                            <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center">
                                <CheckSquare className="w-5 h-5 text-gray-900" />
                            </div>

                            <span className="text-lg font-bold text-white">
                                TodoApp
                            </span>

                        </div>

                        <p className="mt-2 text-sm text-gray-500">
                            Stay organized. Get things done.
                        </p>

                    </div>

                    {/* Links */}

                    <div className="flex items-center gap-5">

                        <a
                            href="/home"
                            className="text-sm hover:text-white transition-colors"
                        >
                            Home
                        </a>

                        <a
                            href="/tasks"
                            className="text-sm hover:text-white transition-colors"
                        >
                            Tasks
                        </a>

                        <a
                            href="/about"
                            className="text-sm hover:text-white transition-colors"
                        >
                            About
                        </a>

                    </div>

                </div>

                {/* Bottom */}

                <div className="mt-8 pt-5 border-t border-gray-800 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                    <p className="text-xs text-gray-500">
                        © 2026 TodoApp. All rights reserved.
                    </p>

                    <p className="text-xs text-gray-600">
                        Built with React & Tailwind CSS
                    </p>

                </div>

            </div>

        </footer>
    );
}