import { ErrorContainer, ErrorMessage, ErrorTitle } from "./Error.styles";
import { ErrorProps } from "./Error.types";

export const Error = ({ message }: ErrorProps) => {
  return (
    <ErrorContainer>
      <ErrorTitle>&gt;ERROR: CITADEL MAINFRAME CONNECTION FAILED</ErrorTitle>
      {message && <ErrorMessage>{message}</ErrorMessage>}
    </ErrorContainer>
  );
};
