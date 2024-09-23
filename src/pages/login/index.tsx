import { loginRequest } from "@/lib/auth/authConfig";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";

export default function Login() {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.log(e);
    });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        alignSelf: "center",
        width: "100%",
      }}
    >
      <h1>Faça login com o serviço da MS</h1>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
