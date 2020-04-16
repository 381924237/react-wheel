import * as React from "react";
import * as ReactDOM from "react-dom";
import Button from "./button";
import Icon from "./icon";

const fn: React.MouseEventHandler<SVGElement> = (e) => {
  console.log(e.target);
};

ReactDOM.render(
  <Icon name="wechat" onClick={fn}/>,
  document.getElementById("root")
);
