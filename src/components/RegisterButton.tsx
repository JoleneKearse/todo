import { useAuth0 } from "@auth0/auth0-react";

const RegisterButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() =>
        loginWithRedirect({
          authorizationParams: {
            screen_hint: "signup",
          },
        })
      }
      type="button"
      className="bg-linear-to-br from-sky-400 to-fuchsia-400 w-28 py-2 rounded-sm hover:from-fuchsia-400 hover:to-sky-400 focus:ring-3 focus:ring-amber-300 outline-none hover:text-gray-50"
    >
      Sign Up
    </button>
  );
};

export default RegisterButton;
