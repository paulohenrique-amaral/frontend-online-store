import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Context from '../../context/Context';
import { getProductById } from '../../services/api';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import Loading from '../../components/Loading/Loading';

const initialformRating = {
  email: '',
  textarea: '',
};

function Details() {
  const { productId } = useParams<string>();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedStar, setSelectedStar] = useState<number>();
  const [formRating, setFormRating] = useState<ProductRatingType>(initialformRating);
  const [ratingError, setRatingError] = useState('');

  const { handleAddToCart, cartSize } = useContext(Context);

  useEffect(() => {
    if (productId) {
      getProductById(productId)
        .then((data) => {
          setProduct(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Failed to fetch product by ID:', error);
        });
    }
  }, [productId]);

  const validateEmail = () => {
    const emailOk = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailOk.test(formRating.email);
  };

  const handleChange = (event:
  React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormRating({
      ...formRating,
      [name]: value,
    });
    setRatingError('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateEmail()
      || selectedStar === undefined) {
      setRatingError('Campos inválidos');
      return;
    }
    const newReview = {
      email: formRating.email,
      text: formRating.textarea,
      rating: selectedStar,
    };
    if (productId) {
      const existingReviews = JSON.parse(localStorage.getItem(productId) || '[]');
      existingReviews.push(newReview);
      localStorage.setItem(productId, JSON.stringify(existingReviews));
    }
    setFormRating(initialformRating);
    setSelectedStar(undefined);
    setRatingError('');
  };

  if (isLoading) return <Loading />;

  return (
    <div>
      <h2>{product?.title}</h2>
      <img
        src={ product?.thumbnail }
        alt="Produto"
      />
      <p>{`R$ ${product?.price}`}</p>
      <button
        type="button"
        onClick={ () => handleAddToCart(product) }
      >
        Adicionar ao carrinho
      </button>
      <ShoppingCart />
      <div>
        <h2>Avaliações</h2>
        <form
          onSubmit={ handleSubmit }
        >
          <label htmlFor="product-detail-email">
            email
            <input
              id="product-detail-email"
              data-testid="product-detail-email"
              name="email"
              type="text"
              value={ formRating.email }
              onChange={ handleChange }
              placeholder="Email"
            />
          </label>
          {/* <div>
            {starItem.slice(1).map((index) => (
              <StarRating
                index={ index }
                onClick={ () => onClickStar(index) }
                key={ `star_${index}` }
                isActive={ index <= (selectedStar || 0) }
              />
            ))}
          </div> */}
          <label htmlFor="product-detail-evaluation">
            avaliação
            <textarea
              id="product-detail-evaluation"
              name="textarea"
              value={ formRating.textarea }
              onChange={ handleChange }
              cols={ 30 }
              rows={ 10 }
            />
          </label>
          <button
            data-testid="submit-review-btn"
            type="submit"
          >
            Avaliar
          </button>
        </form>
        {/* {ratingError && <p>{ ratingError }</p>} */}
        {/* {renderReviews()} */}
      </div>
    </div>
  );
}

export default Details;
