import { getDictionary } from "./dict";

const Navbar = async ({ locale }: { locale: 'en' }) => {
	const dict = getDictionary(locale);

	return (
		<>
			<p>From navnbar: {dict.test}</p>
		</>
	)
};

export default Navbar;
