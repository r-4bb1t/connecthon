import { createContext, FC, ReactNode, useState } from "react";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useAlertContext } from "../hooks/useAlertContext";

export const LoadingContext = createContext<{ load: Function }>({
  load: () => {},
});

const LoadingContextProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const { closeAll } = useAlertContext();

  const load = () => {
    closeAll();
    setLoading(true);
  };

  return (
    <LoadingContext.Provider
      value={{
        load,
      }}
    >
      <AnimatePresence>
        {loading && (
          <LoadingContainer>
            <img src="/assets/loading.png" />
          </LoadingContainer>
        )}
      </AnimatePresence>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingContextProvider;

const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  z-index: 20;
  img {
    @keyframes hithere {
      30% {
        transform: scale(1.2);
      }
      40%,
      60% {
        transform: rotate(-20deg) scale(1.2);
      }
      50% {
        transform: rotate(20deg) scale(1.2);
      }
      70% {
        transform: rotate(0deg) scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
    animation: hithere 1s ease infinite;

    width: 100px;
  }
`;
