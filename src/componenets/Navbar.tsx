import LogoLink from "./LogoLink";
import { getDictionary } from "./dict";

const Navbar = async ({ locale }: { locale: 'en' }) => {
	const dict = getDictionary(locale);

	return (
		<>
			<p>From navnbar: {dict.test}</p>
			<p><LogoLink>My link</LogoLink></p>
		</>
	)
};

export default Navbar;
