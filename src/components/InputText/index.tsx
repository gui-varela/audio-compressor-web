import { Container } from './styles';

interface InputTextProps {
  type: 'text' | 'textarea' | 'number'
  label: string
  placeholder: string
}

export function InputText({ type, label, placeholder }: InputTextProps) {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      {
        type === 'textarea'
        ? <textarea placeholder={placeholder} name={label} />
        : <input placeholder={placeholder} type={type} name={label} />
      }
    </Container>
  );
}