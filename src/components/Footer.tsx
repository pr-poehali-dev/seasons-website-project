
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">О проекте</h3>
            <p className="opacity-80">
              Этот сайт посвящен временам года и природным явлениям, которые происходят в течение каждого сезона.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="opacity-80 hover:opacity-100 transition-opacity">Главная</Link></li>
              <li><Link to="/winter" className="opacity-80 hover:opacity-100 transition-opacity">Зима</Link></li>
              <li><Link to="/spring" className="opacity-80 hover:opacity-100 transition-opacity">Весна</Link></li>
              <li><Link to="/summer" className="opacity-80 hover:opacity-100 transition-opacity">Лето</Link></li>
              <li><Link to="/autumn" className="opacity-80 hover:opacity-100 transition-opacity">Осень</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Контакты</h3>
            <p className="opacity-80 mb-2">Электронная почта: info@seasons.ru</p>
            <p className="opacity-80">Телефон: +7 (XXX) XXX-XX-XX</p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center opacity-70">
          <p>© 2023 Времена года. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
