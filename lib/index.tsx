import * as React from "react";
import * as ReactDOM from "react-dom";
import Button from "./button/button";
import Icon from "./icon/icon";

const fn: React.MouseEventHandler<SVGElement> = (e) => {
  console.log(e.target);
  console.log(1);
};

ReactDOM.render(
  <Icon name="wechat" onClick={fn} />,
  document.getElementById("root")
);
