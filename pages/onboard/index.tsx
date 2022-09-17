import React, { useState } from "react";
import styled from "styled-components";
import {
  SleepingCharacter,
  StepActive,
  StepInactive,
} from "../../components/icons";
import { First } from "../../components/onboard/First";
import { Second } from "../../components/onboard/Second";
import Signup from "../../components/onboard/Signup";
import { SelectType } from "../../components/onboard/SelectType";
import { useAlertContext } from "../../hooks/useAlertContext";
import { useRouter } from "next/router";

const Onboard = () => {
  const [page, setPage] = useState(0);
  const [name, setName] = useState("");
  const [userType, setUserType] = useState(""); //child || parent
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const router = useRouter();

  if (page == -1) router.push("/");

  if (page == 0) {
    return (
      <SelectType
        userType={userType}
        setUserType={setUserType}
        setPage={setPage}
      />
    );
  }
  if (page == 1)
    return (
      <Signup
        id={id}
        setId={setId}
        setPw={setPw}
        pw={pw}
        setPage={setPage}
        userType={userType}
      />
    );
  if (page == 2)
    return <First name={name} setName={setName} setPage={setPage} />;
  if (page == 3)
    return <Second setPage={setPage} name={name} id={id} pw={pw} />;
};

export default Onboard;
