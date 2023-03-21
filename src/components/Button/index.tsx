import classNames from 'classnames';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import './styles.css';

interface IButton extends PropsWithChildren<HTMLAttributes<HTMLButtonElement>> {
  /**
   * Button contents
   */
  label?: string;
  /**
   * Button disabled
   */
  startAddornment?: React.ReactNode;
  endAddornment?: React.ReactNode;
  disabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const Button: FC<IButton> = ({
  label = '',
  disabled = false,
  startAddornment = null,
  endAddornment = null,
  className = '',
  ...rest
}) => (
  <button
    className={classNames(
      'button',
      disabled ? 'button--disabled' : ``,
      className
    )}
    {...rest}
  >
    {startAddornment}
    {label}
    {endAddornment}
  </button>
);

export default Button;
