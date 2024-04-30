type Locale = 'en' | 'no';

interface FetchJsonOptions {
	collection: string;
	params: URLSearchParams;
	tagSuffix?: string;
	id?: string;
	global?: boolean;
}

async function payloadFetchJson({ collection, params, tagSuffix, id, global }: FetchJsonOptions): Promise<any> {
	const tag = tagSuffix ? `${collection}_${tagSuffix}` : collection;

	const relativeUrl = global === true ? `/api/globals/${collection}` : `/api/${collection}`;
	let url = `${process.env.PAYLOAD_URL}${relativeUrl}`;
	if (id) {
		url += `/${id}`;
	}
	url += `?${params.toString()}`;

	const response = await fetch(url, { next: { tags: [tag] } });
	if (!response.ok) {
		throw new Error(`Fetch ${collection} failed: ${response.statusText} body: ${await response.text()}`);
	}

	return await response.json();
}

export const fetchArticles = async (locale: Locale, limit?: number): Promise<any> => {
	const params = new URLSearchParams([
		['limit', limit ? limit.toString() : '100'],
		['depth', '1'],
		['locale', locale],
		['sort', '-datePublished'],
	]);
	const json = await payloadFetchJson({
		collection: 'articles',
		params,
	});
	return json.docs;
};
