import { useParams } from 'react-router-dom';
import { Controller } from 'react-hook-form';
import { Box, TextField, Button } from '@mui/material';
import Rating from '@mui/material/Rating';
import { FormStyled, CssTextField } from './FormEvaluationStyled';
import useFormEvaluation from '../../hook/useFormEvaluation';

function FormEvaluation() {
  const { productId } = useParams<string>();
  const productIdAsserted = productId!;

  const {
    register, handleSubmit, control, errors, onSubmit,
  } = useFormEvaluation(productIdAsserted);

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
