import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Context from '../context/Context';
import { schemaFormEvaluation, FormValuesEvaluation } from '../schema/schema';
import { EvaluationListType } from '../types/apiTypes';

function useFormEvaluation(productId: string) {
  const { productReviews, setProductReviews } = useContext(Context);

  const {
    register, handleSubmit, reset, control, formState: { errors },
  } = useForm<FormValuesEvaluation>({
    resolver: zodResolver(schemaFormEvaluation),
    defaultValues: {
      email: '',
      evaluation: '',
      rating: 1,
    },
  });

  const onSubmit = async (data: EvaluationListType) => {
    try {
      const updateProductReviews = [...productReviews];
      updateProductReviews.push({ ...data, id: productId });
      setProductReviews(updateProductReviews);
      reset();
    } catch (error) {
      console.error('Erro ao submeter o formulário', error);
    }
  };

  return {
    register,
    handleSubmit,
    reset,
    control,
    errors,
    onSubmit,
  };
}

export default useFormEvaluation;
