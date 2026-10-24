import { useEffect, useRef, useState, useContext } from 'react'
import { LogOut, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";


export function Navbar() {
    const [showLogout, setShowLogout] = useState(false)
    const logoutRef = useRef(null)
    const { logout } = useContext(AuthContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    // Close logout menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                logoutRef.current &&
                !logoutRef.current.contains(event.target)
            ) {
                setShowLogout(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <nav className="sticky top-0 z-50 bg-gray-950 text-white border-b-2 border-gray-700">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-4">

                {/* Logo */}
                <h1 className="text-2xl font-bold text-gray-400">
                    TodoApp
                </h1>

                {/* Right side */}
                <div className="flex items-center gap-8">

                    {/* Navigation Links */}
                    <div className="flex items-center gap-6">
                        <Link
                            to="/home"
                            className="text-sm text-gray-400 transition-colors hover:text-white"
                        >
                            Home
                        </Link>

                        <Link
                            to="/tasks"
                            className="text-sm text-gray-400 transition-colors hover:text-white"
                        >
                            Tasks
                        </Link>

                        <Link
                            to="/about"
                            className="text-sm text-gray-400 transition-colors hover:text-white"
                        >
                            About
                        </Link>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-6">

                        {/* Logout */}
                        <div
                            ref={logoutRef}
                            className="relative translate-y-0.5"
                        >
                            <button
                                onClick={() => setShowLogout((prev) => !prev)}
                                className="cursor-pointer text-gray-400 transition-colors hover:text-white"
                                aria-label="Logout menu"
                            >
                                <LogOut size={22} />
                            </button>

                            {showLogout && (
                                <div className="absolute right-0 top-8 z-50 w-32 rounded-md border border-gray-800 bg-gray-950 p-1 shadow-lg">
                                    <button className="w-full cursor-pointer rounded-sm px-3 py-2 text-left text-sm text-gray-300 transition-colors hover:text-red-400"
                                        onClick={logout}
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Dark Mode */}
                        <button
                            onClick={toggleTheme}
                            className="cursor-pointer text-gray-400 transition-colors hover:text-white"
                            aria-label="Toggle dark mode"
                        >
                            {theme === "light" ? (
                                <Sun size={22} />
                            ) : (
                                <Moon size={22} />
                            )}
                        </button>

                    </div>
                </div>
            </div>
        </nav>
    )
}