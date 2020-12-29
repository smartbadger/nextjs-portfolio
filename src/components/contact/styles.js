import styled, { css } from "styled-components";
import { Card, Text, Heading } from "atoms/ui/elements";

const InputStyles = css`
  border: none;
  border-bottom: 1px solid gray;
  padding: 0.5rem 0;
`;
export const Label = styled.label``;
export const Input = styled.input`
  ${InputStyles}
`;
export const FormField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${(props) => (props.inputType == "textarea" ? "grid-column: 1/-1;" : "")}
`;

export const ContactCard = styled(Card)`
  background: ${(props) => props.theme.colors.white};
`;
export const Title = styled(Heading)`
  margin-bottom: 2rem;
`;
export const Subtitle = styled(Text)`
  text-align: center;
`;
export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
  margin: 1rem auto;
`;

export const TextA = styled.textarea`
  ${InputStyles}
`;
