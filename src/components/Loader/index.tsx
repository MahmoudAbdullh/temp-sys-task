import React from "react";

type Props = React.PropsWithChildren & { isLoading: boolean };

const Loader = ({ isLoading, children }: Props) => {
  if (isLoading) {
    return <div>Loader..</div>;
  }
  return children;
};

export default Loader;
