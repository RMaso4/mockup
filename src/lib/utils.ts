import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines and merges class names using clsx and tailwind-merge
 * @param inputs Class names to combine
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date using Intl.DateTimeFormat
 * @param date Date to format
 * @param options Intl.DateTimeFormatOptions
 * @returns Formatted date string
 */
export function formatDate(
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }
): string {
  return new Intl.DateTimeFormat('en-US', options).format(
    typeof date === 'string' || typeof date === 'number' ? new Date(date) : date
  );
}

/**
 * Delays execution for a specified time
 * @param ms Milliseconds to delay
 * @returns Promise that resolves after the delay
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Creates a debounced function that delays invoking func until after wait milliseconds
 * @param func Function to debounce
 * @param wait Milliseconds to delay
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait = 300
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function(this: any, ...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func.apply(this, args);
    };
    
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * Safely accesses nested object properties without throwing errors for undefined values
 * @param object Object to access
 * @param path Property path as string or array (e.g., 'a.b.c' or ['a', 'b', 'c'])
 * @param defaultValue Value to return if path doesn't exist
 * @returns Value at path or defaultValue
 */
export function get<T = any>(
  object: Record<string, any>,
  path: string | string[],
  defaultValue?: T
): T {
  const keys = Array.isArray(path) ? path : path.split('.');
  let result = object;
  
  for (const key of keys) {
    if (result === undefined || result === null) {
      return defaultValue as T;
    }
    result = result[key];
  }
  
  return (result === undefined ? defaultValue : result) as T;
}

/**
 * Truncates a string to a maximum length and adds an ellipsis if needed
 * @param str String to truncate
 * @param maxLength Maximum length
 * @returns Truncated string
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 3) + '...';
}