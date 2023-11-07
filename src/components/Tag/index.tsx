import React from "react";
import CN from "classnames";
import styles from "./tage.module.css";

type Props = React.PropsWithChildren & {
  success?: boolean;
  danger?: boolean;
  dangerLight?: boolean;
  light?: boolean;
};

const Tag = ({ children, success, danger, light, ...rest }: Props) => {
  return (
    <span
      className={CN(styles.tagContainer, {
        [styles.tagContainerSuccess]: success,
        [styles.tagContainerDanger]: danger,
        [styles.tagContainerSuccessLight]: light,
      })}
      {...rest}
    >
      {children}
    </span>
  );
};

export default Tag;
