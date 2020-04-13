import "./style.scss"

import Router from 'next/router'

import Locales from "../../extra/i18n";

export default () => (
	<ul className="lang-switcher">
		{ Object.entries(Locales()).map(([k, v]) => (
			<li>
				<a href={`?lang=${k}`}>{ v._lang }</a>
			</li>
		)) }
	</ul>
);