import React from "react";

export const RenderComponent: React.FC<{ name: string }> = ({ name }) => {
  const ComponentItem = React.lazy(() =>
    import(`../component/${name}/${name}.example`)
  );
  return <ComponentItem />;
};
