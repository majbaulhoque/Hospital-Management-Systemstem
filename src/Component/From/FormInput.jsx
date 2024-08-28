/* eslint-disable react/prop-types */


import { Form } from 'react-bootstrap';
import { useController } from 'react-hook-form';

const FormInput = ({ name, control, label, type = 'text', placeholder, rules = {}, as = 'input', children, defaultValue='' }) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue
  });

  return (
    <Form.Group controlId={name} className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        {...field}
        type={type}
        placeholder={placeholder}
        as={as}
        isInvalid={!!error}
      >
        {children}
      </Form.Control>
      <Form.Control.Feedback type="invalid">
        {error?.message}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default FormInput;
