import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Context from '../context/Context';
import { schemaFormPerson, FormValuesPerson } from '../schema/schema';

function useFormPerson() {
  const { personData, setPersonData, setEtapaAtual } = useContext(Context);

  const { register, handleSubmit, formState } = useForm<FormValuesPerson>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaFormPerson),
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

  const { errors, isValid } = formState;

  const handleSubmitForm = (data: FormValuesPerson) => {
    if (isValid) {
      setEtapaAtual(2);
    }
    const updatedData = {
      ...personData,
      person: data.person,
    };
    setPersonData(updatedData);
  };

  return {
    register,
    handleSubmit,
    errors,
    isValid,
    handleSubmitForm,
  };
}

export default useFormPerson;
