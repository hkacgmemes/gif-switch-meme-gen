import "./style.scss";

export default ({ drawer, canvas, ...props }) => (
	<div className="drawer iphone" ref={drawer} {...props}>
        <img src={require("./iphone.png")} />
        <canvas className="shaped-canvas" ref={canvas} />
        <img className="base" src={require("./iphone_base.png")} />
    </div>
);