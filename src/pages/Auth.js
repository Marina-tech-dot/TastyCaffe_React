import { json, redirect } from "react-router-dom";
import { AuthForm } from "../components/AuthForm/AuthForm";
import { startSession } from "../session";
import { signInUser } from "../firebase";

export const AuthPage = () => {
  return <AuthForm />;
};

export async function action({ request }) {
  console.log('!')
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";
  const data = await request.formData();

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Unsupported mode" }, { status: 422 });
  }

  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

    let loginResponse = await signInUser(authData.email, authData.password);
    console.log('2 hf')
    startSession(loginResponse.user);


  // const response = await fetch("http://localhost:8080/" + mode, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(authData),
  // });

  // console.log(response);
  // if (response.status === 422 || response.status === 401) {
  //   console.log("401");
  //   return response;
  // }

  // if (!response.ok) {
  //   throw json({ message: `Couldn't authenticate user.` }, { status: 500 });
  // }

  return redirect("/");
}
