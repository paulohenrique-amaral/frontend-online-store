export const scrollToSection = (page: string) => {
  if (page) {
    const section = document.getElementById(page);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
