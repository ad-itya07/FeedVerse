import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/SupabaseClient";
import { useCreateUserMutation } from "../redux/apis/user/userApi";

const Login = () => {
  const [createUser] = useCreateUserMutation();
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event, session) => {
    const supabaseId = session?.user?.id;
    const email = session?.user?.email;
    const name = session?.user?.user_metadata?.full_name;

    if (event === "SIGNED_IN") {
      try {
        const response = await createUser({ supabaseId, email, name }).unwrap();
        console.log(response);
      } catch (err) {
        console.log(err);
      }
      navigate("/");
    }
  });

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="p-8 bg-gray-800 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-white mb-6">
          Welcome to Feedverse
        </h1>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={["google"]}
          // redirectTo={window.location.href}
        />
        <p className="mt-4 text-sm text-gray-400 text-center">
          By signing in, you agree to our{" "}
          <a href="/terms" className="text-blue-400 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-blue-400 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
