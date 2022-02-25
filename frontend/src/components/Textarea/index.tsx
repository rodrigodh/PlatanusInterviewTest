import React, {
  TextareaHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { FiAlertCircle } from "react-icons/fi";
import { useField } from "@unform/core";

import { Container, Error } from "./styles";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  containerStyle?: React.CSSProperties;
  label?: string;
}

export function Textarea({
  name,
  label,
  containerStyle,
  ...rest
}: TextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  const handleTextareaFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleTextareaBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!textareaRef.current);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef.current,
      path: "value",
    });
  }, [registerField, fieldName]);

  return (
    <Container
      style={containerStyle}
      isErrored={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
    >
      {label && <strong>{label}</strong>}

      <textarea
        onFocus={handleTextareaFocus}
        onBlur={handleTextareaBlur}
        defaultValue={defaultValue}
        ref={textareaRef}
        {...rest}
      />

      {error && (
        <Error title={error}>
          <FiAlertCircle color="var(--error)" size={20} />
        </Error>
      )}
    </Container>
  );
}

Textarea.defaultProps = {
  containerStyle: undefined,
  label: undefined,
};
