import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Form = styled.form`
  padding: 3.2rem 2.4rem;
  background: white;
  border-radius: var(--border-radius);

  &.is-overlay {
    @media (${({ theme }) => theme.respondTo.desktop}) {
      text-align: center;
    }
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
    padding: 3.2rem;

    :not(.is-overlay) {
      margin-top: -4.8rem;
      width: 70%;
      max-width: 80rem;
    }
  }

  @media (${({ theme }) => theme.respondTo.desktopXL}) {
    padding: 4.8rem 6.4rem;
  }
`;

export const ContentWrapper = styled.p`
  margin-bottom: 3.2rem;
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
  text-align: left;
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
  display: inline-flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.2rem 2.4rem;
  color: white;
  font-size: var(--font-size-base);
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

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const Message = styled(motion.div)`
  display: flex;
  align-items: center;
  margin: 2.4rem 0 0;
  padding: 1.2rem 1.6rem;
  border-left: 4px solid;
  font-weight: var(--font-weight-medium);
  border-radius: 0.4rem;

  &.error {
    background: #fff5f5;
    border-color: #c53030;
    color: #c53030;
  }

  &.success {
    background: #e6fffa;
    color: #2f9089;
    border-color: #2f9089;
  }

  svg {
    width: 2rem;
    height: 2rem;
    margin-right: 1.2rem;
  }
`;
