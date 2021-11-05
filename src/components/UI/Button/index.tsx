import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import styles from './Button.module.scss'

type DefaultButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type ButtonProps = DefaultButtonProps & {
  main?: boolean
  white?: boolean
  red?: boolean
  black?: boolean
}

const Button: React.FC<ButtonProps> = ({main, red, white, black, className, ...buttonProps}) => {

  let buttonStyle;

  if (main) {
    buttonStyle = `${styles.main} ${styles.default} ${className}`
  } else if (white) {
    buttonStyle = `${styles.white} ${styles.default} ${className}`
  } else if (red) {
    buttonStyle = `${styles.red} ${styles.default} ${className}`
  } else if (black) {
    buttonStyle = `${styles.black} ${styles.default} ${className}`
  } else {
    buttonStyle = `${styles.default} ${className}`
  }

  return (
    <button
      className={buttonStyle}
      {...buttonProps}
    />
  );
};

export default Button;