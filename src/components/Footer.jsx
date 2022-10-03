import Logo from '../assets/img/logo.png'
import instagram from '../assets/img/instagram.png'
import github from '../assets/img/github.png'
import linkedin from '../assets/img/linkedin.png'
import { Container } from 'react-bootstrap'

const Footer = () => {
    return (
        <div className='bgFooter'>
            <div className='footerLogo'>
                <img className='logoFooter' src={Logo} alt="logo" />
            </div>
            <div className='footerSocial'>
                <a rel="noopener noreferrer" href='https://www.instagram.com/luccasgallo/'><img className='socialImg' src={instagram} alt='footerimg' /></a>
                <a rel="noopener noreferrer" href='https://github.com/LucasGallo182/'><img className='socialImg' src={github} alt='footerimg' /></a>
                <a rel="noopener noreferrer" href='https://www.linkedin.com/in/lucas-gallo-ldg/'><img className='socialImg' src={linkedin} alt='footerimg' /></a>
            </div>
        </div>
    )
}

export default Footer