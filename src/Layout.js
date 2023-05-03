import React, {useState} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import {TransitionGroup,  CSSTransition } from 'react-transition-group';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import {LinkContainer} from 'react-router-bootstrap';
import MemberImg from "./member icon.svg"

function Layout() {
    const location = useLocation();
    
    return(
        <div>
            <TopNav/>
            <Footer/>
            <TransitionGroup component={null}>
                <CSSTransition
                    timeout={1250}
                    classNames='fade'
                    key={location.key}
                    unmountOnExit
                >
                    <Outlet/>
                </CSSTransition>  
            </TransitionGroup>
        </div>
    );
}
export default Layout;

function TopNav(){
    return(
        <Navbar expand="md" variant="light" bg="light" className="m-3 shadow-sm rounded sticky-top">
            <Container className='p-0 mx-5'>
                <LinkContainer to="homepage" className='px-5 fs-3'>
                    <Navbar.Brand>網站名稱</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between'>
                    <Nav className="w-50 fs-5">
                        <LinkContainer to="">
                            <Nav.Link className='px-4 border-start border-end border-secondary'>首頁</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="">
                            <Nav.Link className='px-4 border-start border-end border-secondary'>快速指引</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="">
                            <Nav.Link className='px-4 border-start border-end border-secondary'>經驗分享</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Member/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

function Footer(){
    return(
        <div className='w-100 text-light text-center' style={{position:'absolute', bottom:'0', height:'120px', backgroundColor:'black'}}>Footer</div>
    );
}

function Member() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button as="img" variant='light' onClick={handleShow} alt='Member Icon' style={{width:'52px'}} size='sm' src={MemberImg}/>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>會員登入</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>電子信箱</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>密碼</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              關閉
            </Button>
            <Button variant="primary" onClick={handleClose}>
              登入
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }