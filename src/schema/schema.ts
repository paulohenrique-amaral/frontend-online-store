import { z } from 'zod';

const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
const telefoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;

const cardNumberRegex = /^\d{4} \d{4} \d{4} \d{4}$/;
const expiryDateRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
const cvcRegex = /^\d{3}$/;
const cardHolderNameRegex = /^[a-zA-Z\s]+$/;

export const schemaFormPerson = z.object({
  person: z.object({
    name: z.string().min(3, 'Por favor, insira um nome válido'),
    cpf: z.string().regex(cpfRegex, 'Por favor, insira um CPF válido'),
    date: z.string().regex(dateRegex, 'Por favor, insira uma data válida'),
    email: z.string().email('Por favor, insira um email válido'),
    telefone: z.string().regex(telefoneRegex, 'Por favor, insira um telefone válido'),
  }),
});
export type FormValuesPerson = z.infer<typeof schemaFormPerson>;

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

export const schemaFormCreditCard = z.object({
  cardNumber: z.string()
    .regex(
      cardNumberRegex,
      'Por favor, insira um número de cartão válido com 16 dígitos',
    ),
  expiryDate: z.string().regex(
    expiryDateRegex,
    'Por favor, insira uma data de validade no formato MM/AA ou MM/AAAA',
  ),
  cvc: z.string().length(3, 'Por favor, insira um código válido com 3 dígitos')
    .regex(cvcRegex, 'Por favor, insira um código válido com 3 dígitos numéricos'),
  cardHolderName: z.string()
    .regex(
      cardHolderNameRegex,
      'Por favor, insira um nome válido contendo apenas letras',
    ),
});
export type FormValuesCreditCard = z.infer<typeof schemaFormCreditCard>;

export const schemaFormEvaluation = z.object({
  email: z.string().email({ message: 'Por favor, insira um email válido' }),
  evaluation: z.string().min(1, 'Por favor, insira uma avaliação'),
  rating: z.number().min(1, 'Por favor, selecione uma nota'),
});
export type FormValuesEvaluation = z.infer<typeof schemaFormEvaluation>;
