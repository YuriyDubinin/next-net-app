'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import styles from './styles/style.module.css';

export default function Admins() {
    const router = useRouter();

    return (
        <div>
            <h1>list of admins</h1>
            <>
                <ul className={styles.list}>
                    <Link href="/admins/1">admin #1</Link>
                    <Link href="/admins/2">admin #2</Link>
                </ul>
            </>
        </div>
    );
}
