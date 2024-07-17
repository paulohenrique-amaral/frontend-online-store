import * as React from 'react';
import { useState, useEffect, useCallback, useContext } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { Grid, Container, Box, Typography, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Context from '../../context/Context';
import ModalFormChild from '../ModalFormChild/ModalFormChild';
import { style, FormStyled, CssTextField } from './FormCheckoutAdressStyled';
import { FormCheckoutProps } from '../../types/apiTypes';

const schemaForm = z.object({
  adress: z.object({
    zipCode: z.string().min(8, 'Por favor, insira um CEP válido'),
    street: z.string().min(1, 'Por favor, insira um endereço válido'),
    number: z.string().min(1, 'Por favor, insira um número válido'),
    district: z.string().min(1, 'Por favor, insira um bairro válido'),
    complement: z.string(),
    city: z.string().min(1, 'Por favor, insira uma cidade válida'),
    state: z.string().min(1, 'Por favor, insira um estado válido'),
  }),
});

type FormValues = z.infer<typeof schemaForm>;

type AdressType = {
  logradouro: string,
  bairro: string,
  uf: string,
  localidade: string,
};

function FormCheckoutAdress() {
  const [isFocused, setIsFocused] = useState(false);

  const { personData, setPersonData, setEtapaAtual } = useContext(Context);

  const { register, handleSubmit, formState, watch, setValue } = useForm<FormValues>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaForm),
    defaultValues: {
      adress: {
        zipCode: '',
        street: '',
        number: '',
        district: '',
        complement: '',
        city: '',
        state: '',
      },
    },
  });

  const { errors, isSubmitting, isValid } = formState;

  const cepField = 'adress.zipCode';
  const logradouroField = 'adress.street';
  const bairroField = 'adress.district';
  const ufField = 'adress.state';
  const localidadeField = 'adress.city';

  const zipcode = watch(cepField);
  const logradouro = watch(logradouroField);
  const bairro = watch(bairroField);
  const uf = watch(ufField);
  const localidade = watch(localidadeField);

  const handleSubmitForm = (data: FormValues) => {
    if (isValid) {
      setEtapaAtual(3);
      const updatedData = {
        ...personData,
        adress: data.adress,
      };
      setPersonData(updatedData);
      setPersonData(updatedData);
      // console.log(data);
    }
  };

  const handleSetData = useCallback((data: AdressType) => {
    setValue(logradouroField, data.logradouro);
    setValue(bairroField, data.bairro);
    setValue(ufField, data.localidade);
    setValue(localidadeField, data.uf);
  }, [setValue]);

  const handleFetchAdress = useCallback(async (zipcodeAdress: string) => {
    const data = await fetch(`https://viacep.com.br/ws/${zipcodeAdress}/json/`);
    const response = await data.json();

    // if (response.erro) {
    //   setError('CEP inválido');
    //   return;
    // }

    handleSetData(response);
  }, [handleSetData]);

  useEffect(() => {
    if (zipcode.length === 8) {
      handleFetchAdress(zipcode);
    }
  }, [handleFetchAdress, zipcode]);

  console.log(personData);

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
