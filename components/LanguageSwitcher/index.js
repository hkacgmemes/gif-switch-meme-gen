import "./style.scss"

import Link from 'next/link';
import { withRouter } from 'next/router';

import { locales } from "../../extra/i18n";

const LanguageSwitcher = ({ router: { query } }) => (
	<ul className="lang-switcher">
		{ Object.entries(locales).map(([k, v]) => (
			<li key={k}>
				<Link href={{ query: { ...query, lang: k }}}>
					<a>{ v._lang }</a>
				</Link>
			</li>
		)) }
	</ul>
);

export default withRouter(LanguageSwitcher);