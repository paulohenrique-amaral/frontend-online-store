import { Typography, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { FormStyled, CssTextField } from './FormCheckoutPersonStyled';
import useFormPerson from '../../hook/useFormPerson';
import { TextMaskName } from './customInputs/TextMaskName';
import { TextMaskCPF } from './customInputs/TextMaskCPF';
import { TextMaskDate } from './customInputs/TextMaskDate';
import { TextMaskPhone } from './customInputs/TextMaskPhone';

function FormCheckoutPerson() {
  const { register, handleSubmit, errors, handleSubmitForm } = useFormPerson();

  return (
    <FormStyled
      onSubmit={ handleSubmit(handleSubmitForm) }
    >
      <Typography variant="h5">
        Informações do Comprador
      </Typography>
      <TextField
        id="name"
        { ...register('person.name') }
        type="text"
        placeholder="Nome Completo"
        label="Nome Completo"
        sx={ { ...CssTextField } }
        error={ !!errors.person?.name }
        helperText={ errors.person?.name?.message }
        InputProps={ {
          inputComponent: TextMaskName as any,
        } }
      />
      <TextField
        id="cpf"
        { ...register('person.cpf') }
        type="text"
        placeholder="CPF"
        label="CPF"
        sx={ { ...CssTextField } }
        error={ !!errors.person?.cpf }
        helperText={ errors.person?.cpf?.message }
        InputProps={ {
          inputComponent: TextMaskCPF as any,
        } }
      />
      <TextField
        id="date"
        { ...register('person.date') }
        type="text"
        placeholder="Data de Nascimento"
        label="Data de Nascimento"
        sx={ { ...CssTextField } }
        error={ !!errors.person?.date }
        helperText={ errors.person?.date?.message }
        InputProps={ {
          inputComponent: TextMaskDate as any,
        } }
      />
      <TextField
        id="email"
        { ...register('person.email') }
        type="text"
        placeholder="Email"
        label="Email"
        sx={ { ...CssTextField } }
        error={ !!errors.person?.email }
        helperText={ errors.person?.email?.message }
      />
      <TextField
        id="telefone"
        { ...register('person.telefone') }
        type="text"
        placeholder="Telefone"
        label="Telefone"
        sx={ { ...CssTextField } }
        error={ !!errors.person?.telefone }
        helperText={ errors.person?.telefone?.message }
        InputProps={ {
          inputComponent: TextMaskPhone as any,
        } }
      />
      <Button type="submit">Próximo</Button>
    </FormStyled>
  );
}

export default FormCheckoutPerson;
