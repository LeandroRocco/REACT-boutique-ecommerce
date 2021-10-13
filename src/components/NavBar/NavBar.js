import logo from '../../assets/logo.svg';
import CartWidget from '../CartWidget/CartWidget';
import { ItemsMenu } from './ItemsMenu';
import './NavBar.css';

export const NavBar = () => {
    return (
        <nav className="NavItems">
            <div className="NavLogo"></div>
                <img src={logo} className="NavLogo" alt="logo"/>
            <ul className="NavMenu">
                {ItemsMenu.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.class} href={item.url}>{item.titulo}</a>
                        </li>
                    )
                })}
            </ul>
            <div className="Icono">
                <CartWidget />
            </div>
        </nav>
    )
}