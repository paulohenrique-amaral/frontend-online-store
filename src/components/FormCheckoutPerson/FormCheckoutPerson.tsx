import { useState, useEffect, useCallback, useContext } from 'react';
import { Grid, Container, Box, Typography, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Context from '../../context/Context';
import { style, FormStyled, CssTextField } from './FormCheckoutPersonStyled';
import { FormCheckoutProps } from '../../types/apiTypes';

const schemaForm = z.object({
  person: z.object({
    name: z.string().min(3, 'Por favor, insira um nome válido'),
    cpf: z.string().min(11, 'Por favor, insira um CPF válido'),
    date: z.string().min(6, 'Por favor, insira uma data válida'),
    email: z.string().min(1, 'Por favor, insira um email válido'),
    telefone: z.string().min(11, 'Por favor, insira um telefone válido'),
  }),
});

type FormValues = z.infer<typeof schemaForm>;

function FormCheckoutPerson() {
  const { personData, setPersonData, setEtapaAtual } = useContext(Context);

  const { register, handleSubmit, formState, watch, setValue } = useForm<FormValues>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaForm),
    defaultValues: {
      person: {
        name: '',
        cpf: '',
        date: '',
        email: '',
        telefone: '',
      },
    },
  });

  const { errors, isSubmitting, isDirty, isValid } = formState;

  const handleSubmitForm = (data: FormValues) => {
    if (isValid) {
      setEtapaAtual(2);
    }
    const updatedData = {
      ...personData,
      person: data.person,
    };
    setPersonData(updatedData);
    // console.log(data);
  };

  console.log(personData);

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
      />
      <Button type="submit">Próximo</Button>
    </FormStyled>
  );
}

export default FormCheckoutPerson;
