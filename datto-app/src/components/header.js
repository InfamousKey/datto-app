import logo from '../images/logo.jpg';
import '../css/header.css';

const Header = () => {
	return (
		<header className="header">
			<img src={logo} className="logo" alt="logo" />
		</header>
	);
}

export default Header;
