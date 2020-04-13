import "./style.scss"

import Router from 'next/router'

import { locales } from "../../extra/i18n";

export default () => (
	<ul className="lang-switcher">
		{ Object.entries(locales).map(([k, v]) => (
			<li key={k}>
				<a href={`?lang=${k}`}>{ v._lang }</a>
			</li>
		)) }
	</ul>
);