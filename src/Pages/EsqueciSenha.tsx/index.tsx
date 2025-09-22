import S from "./styles.module.css";
import forget_password from "../../Assets/imagens/bg-forget-password.png";
import { useForm } from "react-hook-form";
import z from "zod/v3";
import { zodResolver } from "@hookform/resolvers/zod";
import Cabecalho from "../../Components/Cabecalho";

const schema = z.object({
  email: z.string().email("Email inválido"),
});

type FormData = z.infer<typeof schema>;

export default function EsqueciSenha() {
  const {
    register: registerEmail,
    handleSubmit: handleSubmitEmail,
    formState: { errors: errorsEmail },
  } = useForm<FormData>({
    mode: "onBlur",
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
  });

  console.log(errorsEmail);

  const onSubmitEmail = (data: FormData) => {
    console.log(data);
  };

  return (
    <main className={S.container}>
      <Cabecalho />
      <div className={S.containerForm}>
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
        <div className={S.containerImage}>
          <img src={forget_password} alt="" />
        </div>
      </div>
    </main>
  );
}
