import { useState } from "react";
import { signUp } from "../api/login";
import Field from "../components/ui/Field";
import { useNavigate } from "react-router";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border rounded-2xl bg-amber-950 border-amber-800 p-20">
        <form
          className="flex flex-col items-center w-full gap-2"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = new FormData(e.currentTarget);
            const email = form.get("email") as string;
            const password = form.get("password") as string;
            const { data, error } = await signUp(email, password, isLogin);
            if (error) {
              console.log(error.message);
              return;
            }
            console.log(data.user);
            navigate("/");
          }}
        >
          <p className="text-6xl mb-10">Login</p>
          <Field type="email" name="email" />
          <Field type="password" name="password" />
          <Field type="submit" />
          <span></span>
          <button
            className="my-border bg-primary w-full py-2"
            onClick={() => {
              setIsLogin(!isLogin);
            }}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
