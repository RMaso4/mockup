'use client';

import React, { type PropsWithChildren } from 'react';

/**
 * A wrapper component for client-side only code
 * @param props Component props with children
 * @returns ClientWrapper component
 */
export function ClientWrapper({ 
  children,
  className,
  ...props 
}: PropsWithChildren<{ className?: string } & React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}