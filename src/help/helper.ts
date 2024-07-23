export const scrollToSection = (page: string) => {
  if (page) {
    const section = document.getElementById(page);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

export const initialProductDetails = {
  id: '',
  title: '',
  thumbnail: '',
  price: 0,
  shipping: { free_shipping: false },
  warranty: '',
  pictures: [
    { url: '' },
  ],
  quantity: 0,
  available_quantity: 0,
};
