import * as React from 'react';
import { useState, useEffect } from 'react';
import { Typography, TextField } from '@mui/material';
// import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
// import ModalFormChild from '../ModalFormChild/ModalFormChild';
import { FormStyled, CssTextField } from './FormCheckoutAdressStyled';
import useFormAdress from '../../hook/useFormAdress';

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
    if (zipcode.length === 8) {
      handleFetchAdress(zipcode);
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
      <TextField
        id="city"
        { ...register('adress.city') }
        InputLabelProps={ {
          shrink: !!localidade || isFocused,
        } }
        type="text"
        placeholder="Cidade"
        label="Cidade"
        sx={ { ...CssTextField } }
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
        sx={ { ...CssTextField } }
        error={ !!errors.adress?.state }
        helperText={ errors.adress?.state?.message }
        onFocus={ () => setIsFocused(true) }
        onBlur={ () => setIsFocused(false) }
      />
      <Button type="submit">Avançar</Button>
    </FormStyled>
  );
}

export default FormCheckoutAdress;
