
const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© 2023 Времена года. Все права защищены.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-200 transition-colors">О проекте</a>
            <a href="#" className="hover:text-blue-200 transition-colors">Контакты</a>
            <a href="#" className="hover:text-blue-200 transition-colors">Правила</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
