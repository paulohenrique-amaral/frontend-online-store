import { useContext } from 'react';
import { useForm, Controller, set } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Context from '../context/Context';
import { schemaFormCreditCard, FormValuesCreditCard } from '../schema/schema';

function useFormCreditCard() {
  const { personData, setPersonData, setEtapaAtual } = useContext(Context);

  const { control, handleSubmit, formState: { errors } } = useForm<FormValuesCreditCard>({
    resolver: zodResolver(schemaFormCreditCard),
    defaultValues: {
      cardNumber: '',
      expiryDate: '',
      cvc: '',
      cardHolderName: '',
    },
  });

  const onSubmit = (data: FormValuesCreditCard) => {
    const updatedData = {
      ...personData,
      payment: data,
    };
    setPersonData(updatedData);
    setEtapaAtual(4);
  };

  return { control, handleSubmit, errors, onSubmit };
}

export default useFormCreditCard;
