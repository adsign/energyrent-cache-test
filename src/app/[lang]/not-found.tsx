import { headers } from "next/headers";

export default function NotFoundPage() {
	// this line causes fetch cache not to work for any page
	const locale = headers().get('x-test-header') || 'en';

	return (<><p>This is the 404 page inside lang</p></>);
}
