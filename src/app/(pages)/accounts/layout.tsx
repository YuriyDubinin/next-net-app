import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Accounts',
    description: 'List of accounts',
};

export default function AccountsLayout({ children }: PropsWithChildren<unknown>) {
    return <div>{children}</div>;
}