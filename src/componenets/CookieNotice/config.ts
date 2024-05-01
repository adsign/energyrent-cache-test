import { CookieConsentConfig } from 'vanilla-cookieconsent';

const CookieNoticeNorwegian = {
	consentModal: {
		title: 'Vi bruker informasjonskapsler!',
		description: 'Vi bruker informasjonskapsler på nettsiden vår for å sikre riktig drift og forstå hvordan du samhandler med den.',
		acceptAllBtn: 'Aksepter',
		showPreferencesBtn: 'Innstillinger',
	},
	preferencesModal: {
		title: 'Innstillinger',
		acceptAllBtn: 'Aksepter alle',
		acceptNecessaryBtn: 'Avvis alle',
		savePreferencesBtn: 'Lagre innstillinger',
		closeIconLabel: 'lukk',
		sections: [
			{
				title: 'Helt nødvendige informasjonskapsler',
				description: 'Disse informasjonskapslene er essensielle for riktig funksjon av nettsiden vår. Uten disse informasjonskapslene ville nettsiden ikke fungert ordentlig.',
				linkedCategory: 'necessary',
			},
			{
				title: 'Informasjonskapsler for analyseverktøy',
				description: 'Disse informasjonskapslene lar nettsiden huske valgene du har tatt tidligere.',
				linkedCategory: 'statistics',
			},
		],
	},
};

const CookieNoticeSwedish = {
	consentModal: {
		title: 'Vi använder cookies!',
		description: 'Vi använder cookies på vår webbplats för att säkerställa korrekt drift och för att förstå hur du interagerar med den.',
		acceptAllBtn: 'Godkänn',
		showPreferencesBtn: 'Inställningar',
	},
	preferencesModal: {
		title: 'Inställningar',
		acceptAllBtn: 'Godkänn alla',
		acceptNecessaryBtn: 'Avvisa alla',
		savePreferencesBtn: 'Spara inställningar',
		closeIconLabel: 'stäng',
		sections: [
			{
				title: 'Helt nödvändiga cookies',
				description: 'Dessa cookies är avgörande för att vår webbplats ska fungera korrekt. Utan dessa cookies skulle webbplatsen inte fungera ordentligt.',
				linkedCategory: 'necessary',
			},
			{
				title: 'Cookies för analysverktyg',
				description: 'Dessa cookies låter webbplatsen komma ihåg de val du har gjort tidigare.',
				linkedCategory: 'statistics',
			},
		],
	},
};
const CookieNoticeDanish = {
	consentModal: {
		title: 'Vi bruger cookies!',
		description: 'Vi bruger cookies på vores hjemmeside for at sikre korrekt drift og for at forstå, hvordan du interagerer med den.',
		acceptAllBtn: 'Accepter',
		showPreferencesBtn: 'Indstillinger',
	},
	preferencesModal: {
		title: 'Indstillinger',
		acceptAllBtn: 'Accepter alle',
		acceptNecessaryBtn: 'Afvis alle',
		savePreferencesBtn: 'Gem indstillinger',
		closeIconLabel: 'luk',
		sections: [
			{
				title: 'Helt nødvendige cookies',
				description: 'Disse cookies er afgørende for at vores hjemmeside kan fungere korrekt. Uden disse cookies ville hjemmesiden ikke fungere ordentligt.',
				linkedCategory: 'necessary',
			},
			{
				title: 'Cookies til analyseværktøjer',
				description: 'Disse cookies lader hjemmesiden huske de valg, du har truffet tidligere.',
				linkedCategory: 'statistics',
			},
		],
	},
};

const CookieNoticeEnglish = {
	consentModal: {
		title: 'This website uses cookies',
		description: 'We use cookies on our website to ensure proper operation and to understand how you interact with it.',
		acceptAllBtn: 'Allow all',
		showPreferencesBtn: 'Customize',
	},
	preferencesModal: {
		title: 'Manage cookie preferences',
		acceptAllBtn: 'Allow all',
		acceptNecessaryBtn: 'Deny',
		savePreferencesBtn: 'Allow selection',
		closeIconLabel: 'Close modal',
		sections: [
			{
				title: 'Necessary',
				description:
					'Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.',
				linkedCategory: 'necessary',
			},
			{
				title: 'Statistics',
				description: 'Statistic cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously.',
				linkedCategory: 'statistics',
			},
		],
	},
};

const CookieNoticeConfig = {
	guiOptions: {
		consentModal: {
			layout: 'wide',
			position: 'bottom right',
			equalWeightButtons: true,
		},
		preferencesModal: {
			layout: 'box',
			flipButtons: false,
			equalWeightButtons: true,
		},
	},

	categories: {
		necessary: {
			enabled: true,
			readOnly: true,
		},
		statistics: {},
	},
};

function CookieNoticeConfigForLocale(locale: 'en' | 'se' | 'dk' | 'no'): CookieConsentConfig {
	let config = {
		...CookieNoticeConfig,
		language: {
			default: locale,
			translations: {} as Record<string, any>,
		},
	};

	if (locale === 'no') {
		config.language.translations.no = CookieNoticeNorwegian;
	}
	if (locale === 'se') {
		config.language.translations.no = CookieNoticeSwedish;
	}
	if (locale === 'dk') {
		config.language.translations.no = CookieNoticeDanish;
	}
	if (locale === 'en') {
		config.language.translations.en = CookieNoticeEnglish;
	}

	return config as CookieConsentConfig;
}

export default CookieNoticeConfigForLocale;
