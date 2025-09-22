import S from "./styles.module.css";
import forget_password from "../../Assets/imagens/bg-forget-password.png";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod/v3";
import Cabecalho from "../../Components/Cabecalho";

const schema = z
  .object({
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
    confirmPassword: z.string(),
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

export default function ResetarSenha() {
  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    formState: { errors: errorsPassword, isSubmitting },
  } = useForm<FormData>({
    mode: "onBlur",
    resolver: zodResolver(schema),
    defaultValues: { password: "", confirmPassword: "" },
  });

  console.log(errorsPassword);

  const onSubmitPassword = async (data: FormData) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <main className={S.container}>
      <Cabecalho />
      <div className={S.containerForm}>
        <form
          onSubmit={handleSubmitPassword(onSubmitPassword)}
          className={S.form}
        >
          <div className={S.containerTitle}>
            <h1>Nova Senha</h1>
          </div>
          <div className={S.containerInput}>
            <label>Digite sua senha</label>
            <input
              {...registerPassword("password")}
              type="password"
              placeholder="Digite sua senha"
              autoFocus={true}
            />
            {errorsPassword.password && (
              <span className={S.error}>{errorsPassword.password.message}</span>
            )}
          </div>
          <div className={S.containerInput}>
            <label>Confirme sua senha</label>
            <input
              {...registerPassword("confirmPassword")}
              type="password"
              placeholder="Digite sua senha"
            />
            {errorsPassword.confirmPassword && (
              <span className={S.error}>
                {errorsPassword.confirmPassword.message}
              </span>
            )}
          </div>

          <button type="submit" disabled={isSubmitting} className={S.button}>
            {isSubmitting ? <span className={S.spinner}></span> : "Enviar"}
          </button>
        </form>
        <div className={S.containerImage}>
          <img src={forget_password} alt="" />
        </div>
      </div>
    </main>
  );
}
