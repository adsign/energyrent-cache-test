'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LogoLink = ({ children, className }: { children: React.ReactNode; className?: string; }) => {
	const pathname = usePathname();

	if (pathname === '/') {
		return (
			<a href="/" className={className}>
				{children}
			</a>
		);
	} else {
		return (
			<Link href="/" className={className}>
				{children}
			</Link>
		);
	}
};

export default LogoLink;
