import React, { ReactChild, Fragment, ReactPortal } from "react";
import { scopedClassMaker } from "@/helper/classnames";
import "./dialog.scss";

interface Props {
  visible: boolean;
}

const sc = scopedClassMaker("yui-dialog");
console.log(sc("mask"));

const Dialog: React.FC<Props> = (props) => {
  return props.visible ? (
    <Fragment>
      <div className="yui-dialog-mask"></div>
      <div className="yui-dialog">
        <header></header>
        <main>{props.children}</main>
        <footer>
          <button>ok</button>
          <button>cancel</button>
        </footer>
      </div>
    </Fragment>
  ) : null;
};

export default Dialog;
