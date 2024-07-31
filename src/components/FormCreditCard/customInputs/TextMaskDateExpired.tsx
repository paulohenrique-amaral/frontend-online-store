import * as React from 'react';
import { IMaskInput } from 'react-imask';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export const TextMaskDateExpired = React.forwardRef<HTMLInputElement, CustomProps>(
  (props, ref) => {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        { ...other }
        mask="00/00"
        inputRef={ ref }
        onAccept={ (value: any) => onChange({ target: { name: props.name, value } }) }
        overwrite
      />
    );
  },
);
