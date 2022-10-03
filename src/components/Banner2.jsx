import React from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ReactIcon from '../assets/img/react.png'
import HTMLIcon from '../assets/img/html.png'
import CSSIcon from '../assets/img/css.png'
import SASSIcon from '../assets/img/sass.png'
import NodeIcon from '../assets/img/nodejs.png'
import BSIcon from '../assets/img/bootstrap.png'
import MySQLIcon from '../assets/img/mysql.png'
import FirebaseIcon from '../assets/img/firebase.png'

const Banner2 = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }
    return (
        <Container>
            <section className="banner2Bg" id="skills">
                <h2>Habilidades y tecnologías</h2>
                <p>Entre mis proyectos se pueden ver varias tecnologías que utilizo. Por eso te comparto aquellas en las que más cómodo me siento desarrollando y a las que le doy mayor utilidad</p>
                <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                    <div className='item'>
                        <img src={ReactIcon} alt='img carousel' />
                        <h5>ReactJS</h5>
                    </div>
                    <div className='item'>
                        <img src={HTMLIcon} alt='img carousel' />
                        <h5>HTML</h5>
                    </div>
                    <div className='item'>
                        <img src={CSSIcon} alt='img carousel' />
                        <h5>CSS</h5>
                    </div>
                    <div className='item'>
                        <img src={SASSIcon} alt='img carousel' />
                        <h5>SASS</h5>
                    </div>
                    <div className='item'>
                        <img src={NodeIcon} alt='img carousel' />
                        <h5>NodeJS</h5>
                    </div>
                    <div className='item'>
                        <img src={BSIcon} alt='img carousel' />
                        <h5>Bootstrap</h5>
                    </div>
                    <div className='item'>
                        <img src={MySQLIcon} alt='img carousel' />
                        <h5>MySQL</h5>
                    </div>
                    <div className='item'>
                        <img src={FirebaseIcon} alt='img carousel' />
                        <h5>Firebase</h5>
                    </div>
                </Carousel>
            </section>
        </Container>
    )
}

export default Banner2