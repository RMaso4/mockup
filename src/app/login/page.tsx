import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import LoginForm from '@/components/auth/LoginForm';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your Parthos account',
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left side - Login form */}
      <div className="flex w-full flex-col justify-center p-8 md:w-1/2">
        <div className="mx-auto w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welkom terug!</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Vul hieronder je informatie in.
            </p>
          </div>
          
          <LoginForm />
        </div>
      </div>
      
      {/* Right side - Logo */}
      <div className="hidden md:flex md:w-1/2 bg-primary items-center justify-center">
        <div className="relative h-80 w-80">
          <Image
            src="/ParthosLogo.svg"
            alt="Parthos - Designed for Space"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}