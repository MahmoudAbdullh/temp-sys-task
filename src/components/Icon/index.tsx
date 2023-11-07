import React from "react";
type Props = React.PropsWithChildren;

const styles: React.CSSProperties = {
  backgroundColor: "#fff",
  height: 26,
  width: 26,
  borderRadius: "50%",
  border: "1px solid var(--gray)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Icon = ({ children }: Props) => {
  return <div style={styles}>{children}</div>;
};

export default Icon;
