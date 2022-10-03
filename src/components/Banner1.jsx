import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import Profile from '../assets/img/profile.jpg'
import instagram from '../assets/img/instagram.png'
import github from '../assets/img/github.png'
import linkedin from '../assets/img/linkedin.png'

const Banner1 = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = [ "Desarrollador Front-End" ]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)
        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return (
        <section id="home" className="bannerBg">
            <Container>
                <div className="bannerFirstRow">
                    <p>Bienvenido a mi portfolio</p>
                    <h1>{`Hola, soy Lucas `}<span className='wrap'><br />{text}</span></h1>
                    <div className='FRSocial'>
                        <a rel="noopener noreferrer" href='https://www.instagram.com/luccasgallo/'><img className='socialImg' src={instagram} alt='footerimg' /></a>
                        <a rel="noopener noreferrer" href='https://github.com/LucasGallo182/'><img className='socialImg' src={github} alt='footerimg' /></a>
                        <a rel="noopener noreferrer" href='https://www.linkedin.com/in/lucas-gallo-ldg/'><img className='socialImg' src={linkedin} alt='footerimg' /></a>
                    </div>
                </div>
                <div className="bannerSecondRow">
                    <img src={Profile} alt="profile" />
                </div>
            </Container>
        </section>
    )
}

export default Banner1