import { useContext, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Context from '../context/Context';
import { schemaFormAdress, FormValuesAdress } from '../schema/schema';

type AdressType = {
  logradouro: string,
  bairro: string,
  uf: string,
  localidade: string,
};

function useFormAdress() {
  const { personData, setPersonData, setEtapaAtual } = useContext(Context);

  const {
    register, handleSubmit, formState, watch, setValue,
  } = useForm<FormValuesAdress>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaFormAdress),
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

  const handleSubmitForm = (data: FormValuesAdress) => {
    if (isValid) {
      setEtapaAtual(3);
      const updatedData = {
        ...personData,
        adress: data.adress,
      };
      setPersonData(updatedData);
      setPersonData(updatedData);
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

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    isValid,
    zipcode,
    logradouro,
    bairro,
    uf,
    localidade,
    handleFetchAdress,
    handleSubmitForm,
  };
}

export default useFormAdress;
