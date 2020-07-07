import React, { Fragment, useState } from "react";
import Dialog, { alert, confirm } from "@/dialog/dialog";

export default () => {
  const [x, setX] = useState<boolean>(false);
  const [y, setY] = useState<boolean>(false);

  return (
    <Fragment>
      <div>
        <div>dialog example 1</div>
        <button onClick={() => setX(true)}>show dialog</button>
        <Dialog
          visible={x}
          title={"title"}
          buttons={[
            <button
              onClick={() => {
                setX(false);
              }}
            >
              cancel
            </button>,
            <button
              onClick={() => {
                setX(false);
              }}
            >
              ok
            </button>,
          ]}
          onClose={() => {
            setX(false);
          }}
        >
          <strong>text</strong>
        </Dialog>
      </div>

      <div>
        <div>dialog example 2</div>
        <button onClick={() => setY(true)}>show dialog</button>
        <Dialog
          visible={y}
          buttons={[
            <button
              onClick={() => {
                setY(false);
              }}
            >
              cancel
            </button>,
            <button
              onClick={() => {
                setY(false);
              }}
            >
              ok
            </button>,
          ]}
          onClose={() => {
            setY(false);
          }}
          closeOnClickMask={true}
        >
          <strong>text</strong>
        </Dialog>
      </div>

      <div>
        <button onClick={() => alert("alert")}>alert</button>
        <button
          onClick={() =>
            confirm(
              "confirm",
              () => {
                console.log("yes");
              },
              () => {
                console.log("no");
              }
            )
          }
        >
          confirm
        </button>
      </div>
    </Fragment>
  );
};
