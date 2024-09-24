import { Button } from "antd";
import { ChangeEvent } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { Input, InputPassword } from "@/shared";
import { useAppDispatch, useAppSelector } from "@/store";
import { loginUser, setError } from "@/store/slices";

import styles from "./login.module.scss";

export const Login = () => {

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { loading, error: responseError } = useAppSelector((state) => state.auth);

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async (data: { login: string, password: string }) => {
    const authAsyncThunkResult = await dispatch(loginUser(data));

    if (authAsyncThunkResult?.type === "auth/loginUser/fulfilled") {
      navigate("/");
    }
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
              onBlur={ field.onBlur }
              onChange={ (e: ChangeEvent<HTMLInputElement>) => {
                field.onChange(e);
                if (responseError) {
                  dispatch(setError({ error: "" }));
                }
              } }
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
              onBlur={ field.onBlur }
              onChange={ (e: ChangeEvent<HTMLInputElement>) => {
                field.onChange(e);
                if (responseError) {
                  dispatch(setError({ error: "" }));
                }
              } }
            />
          ) }
        />
        <p className={ styles.text_error }>{ errors?.password?.message ? errors?.password?.message : responseError || "" }</p>

        <div className={ styles.card__button_wrapper }>
          <Button
            size="large"
            className={ styles.card__button }
            htmlType="submit"
            loading={ loading }
            disabled={ loading || !!responseError || !!errors?.login || !!errors?.password }
          >
            Войти
          </Button>
        </div>
      </form>
    </div>
  );
};
