import React, { ReactElement } from "react";
import { scopedClassMaker } from "../helper/classnames";
import Aside from "./aside";
import "./layout.scss";

const sc = scopedClassMaker("yui-layout");

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>;
}

const Layout: React.FC<Props> = (props) => {
  const { className, ...rest } = props;
  const children = props.children as Array<ReactElement>;
  const hasAside =
    "length" in children && children.some((node) => node.type === Aside);
  // children.reduce((result, node) => result || node.type === Aside, false);

  return (
    <div className={sc({ "": true, hasAside }, { extra: className })} {...rest}>
      {props.children}
    </div>
  );
};

export default Layout;
