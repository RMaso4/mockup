'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Implement your auth logic here, e.g. with Supabase
      // const { error } = await supabase.auth.signInWithPassword({
      //   email,
      //   password,
      // });
      
      // if (error) throw error;
      
      // redirect after successful login
      router.push('/dashboard');
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleContinueWithoutLogin = () => {
    router.push('/browse');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="rounded-md bg-red-50 dark:bg-red-900/20 p-3 text-red-600 dark:text-red-200">
          {error}
        </div>
      )}
      
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">
          Email address
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
          placeholder="you@example.com"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="password" className="block text-sm font-medium">
          Wachtwoord
        </label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
      </div>
      
      <div className="flex items-center">
        <input
          id="remember"
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
        />
        <label htmlFor="remember" className="ml-2 block text-sm">
          Remember for 30 days
        </label>
      </div>
      
      <div className="space-y-3">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary text-white rounded p-2 hover:bg-primary-600 transition-colors"
        >
          {isLoading ? 'Loading...' : 'Log in'}
        </button>
        
        <button
          type="button"
          onClick={handleContinueWithoutLogin}
          className="w-full bg-white text-black border border-gray-300 rounded p-2 hover:bg-gray-50 transition-colors"
        >
          Ga door zonder in te loggen
        </button>
      </div>
    </form>
  );
}