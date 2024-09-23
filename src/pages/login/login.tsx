import { Button } from "antd";
import { ChangeEvent } from "react";
import { Controller, useForm } from "react-hook-form";

import { Input, InputPassword } from "@/shared";
import { login } from "@/api/fetchers/fetchers";

import styles from "./login.module.scss";

export const Login = () => {

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
    mode: "onBlur"
  });

  const onSubmit = async (data: { login: string, password: string }) => {
    const a = await login(data);

    console.log(a);

  };

  return (
    <div className={ styles.page }>
      <form className={ styles.card } onSubmit={ handleSubmit(onSubmit) } >
        <h2 className={ styles.card__title }>Вход</h2>
        <Controller
          control={ control }
          name="login"
          rules={{
            required: {
              message: "Поле не может быть пустым",
              value: true
            }
          }}
          render={ ({ field }) => (
            <Input
              id={ field.name }
              size="large"
              placeholder="Введите логин"
              inputRef={ field.ref }
              isError={ !!errors?.login }
              onChange={ (e: ChangeEvent<HTMLInputElement>) => field.onChange(e) }
              onBlur={ field.onBlur }
            />
          ) }
        />
        <p className={ styles.text_error }>{ errors?.login?.message || "" }</p>

        <Controller
          control={ control }
          name="password"
          rules={{
            required: {
              message: "Поле не может быть пустым",
              value: true
            }
          }}
          render={ ({ field }) => (
            <InputPassword
              id={ field.name }
              size="large"
              placeholder="Введите пароль"
              inputRef={ field.ref }
              isError={ !!errors.password }
              onChange={ (e: ChangeEvent<HTMLInputElement>) => field.onChange(e) }
              onBlur={ field.onBlur }
            />
          ) }
        />
        <p className={ styles.text_error }>{ errors?.password?.message || "" }</p>

        <div className={ styles.card__button_wrapper }>
          <Button size="large" className={ styles.card__button } htmlType="submit">Войти</Button>
        </div>
      </form>
    </div>
  );
};
