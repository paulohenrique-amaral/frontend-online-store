import { useState, useEffect } from 'react';
// eslint-disable-next-line
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Box } from '@mui/material';
import { CategoryType, ProductType } from '../../types/apiTypes';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import OffersCardProducts from '../OffersCardProducts/OffersCardProducts';
import Loading from '../Loading/Loading';
import './styles.css';

// eslint-disable-next-line
import 'swiper/css';
// eslint-disable-next-line
import 'swiper/css/pagination';

type OffersGridProps = {
  category: CategoryType;
};

function OffersGrid({ category }: OffersGridProps) {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const fetchAndSetProduct = async () => {
      const categories = await getProductsFromCategoryAndQuery(category.id, null);
      const shuffledCategories = categories.sort(() => Math.random() - 0.5);
      const selectedCategories = shuffledCategories.slice(0, 5);
      setProducts(selectedCategories);
    };
    fetchAndSetProduct();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  console.log(products);

  return (
    loading ? (
      <Box
        sx={ {
          margin: '4rem',
        } }
      >
        <Loading />
      </Box>
    ) : (
      <Swiper
        slidesPerView={ 1 }
        spaceBetween={ 10 }
        pagination={ {
          clickable: true,
        } }
        breakpoints={ {
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        } }
        modules={ [Pagination] }
        className="mySwiper custom-swiper"
      >
        {products.map((product) => (
          <SwiperSlide key={ product.id }>
            <OffersCardProducts product={ product } />
          </SwiperSlide>
        ))}
      </Swiper>
    )
  );
}

export default OffersGrid;
