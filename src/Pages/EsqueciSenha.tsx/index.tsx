import S from "./styles.module.css";
import forget_password from "../../Assets/imagens/bg-forget-password.png";
import { useForm } from "react-hook-form";
import z from "zod/v3";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Cabecalho from "../../Components/Cabecalho";

const schema = z.object({
  email: z.string().email("Email inválido"),
});

const schema2 = z
  .object({
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
    confirmPassword: z.string(),
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;
type FormData2 = z.infer<typeof schema2>;

export default function EsqueciSenha() {
  const [currState, setCurrState] = useState("email");
  const {
    register: registerEmail,
    handleSubmit: handleSubmitEmail,
    formState: { errors: errorsEmail },
  } = useForm<FormData>({
    mode: "onBlur",
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
  });

  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    formState: { errors: errorsPassword },
    reset: resetPassword,
  } = useForm<FormData2>({
    mode: "onBlur",
    resolver: zodResolver(schema2),
    defaultValues: { password: "", confirmPassword: "" },
  });

  console.log(errorsEmail);
  console.log(errorsPassword);

  const onSubmitEmail = (data: FormData) => {
    console.log(data);
    resetPassword();
    setCurrState("password");
  };

  const onSubmitPassword = (data: FormData2) => {
    console.log(data);
  };

  return (
    <main className={S.container}>
      <Cabecalho />
      <div className={S.containerForm}>
        {/* Formulario de envio de email */}
        {currState === "email" ? (
          <form onSubmit={handleSubmitEmail(onSubmitEmail)} className={S.form}>
            <div className={S.containerTitle}>
              <h1>Nova Senha</h1>
              <p>
                Mandaremos uma email para você mudar <br /> sua senha
              </p>
            </div>
            <div className={S.containerInput}>
              <label>Digite seu email:</label>
              <input
                {...registerEmail("email")}
                type="email"
                placeholder="Digite seu E-mail"
              />
              {errorsEmail.email && (
                <span className={S.error}>{errorsEmail.email.message}</span>
              )}
            </div>
            <button className={S.button} type="submit">
              Enviar
            </button>
          </form>
        ) : (
          <form
            key="password"
            onSubmit={handleSubmitPassword(onSubmitPassword)}
            className={S.form}
          >
            <div className={S.containerTitle}>
              <h1>Nova Senha</h1>
              <p>Informe sua nova senha abaixo</p>
            </div>
            <div className={S.containerInput}>
              <label>Digite sua senha:</label>
              <input
                {...registerPassword("password")}
                type="password"
                placeholder="Digite sua senha"
                autoComplete="new-password"
              />
              {errorsPassword.password && (
                <span className={S.error}>
                  {errorsPassword.password.message}
                </span>
              )}
            </div>
            <div className={S.containerInput}>
              <label>Confirmar senha:</label>
              <input
                {...registerPassword("confirmPassword")}
                type="password"
                placeholder="Digite sua senha"
                autoComplete="new-password"
              />
              {errorsPassword.confirmPassword && (
                <span className={S.error}>
                  {errorsPassword.confirmPassword.message}
                </span>
              )}
            </div>
            <button className={S.button} type="submit">
              Enviar
            </button>
          </form>
        )}
        {/* Formulario de redefinição de Senha */}
        <div className={S.containerImage}>
          <img src={forget_password} alt="" />
        </div>
      </div>
    </main>
  );
}
