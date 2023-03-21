'use client';
import { FC, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
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

const Input: FC<PropsWithChildren<IControlledInput>> = ({
  name,
  type = 'text',
  label = '',
  error,
  hint,
  length,
  parentClassName = '',
  endAdornment,
  defaultValue,
  onChange,
  onBlur,
  ...rest
}): JSX.Element => {
  return (
    <div className={`flex flex-col parent-primary ${parentClassName}`}>
      <>
        {label && (
          <label
            htmlFor={name}
            className="mb-2 text-sm font-semibold leading-normal text-gray-700"
          >
            {label}
          </label>
        )}
        <input
          className={'input-primary ' + (error && 'error-border')}
          type={type}
          id={name}
          onChange={onChange}
          onBlur={onBlur}
          {...rest}
        />
        <div className="adornment">{endAdornment}</div>
      </>

      {hint && !error ? (
        <p className="mt-1 text-xs text-gray-500">{hint}</p>
      ) : (
        error && (
          <p className="mt-1 text-xs text-quaternary-200 capitalize-first">
            {hint}
          </p>
        )
      )}
    </div>
  );
};

export default Input;
