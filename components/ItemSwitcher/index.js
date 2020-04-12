import "./style.scss"

import Router from 'next/router'

export default () => (
	<ul className="item-switcher">
		<li>
			<a href="?item=switch">Switch</a>
		</li>
		<li>
			<a href="?item=iphone">iPhone</a>
		</li>
	</ul>
);