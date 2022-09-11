import { motion } from "framer-motion";
import styled from "styled-components";
import { THEME } from "../constant/colors";

interface IAlertProps {
  close(): void;
  onClose?: Function;
  twoButton?: boolean;
  children: React.ReactNode;
  buttonText: string;
}

export function Alert({
  close,
  buttonText,
  twoButton,
  children,
  onClose,
}: IAlertProps) {
  const handleClick = () => {
    onClose && onClose();
    close();
  };
  const handleCancle = () => close();

  return (
    <AlertCard
      initial={{ opacity: 0, y: 100, scale: 0.7 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 100, scale: 0.7 }}
    >
      {children}
      <ButtonContainer>
        {twoButton && <button onClick={handleCancle}>취소</button>}
        <button onClick={handleClick}>{buttonText}</button>
      </ButtonContainer>
    </AlertCard>
  );
}

const AlertCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  gap: 2rem;
  button {
    background: ${THEME.darker};
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 9999px;
    font-weight: 700;
    width: 100%;
  }
`;
