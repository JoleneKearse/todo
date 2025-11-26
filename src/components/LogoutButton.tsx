import { useAuth0 } from "@auth0/auth0-react";

import { IoMdLogOut } from "react-icons/io";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      className="font-light hover:cursor-pointer hover:text-red-500 text-2xl"
    >
      <IoMdLogOut />
    </button>
  );
};

export default LogoutButton;
