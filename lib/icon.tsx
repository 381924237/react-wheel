import React from "react";
import "./importIcon.js";
import classnames from "./helper/classnames";
import "./icon.scss";

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FC<IconProps> = ({ name, className, ...restProps }) => {
  return (
    <svg className={classnames("yui-icon", className)} {...restProps}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;
