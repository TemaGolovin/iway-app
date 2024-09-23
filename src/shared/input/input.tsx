import { Input as AntdInput } from "antd";
import { FC, HTMLAttributes } from "react";
import classNames from "classnames";
import { RefCallBack } from "react-hook-form";

import styles from "./input.module.scss";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  id: string;
  size?: "large" | "small"
  placeholder?: string;
  label?: string;
  inputClasses?: string;
  inputRef?: RefCallBack;
  isError?: boolean;
  type?: "email" | "number" | "password" | "text";
}

export const Input: FC<InputProps> = ({
  id, label, size, placeholder, inputClasses, type, inputRef, isError, ...props
}) => {
  return (
    <label htmlFor={ id }>
      { label }
      <AntdInput
        ref={ inputRef }
        id={ id }
        size={ size }
        placeholder={ placeholder }
        type={ type }
        className={ classNames(styles.input, {
          [styles.input_error]: isError,
        }, [inputClasses]) }
        { ...props }
      />
    </label>

  );
};

export const InputPassword: FC<InputProps> = ({
  label, size, placeholder, inputClasses, type, id, inputRef, isError, ...props
}) => {
  return (
    <label htmlFor={ id }>
      { label }
      <AntdInput.Password
        ref={ inputRef }
        id={ id }
        size={ size }
        placeholder={ placeholder }
        type={ type }
        className={ classNames(styles.input, {
          [styles.input_error]: isError,
        }, [inputClasses]) }
        { ...props }
      />
    </label>
  );
};
