import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Box, Typography, styled, TextField, Button } from '@mui/material';
import Rating from '@mui/material/Rating';
import Context from '../../context/Context';
import theme from '../../themes/ligth';
import { EvaluationListType } from '../../types/apiTypes';

const FormStyled = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const CssTextField = {
  margin: '20px 5px',
  '& .MuiInputLabel-root': {
    color: '#1d1d1e',
  },
  '& label.Mui-focused': {
    color: theme.palette.primary.main,
  },
};

const schema = z.object({
  email: z.string().email({ message: 'Por favor, insira um email válido' }),
  evaluation: z.string().min(1, 'Por favor, insira uma avaliação'),
  rating: z.number().min(1, 'Por favor, selecione uma nota'),
});

type FormValues = z.infer<typeof schema>;

function FormEvaluation() {
  const { productId } = useParams<string>();
  const productIdAsserted = productId!;

  const { productReviews, setProductReviews } = useContext(Context);

  const {
    register, handleSubmit, reset, control, formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      evaluation: '',
      rating: 1,
    },
  });

  const onSubmit = async (data: EvaluationListType) => {
    try {
      const updateProductReviews = [...productReviews];
      updateProductReviews.push({ ...data, id: productIdAsserted });
      setProductReviews(updateProductReviews);
      await console.log(data);
      reset();
    } catch (error) {
      console.error('Erro ao submeter o formulário', error);
    }
  };

  console.log(productReviews);

  return (
    <Box>
      <h2>Avaliações</h2>
      <FormStyled
        onSubmit={ handleSubmit(onSubmit) }
      >
        <TextField
          id="product-detail-email"
          label="Email"
                // fullWidth
          margin="normal"
          { ...register('email') }
          sx={ { ...CssTextField } }
          error={ !!errors.email }
          helperText={ errors.email?.message }
        />
        <TextField
          id="product-detail-evaluation"
          label="Avaliação"
          fullWidth
          multiline
          rows={ 4 }
          margin="normal"
          { ...register('evaluation') }
          sx={ { ...CssTextField } }
          error={ !!errors.evaluation }
          helperText={ errors.evaluation?.message }
        />
        <Controller
          name="rating"
          control={ control }
          rules={ { required: 'Nota obrigatória' } }
          render={ ({ field: { onChange, value }, fieldState: { error } }) => (
            <Box sx={ { '& > legend': { mt: 2 } } }>
              <Rating
                name="simple-controlled"
                value={ value }
                onChange={ (event, newValue) => {
                  onChange(newValue);
                } }
                sx={ { margin: '20px 0px' } }
              />
              {error && <p style={ { color: 'red' } }>{error.message}</p>}
              {' '}
            </Box>
          ) }
        />
        <Button type="submit" variant="contained" color="primary">
          Avaliar
        </Button>
      </FormStyled>
    </Box>
  );
}

export default FormEvaluation;
