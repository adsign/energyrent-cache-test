import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
	const nextUrl = request.nextUrl;

	// Leave _next and all paths with . alone (e.g. /_next/image, /favicon.ico, /api/*)
	if (nextUrl.pathname.startsWith('/_next') || nextUrl.pathname.startsWith('/api') || (nextUrl.pathname.indexOf('.') > 0 && nextUrl.pathname.indexOf('sitemap.xml') < 0)) {
		return NextResponse.next();
	}

	const locale = 'en';
	const headersWithLocale = new Headers(request.headers);
	headersWithLocale.set('x-test-header', locale);

	const newPath = `/${locale}${nextUrl.pathname}`;
	nextUrl.pathname = newPath;
	return NextResponse.rewrite(nextUrl, { headers: headersWithLocale });
}
