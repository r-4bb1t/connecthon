import React, { useCallback, useEffect } from "react";
import axios from "axios";
const Login = () => {
  const fetchToken = useCallback(async () => {
    try {
      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_API_HOST}/user/sign-in`,
        {
          id: "child",
          password: "child",
        }
      );
      console.log(result.data.data);
      localStorage.setItem("token", result.data.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchToken();
  }, []);

  return <div>L</div>;
};

export default Login;
