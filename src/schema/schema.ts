import { z } from 'zod';

export const schemaFormAdress = z.object({
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
export type FormValuesAdress = z.infer<typeof schemaFormAdress>;

export const schemaFormPerson = z.object({
  person: z.object({
    name: z.string().min(3, 'Por favor, insira um nome válido'),
    cpf: z.string().min(11, 'Por favor, insira um CPF válido'),
    date: z.string().min(6, 'Por favor, insira uma data válida'),
    email: z.string().min(1, 'Por favor, insira um email válido'),
    telefone: z.string().min(11, 'Por favor, insira um telefone válido'),
  }),
});
export type FormValuesPerson = z.infer<typeof schemaFormPerson>;

export const schemaFormCreditCard = z.object({
  cardNumber: z.string().min(1, 'Card number is required'),
  expiryDate: z.string().min(1, 'Expiry date is required'),
  cvc: z.string().min(1, 'CVC is required'),
  cardHolderName: z.string().min(1, 'Card holder name is required'),
});
export type FormValuesCreditCard = z.infer<typeof schemaFormCreditCard>;

export const schemaFormEvaluation = z.object({
  email: z.string().email({ message: 'Por favor, insira um email válido' }),
  evaluation: z.string().min(1, 'Por favor, insira uma avaliação'),
  rating: z.number().min(1, 'Por favor, selecione uma nota'),
});
export type FormValuesEvaluation = z.infer<typeof schemaFormEvaluation>;
