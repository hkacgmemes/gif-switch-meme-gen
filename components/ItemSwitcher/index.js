import "./style.scss";

import Link from 'next/link';
import { withRouter } from 'next/router';

const ItemSwitcher = ({ router: { query } }) => (
	<ul className="item-switcher">
		<li>
			<Link href={{ query: { ...query, item: "switch" }}}>
				<a>Switch</a>
			</Link>
		</li>
		<li>
			<Link href={{ query: { ...query, item: "iphone" }}}>
				<a>iPhone</a>
			</Link>
		</li>
		<li>
			<Link href={{ query: { ...query, item: "pc" }}}>
				<a>PC</a>
			</Link>
		</li>
	</ul>
);

export default withRouter(ItemSwitcher);