import "./style.scss";

// import { Layer } from "react-mapping";

export default ({ drawer, canvas, ...props }) => (
	<div className="drawer pc" ref={drawer} {...props}>
        <img src={require("./pc.png")} />
        {/*
    	<Layer isEditMode={1}>
        	<div className="testdiv" />
        </Layer>
        */}
    	<canvas className="shaped-canvas" ref={canvas} />
        <img className="base" src={require("./pc_base.png")} />
    </div>
);