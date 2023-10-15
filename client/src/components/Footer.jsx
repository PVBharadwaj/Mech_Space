import './CSS/Footer.css' 
// import * as Icons from 'react-bootstrap-icons';
// import { Link } from 'react-router-dom';

function Footer(){
    const currentyear = new Date().getFullYear();
    return (
        <footer>
            <h4>Copyright © {currentyear}</h4>
        </footer>
    )
}

export default Footer