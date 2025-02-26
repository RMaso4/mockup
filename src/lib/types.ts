/**
 * Application type definitions
 */

// User related types
export interface User {
    id: string;
    email: string;
    name?: string;
    avatarUrl?: string;
    role: UserRole;
    createdAt: string;
    updatedAt: string;
  }
  
  export enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
    GUEST = 'guest',
  }
  
  export interface UserSettings {
    userId: string;
    theme: ThemePreference;
    notifications: NotificationSettings;
    language: string;
  }
  
  export enum ThemePreference {
    LIGHT = 'light',
    DARK = 'dark',
    SYSTEM = 'system',
  }
  
  export interface NotificationSettings {
    email: boolean;
    push: boolean;
    marketing: boolean;
  }
  
  // Auth related types
  export interface AuthResponse {
    user: User | null;
    session: Session | null;
    error?: AuthError;
  }
  
  export interface Session {
    accessToken: string;
    refreshToken: string;
    expiresAt: number;
  }
  
  export interface AuthError {
    message: string;
    status?: number;
  }
  
  // API related types
  export interface ApiResponse<T = any> {
    data?: T;
    error?: ApiError;
    status: number;
  }
  
  export interface ApiError {
    message: string;
    code?: string;
    status?: number;
    details?: Record<string, any>;
  }
  
  export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
    hasMore: boolean;
  }
  
  export interface PaginationParams {
    page?: number;
    pageSize?: number;
    sort?: string;
    order?: 'asc' | 'desc';
    search?: string;
  }
  
  // Project related types
  export interface Project {
    id: string;
    name: string;
    description?: string;
    status: ProjectStatus;
    createdAt: string;
    updatedAt: string;
    ownerId: string;
    members: User[];
  }
  
  export enum ProjectStatus {
    PLANNING = 'planning',
    IN_PROGRESS = 'in_progress',
    COMPLETED = 'completed',
    ON_HOLD = 'on_hold',
    CANCELLED = 'cancelled',
  }
  
  // Component props types
  export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  }
  
  export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
  }
  
  export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string;
    helperText?: string;
    options: Array<{ value: string; label: string }>;
  }
  
  export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'bordered' | 'elevated';
  }
  
  // Route params types
  export interface PageParams {
    params: Record<string, string | string[]>;
    searchParams: Record<string, string | string[]>;
  }