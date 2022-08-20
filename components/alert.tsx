import { motion } from "framer-motion";
import styled from "styled-components";

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
      initial={{ opacity: 0, y: 100, scale: 0.3 }}
      animate={{ opacity: 1, y: 50, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
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
`;

const ButtonContainer = styled.div`
  display: flex;
`;
