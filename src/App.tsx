import { useMsal } from "@azure/msal-react";
import { useGetTodoQuery } from "./store/feature/test";

function App() {
  const { accounts, instance } = useMsal();

  const { data, isLoading } = useGetTodoQuery();

  console.log("===data", data);

  const handleLogout = () => {
    instance.logoutRedirect({
      postLogoutRedirectUri: "/login",
    });
  };

  return (
    <>
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
        <div>
          <h1>Você está logado como: {accounts[0].name}</h1>

          <button onClick={handleLogout}>Sair</button>
        </div>
      </div>
    </>
  );
}

export default App;
