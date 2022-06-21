import styled from 'styled-components';

export const Form = styled.form`
  padding: 3.2rem 2.4rem;
  background: white;
  border-radius: var(--border-radius);

  @media (${({ theme }) => theme.respondTo.desktop}) {
    padding: 3.2rem;
    width: 70%;
    max-width: 80rem;
    margin-top: -4.8rem;
  }

  @media (${({ theme }) => theme.respondTo.desktopXL}) {
    padding: 4.8rem 6.4rem;
  }
`;

export const FormFieldGroup = styled.div`
  display: flex;
  flex-direction: column;

  @media (${({ theme }) => theme.respondTo.tabletXL}) {
    align-items: flex-start;
    flex-direction: row;
    gap: 2.4rem;
  }

  @media (${({ theme }) => theme.respondTo.desktopXL}) {
    gap: 4.8rem;
  }
`;

export const FormField = styled.div`
  flex-grow: 1;
  margin-bottom: 2.4rem;
`;

export const Label = styled.p`
  display: block;
  margin-bottom: 0.8rem;
  font-weight: var(--font-weight-medium);
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 1.6rem 2.4rem;
  font-size: var(--font-size-base);
  border: 2px solid var(--color-gray-300);
  border-radius: 0.4rem;
  transition: var(--transition);

  &:hover {
    border-color: var(--color-gray-600);
  }

  &:focus {
    border-color: var(--color-black);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  max-width: 100%;
  padding: 1.6rem 2.4rem;
  font-size: var(--font-size-base);
  border: 2px solid var(--color-gray-300);
  border-radius: 0.4rem;
  transition: var(--transition);
`;

export const SubmitButton = styled.button`
  display: inline-block;
  padding: 1.2rem 2.4rem;
  color: white;
  font-weight: var(--font-weight-bold);
  border: 1px solid var(--color-primary-300);
  border-radius: 2.6rem;
  text-decoration: none;
  transition: all var(--transition);
  background: var(--color-primary-300);
  cursor: pointer;

  &:hover {
    color: white;
    background: var(--color-primary-500);
  }

  span {
    font-size: var(--font-size-base);
    color: inherit;
  }
`;

export const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  margin: 2.4rem 0 0;
  padding: 1.2rem 1.6rem;
  color: #2f9089;
  background: #e6fffa;
  font-weight: var(--font-weight-medium);
  border-left: 4px solid #2f9089;
  border-radius: 0.4rem;

  svg {
    width: 2rem;
    height: 2rem;
    margin-right: 1.2rem;
  }
`;
