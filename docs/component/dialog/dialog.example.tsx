import React, { Fragment, useState } from "react";
import Dialog from "@/dialog/dialog";

export default () => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <Fragment>
      <button onClick={() => setVisible(true)}>show dialog</button>
      <Dialog visible={visible}>Dialog</Dialog>
    </Fragment>
  );
};
