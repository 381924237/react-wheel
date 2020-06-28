import React, { Fragment, ReactElement, ReactNode } from "react";
import { scopedClassMaker } from "@/helper/classnames";
import { Icon } from "../index";
import ReactDOM, { createPortal } from "react-dom";
import "./dialog.scss";

interface Props {
  visible: boolean;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
  title?: string;
}

const sc = scopedClassMaker("yui-dialog");

const Dialog: React.FC<Props> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e);
  };

  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.closeOnClickMask) {
      props.onClose(e);
    }
  };

  const result = props.visible ? (
    <Fragment>
      <div className={sc("mask")} onClick={onClickMask}></div>
      <div className={sc()}>
        <div className={sc("close")} onClick={onClickClose}>
          <Icon name="close" />
        </div>
        <header className={sc("header")}>{props.title}</header>
        <main className={sc("main")}>{props.children}</main>
        {props.buttons && props.buttons.length > 0 && (
          <footer className={sc("footer")}>
            {props.buttons &&
              props.buttons.map((button, index) =>
                React.cloneElement(button, { key: index })
              )}
          </footer>
        )}
      </div>
    </Fragment>
  ) : null;
  return createPortal(result, document.body);
};

const modal = (
  content: ReactNode,
  buttons?: Array<ReactElement>,
  afterClose?: () => void
) => {
  const close = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };

  const component = (
    <Dialog
      visible={true}
      buttons={buttons}
      onClose={() => {
        close();
        afterClose && afterClose();
      }}
    >
      {content}
    </Dialog>
  );

  const div = document.createElement("div");
  document.body.appendChild(div);
  ReactDOM.render(component, div);
  return close;
};

const alert = (content: string) => {
  const button = <button onClick={() => close()}>OK</button>;
  const close = modal(content, [button]);
};

const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    close();
    yes && yes();
  };

  const onNo = () => {
    close();
    no && no();
  };

  const buttons = [
    <button onClick={onYes}>yes</button>,
    <button onClick={onNo}>no</button>,
  ];
  const close = modal(content, buttons, no);
};

export { alert, confirm, modal };
export default Dialog;
