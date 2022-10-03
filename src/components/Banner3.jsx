import { Container } from 'react-bootstrap'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import CardProject from './CardProject'
import project from '../assets/mocks/project'
import personal from '../assets/mocks/personal'
import { useState } from 'react'

const Banner3 = () => {
    const [ activeTab, setActiveTab ] = useState('1')

    const changeTab = (numeroTab) => {
        if(activeTab !== numeroTab) {
            setActiveTab(numeroTab)
        }
    }

    return (
        <section className='banner3Bg'>
            <Container>
                <h2>Proyectos</h2>
                <Nav tabs>
                    <NavItem>
                        <NavLink className={(activeTab == '1' ? 'activeTab' : 'baseTab')} 
                        onClick={() => changeTab('1')}>
                            Personales
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={(activeTab == '2' ? 'activeTab' : 'baseTab')}  
                        onClick={() => changeTab('2')}>
                            Terceros
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent className='pt-3' activeTab={activeTab}>
                    <TabPane tabId='1'>
                    {
                        personal.map((personal, index) => {
                            return (
                                <CardProject key={index} {...personal} />
                            )
                        })
                    }
                    </TabPane>
                    <TabPane tabId='2'>
                    {
                        project.map((project, index) => {
                            return (
                                <CardProject key={index} {...project} />
                            )
                        })
                    }
                    </TabPane>
                </TabContent>
            </Container>
        </section>
    )
}

export default Banner3