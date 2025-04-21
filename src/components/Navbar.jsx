import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Лента</Link>
      <Link to="/upload">Загрузить</Link>
      <Link to="/profile/123">Профиль</Link>
    </nav>
  );
};

export default Navbar;
