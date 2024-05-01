import 'server-only';

import data from './data.json';

const dictionaries = {
	en: data,
};

export type Dictionary = typeof data;

export const getDictionary = (locale: 'en'): Dictionary => {
	if (locale !== 'en') throw new Error(`Unsupported locale: ${locale}`);
	return dictionaries[locale];
};
