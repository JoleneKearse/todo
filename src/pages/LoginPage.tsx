import LoginButton from "../components/LoginButton";

const LoginPage = () => {
  return (
    <main className="flex flex-col gap-20">
      <p className="text-gray-50 text-lg">
        <span className="font-extrabold italic text-gray-300">
          Sign / login
        </span>{" "}
        with your{" "}
        <span className="font-extrabold italic text-gray-300">deets</span> to
        track your{" "}
        <span className="font-extrabold italic text-gray-300">feats</span>!
      </p>
      <LoginButton /> 
    </main>
  );
};

export default LoginPage;
