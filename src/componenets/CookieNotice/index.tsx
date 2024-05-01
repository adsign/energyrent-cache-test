'use client';

import { useEffect } from 'react';
import CookieNoticeConfigForLocale from './config';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import * as CookieConsent from 'vanilla-cookieconsent';

import './CookieNotice.css';

const CookieNotice = ({ locale }: { locale: 'en' }) => {
	useEffect(() => {
		CookieConsent.run(CookieNoticeConfigForLocale(locale));
	}, [locale]);

	return null;
};

export default CookieNotice;
