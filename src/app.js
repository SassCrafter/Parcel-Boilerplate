import Header from './components/Header';
import User from './components/User';
import './sass/style.scss';

const app = async () => {
	document.getElementById('header').innerHTML = Header();
	document.getElementById('user').innerHTML = await User();
}

app();
