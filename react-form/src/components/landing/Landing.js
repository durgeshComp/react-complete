import React, { useState } from 'react'
import './Landing.css';
import { useHistory } from 'react-router-dom'
import Dashboard from '../../non-layout-component/dashboard/Dashboard';
import Colors from '../../non-layout-component/colors/Colors';
import { Col, Container, Row } from 'react-bootstrap';
import Navigation from '../navigation/Navigation';
import Header from '../header/Header'
import { Route, Switch } from 'react-router-dom'

function Landing() {
    const [show, setShow] = useState(true);

    const showData = () => {
        setShow(show => !show)
    }
    return (
        <div className="landing-wrapper">
            <Container style={{ margin: 0, maxWidth: '100%' }}>
                <Row>
                    <Col xs={2} className={show ? null : 'hide'} style={{ backgroundColor: '#3C4B64' }} >
                        <div style={{ height: '100vh', color: '#E5E7EA', marginTop: '50px' }}>
                            <Navigation />
                        </div>
                    </Col>
                    <Col xs={10} className={show ? null : 'fullWidth'} style={{ paddingLeft: '0px' }}>
                        <Header showNaviagtion={showData} />
                        <Container>
                            <Switch>
                                <Route exact path="/landing/dashboard" component={Dashboard} />
                                <Route exact path="/landing/colors" component={Colors} />
                            </Switch>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Landing
