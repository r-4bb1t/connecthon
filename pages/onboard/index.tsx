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
import { Third } from "../../components/onboard/Third";

const Onboard = () => {
  const [page, setPage] = useState(0);
  const [name, setName] = useState("");
  const [userType, setUserType] = useState(""); //child || parent
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  if (page == 0) {
    return (
      <Signup id={id} setId={setId} setPw={setPw} pw={pw} setPage={setPage} />
    );
  }
  if (page == 1)
    return <First name={name} setName={setName} setPage={setPage} />;
  if (page == 2) return <Second setPage={setPage} name={name} />;
  if (page == 3)
    return (
      <Third userType={userType} setUserType={setUserType} setPage={setPage} />
    );
};

export default Onboard;
