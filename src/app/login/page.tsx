// Create a new file at: src/app/login/page.tsx

"use client";

import React, { useState } from 'react';
// You might need to install these icons: npm install lucide-react
import { Mail, Lock, LogIn, Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        // Here you would typically call the NextAuth signIn function
        // For now, we'll just simulate a login attempt
        console.log("Attempting to log in...");
        setTimeout(() => {
            // Replace this with actual signIn() call
            // For example: signIn('credentials', { email, password, redirect: false });
            setError("This is a demo. Login functionality is not yet connected.");
            setIsLoading(false);
        }, 1500);
    };

    const handleGoogleSignIn = () => {
        setIsLoading(true);
        // Here you would call: signIn('google');
        console.log("Signing in with Google...");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-lg dark:bg-gray-800">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome Back</h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">Sign in to access your dashboard</p>
                </div>

                <div className="flex flex-col space-y-4">
                     <button
                        onClick={handleGoogleSignIn}
                        disabled={isLoading}
                        className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"
                    >
                        <svg className="w-5 h-5 mr-2" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                            <path fill="currentColor" d="M488 261.8C488 403.3 381.5 512 244 512 109.8 512 0 402.2 0 261.8 0 122.4 109.8 13.6 244 13.6c70.3 0 129.8 27.8 174.4 72.4l-64 64c-21.2-20.4-49.8-32.8-82.4-32.8-69 0-125.5 56.5-125.5 125.5s56.5 125.5 125.5 125.5c78.8 0 109.8-54.8 113.8-82.8H244v-76h244z"></path>
                        </svg>
                        Sign in with Google
                    </button>
                </div>

                <div className="flex items-center justify-center">
                    <span className="w-full border-t border-gray-300 dark:border-gray-600"></span>
                    <span className="px-2 text-xs text-gray-500 bg-white dark:bg-gray-800 dark:text-gray-400">OR</span>
                    <span className="w-full border-t border-gray-300 dark:border-gray-600"></span>
                </div>

                <form className="space-y-6" onSubmit={handleLogin}>
                    <div className="relative">
                        <Mail className="absolute w-5 h-5 text-gray-400 top-3 left-3" />
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="w-full py-2 pl-10 pr-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Email address"
                        />
                    </div>

                    <div className="relative">
                        <Lock className="absolute w-5 h-5 text-gray-400 top-3 left-3" />
                        <input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            autoComplete="current-password"
                            required
                            className="w-full py-2 pl-10 pr-10 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 flex items-center pr-3"
                        >
                            {showPassword ? (
                                <EyeOff className="w-5 h-5 text-gray-400" />
                            ) : (
                                <Eye className="w-5 h-5 text-gray-400" />
                            )}
                        </button>
                    </div>

                     {error && (
                        <p className="text-sm text-center text-red-500">{error}</p>
                    )}

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                            <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">Forgot your password?</a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-lg shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400"
                        >
                            {isLoading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </div>
                </form>
                 <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                    Don't have an account?{' '}
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
