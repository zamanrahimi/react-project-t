import { Link } from 'react-router-dom';
export const Navbar = () =>{

        return (
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/hello'>Hello</Link>
            </nav>
        );

}