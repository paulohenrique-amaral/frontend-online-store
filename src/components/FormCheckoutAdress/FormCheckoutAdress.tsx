import { useState, useEffect } from 'react';
import { Typography, TextField, Box } from '@mui/material';
import Button from '@mui/material/Button';
import { FormStyled, CssTextField } from './FormCheckoutAdressStyled';
import useFormAdress from '../../hook/useFormAdress';
import { TextMaskCEP } from './customInputs/TextMaskCEP';

function FormCheckoutAdress() {
  const [isFocused, setIsFocused] = useState(false);

  const {
    register,
    handleSubmit,
    handleFetchAdress,
    zipcode,
    handleSubmitForm,
    errors,
    logradouro,
    bairro,
    uf,
    localidade,
  } = useFormAdress();

  useEffect(() => {
    const cleanedZipcode = zipcode.replace(/\D/g, '');
    if (cleanedZipcode.length === 8) {
      handleFetchAdress(cleanedZipcode);
    }
  }, [handleFetchAdress, zipcode]);

  return (
    <FormStyled
      onSubmit={ handleSubmit(handleSubmitForm) }
    >
      <Typography variant="h5">
        Informações de Endereço
      </Typography>
      <TextField
        id="zipCode"
        { ...register('adress.zipCode') }
        type="text"
        placeholder="CEP"
        label="CEP"
        sx={ { ...CssTextField } }
        error={ !!errors.adress?.zipCode }
        helperText={ errors.adress?.zipCode?.message }
        InputProps={ {
          inputComponent: TextMaskCEP as any,
        } }
      />
      <TextField
        id="street"
        { ...register('adress.street') }
        InputLabelProps={ {
          shrink: !!logradouro || isFocused,
        } }
        type="text"
        placeholder="Logradouro"
        label="Logradouro"
        sx={ { ...CssTextField } }
        error={ !!errors.adress?.street }
        helperText={ errors.adress?.street?.message }
        onFocus={ () => setIsFocused(true) }
        onBlur={ () => setIsFocused(false) }
      />
      <TextField
        id="number"
        { ...register('adress.number') }
        type="text"
        placeholder="Número"
        label="Número"
        sx={ { ...CssTextField } }
        error={ !!errors.adress?.number }
        helperText={ errors.adress?.number?.message }
      />
      <TextField
        id="district"
        { ...register('adress.district') }
        InputLabelProps={ {
          shrink: !!bairro || isFocused,
        } }
        type="text"
        placeholder="Bairro"
        label="Bairro"
        sx={ { ...CssTextField } }
        error={ !!errors.adress?.district }
        helperText={ errors.adress?.district?.message }
        onFocus={ () => setIsFocused(true) }
        onBlur={ () => setIsFocused(false) }
      />
      <TextField
        id="complement"
        { ...register('adress.complement') }
        type="text"
        placeholder="Complemento"
        label="Complemento"
        sx={ { ...CssTextField } }
      />
      <Box
        sx={ {
          display: 'flex',
          justifyContent: 'space-between',
        } }
      >
        <TextField
          id="city"
          { ...register('adress.city') }
          InputLabelProps={ {
            shrink: !!localidade || isFocused,
          } }
          type="text"
          placeholder="Cidade"
          label="Cidade"
          sx={ { ...CssTextField, width: '50%' } }
          error={ !!errors.adress?.city }
          helperText={ errors.adress?.city?.message }
          onFocus={ () => setIsFocused(true) }
          onBlur={ () => setIsFocused(false) }
        />
        <TextField
          id="state"
          { ...register('adress.state') }
          InputLabelProps={ {
            shrink: !!uf || isFocused,
          } }
          type="text"
          placeholder="Estado"
          label="Estado"
          sx={ { ...CssTextField, width: '50%' } }
          error={ !!errors.adress?.state }
          helperText={ errors.adress?.state?.message }
          onFocus={ () => setIsFocused(true) }
          onBlur={ () => setIsFocused(false) }
        />
      </Box>
      <Button type="submit">Avançar</Button>
    </FormStyled>
  );
}

export default FormCheckoutAdress;
