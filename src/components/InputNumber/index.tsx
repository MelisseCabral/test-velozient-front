'use client';
import {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  useState,
} from 'react';
import './styles.css';

interface IControlledInput
  extends HTMLAttributes<HTMLInputElement>,
    Partial<Pick<HTMLInputElement, 'disabled'>> {
  /*
   * Name of the input
   */
  name: string;
  /*
   * Type of the input
   */
  type: 'text' | 'password' | 'email' | 'checkbox' | 'number';
  /*
   * Label of the input
   * accepts string or ReactNode
   */
  label?: string | ReactNode;
  defaulValue?: number;
  /*
   * Error of the input
   * accepts FieldError
   *
   * @example
   * {
   *  type: 'required',
   * message: 'This field is required'
   * }
   *
   */
  error?: boolean;
  /*
   * Hint of the input
   * accepts string
   */
  hint?: string;
  /*
   * Length of the input type code
   */
  length?: number;
  /*
   * classname of parent the div
   */
  parentClassName?: string;
  /*
   * StartAdornment of the input
   */
  startAdornment?: ReactNode;
  /*
   * EndAdornment of the input
   */
  endAdornment?: ReactNode;
}

const InputNumber: FC<PropsWithChildren<IControlledInput>> = ({
  name,
  type = 'text',
  label = '',
  error,
  hint,
  length,
  parentClassName = '',
  endAdornment,
  startAdornment,
  defaulValue = 1,
  onChange,
  onBlur,
  ...rest
}): JSX.Element => {
  const [value, setValue] = useState(defaulValue);
  return (
    <div className={`flex flex-col parent-primary ${parentClassName}`}>
      <input
        className={'inputNumber ' + (error && 'error-border')}
        type={'number'}
        id={name}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        {...rest}
      />
    </div>
  );
};

export default InputNumber;
