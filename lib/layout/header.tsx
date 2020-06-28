import React from "react";
import { scopedClassMaker } from "../helper/classnames";

const sc = scopedClassMaker("yui-layout");

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Header: React.FC<Props> = (props) => {
  const { className, ...rest } = props;
  return (
    <div className={sc("header", { extra: className })} {...rest}>
      {props.children}
    </div>
  );
};

export default Header;
