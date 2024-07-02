import { useState } from 'react';
import { ProductWithQuantityType, FormDataType } from '../../types/apiTypes';

type CartProps = {
  cart: ProductWithQuantityType[],
  clearCart: () => void,
};

const initialFormData = {
  name: '',
  cpf: '',
  email: '',
  telefone: '',
  cep: '',
  endereco: '',
};

function Checkout({ cart, clearCart }: CartProps) {
  const [formData, setFormdata] = useState<FormDataType>(initialFormData);
  const [error, setError] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name
      || formData.cpf === ''
      || formData.email === ''
      || formData.telefone === ''
      || formData.cep === ''
      || formData.endereco === '') {
      setError('Campos inválidos');
      return;
    }
    if (!selectedPayment) {
      setError('Campos inválidos');
      return;
    }
    setError('');
    window.location.href = '/';
    clearCart();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormdata({
      ...formData,
      [name]: value,
    });
    setError('');
  };

  return (
    <div>
      <h2>Resumo Chekout</h2>
      <div>
        { cart.map((product) => (
          <div key={ product.id }>
            <img
              src={ product.thumbnail }
              width="100px"
              alt={ `Imagem de ${product.title}` }
            />
            <p>{ product.title }</p>
            <p>{ `R$ ${product.price}` }</p>
            <h3>TOTAL</h3>
          </div>
        ))}
      </div>
      <p>Informações do Comprador</p>
      <form
        onSubmit={ handleSubmit }
      >
        <label>
          <input
            data-testid="checkout-fullname"
            name="name"
            type="text"
            placeholder="Nome Completo"
            value={ formData.name }
            onChange={ handleChange }
          />
        </label>
        <label>
          <input
            data-testid="checkout-cpf"
            name="cpf"
            type="text"
            placeholder="CPF"
            value={ formData.cpf }
            onChange={ handleChange }
          />
        </label>
        <label>
          <input
            data-testid="checkout-email"
            name="email"
            type="text"
            placeholder="Email"
            value={ formData.email }
            onChange={ handleChange }
          />
        </label>
        <label>
          <input
            data-testid="checkout-phone"
            name="telefone"
            type="text"
            placeholder="Telefone"
            value={ formData.telefone }
            onChange={ handleChange }
          />
        </label>
        <label>
          <input
            data-testid="checkout-cep"
            name="cep"
            type="text"
            placeholder="CEP"
            value={ formData.cep }
            onChange={ handleChange }
          />
        </label>
        <label>
          <input
            data-testid="checkout-address"
            name="endereco"
            type="text"
            placeholder="Endereço"
            value={ formData.endereco }
            onChange={ handleChange }
          />
        </label>
        <div>
          <p>Método de Pagamento</p>
          <label>
            Boleto
            <input
              data-testid="ticket-payment"
              name="payment"
              type="radio"
              value="boleto"
              checked={ selectedPayment === 'boleto' }
              onChange={ () => setSelectedPayment('boleto') }
            />
          </label>
          <label>
            Visa
            <input
              data-testid="visa-payment"
              name="payment"
              type="radio"
              value="visa"
              checked={ selectedPayment === 'visa' }
              onChange={ () => setSelectedPayment('visa') }
            />
          </label>
          <label>
            MasterCard
            <input
              data-testid="master-payment"
              name="payment"
              type="radio"
              value="mastercard"
              checked={ selectedPayment === 'mastercard' }
              onChange={ () => setSelectedPayment('mastercard') }
            />
          </label>
          <label>
            Elo
            <input
              data-testid="elo-payment"
              name="payment"
              type="radio"
              value="elo"
              checked={ selectedPayment === 'elo' }
              onChange={ () => setSelectedPayment('elo') }
            />
          </label>
        </div>
        <button
          data-testid="checkout-btn"
          type="submit"
        >
          Comprar
        </button>
      </form>
      {error && <p data-testid="error-msg">{ error }</p>}
    </div>
  );
}

export default Checkout;
