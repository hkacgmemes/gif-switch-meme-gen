import "./style.scss"

import Router from 'next/router'

export default () => (
	<ul className="lang-switcher">
		<li>
			<a href="?lang=hk">香港</a>
		</li>
		<li>
			<a href="?lang=th">ไทย</a>
		</li>
	</ul>
);