import LoginButton from "../components/LoginButton";
import RegisterButton from "../components/RegisterButton";

const LoginPage = () => {
  return (
    <main className="flex flex-col gap-20">
      <p className="text-gray-50 text-lg">
        <span className="font-extrabold italic text-gray-300">
          Sign up / log in
        </span>{" "}
        with your{" "}
        <span className="font-extrabold italic text-gray-300">deets</span> to
        track your{" "}
        <span className="font-extrabold italic text-gray-300">feats</span>!
      </p>
      <div className="flex gap-12">
      <RegisterButton />
      <LoginButton /> 
      </div>
    </main>
  );
};

export default LoginPage;
