import { useSelector } from 'react-redux';
import './Header.css'
function Header() {
    const counter = useSelector((store) => { return store.cut.counter })

    return (
        <nav>
            <a href="logo">LOGO</a>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact ME({counter})</a></li>
            </ul>
        </nav>
    )
}

export default Header;
