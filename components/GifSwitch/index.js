import "./style.scss";

export default ({ drawer, canvas, ...props }) => (
	<div className="drawer switch" ref={drawer} {...props}>
        <img src={require("./sauce.jpg")} />
        <canvas className="shaped-canvas" ref={canvas} />
    </div>
);