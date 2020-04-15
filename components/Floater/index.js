import "./style.scss";

import classNames from "classnames";

export default ({ children, align }) => {
	const _align = `${align}`.toLowerCase() === "right" ? "right" : "left"

	return (
		<div className={classNames("floater", _align)}>
			{ children }
		</div>
	);
};