import React from 'react';

import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import ListGroup from 'react-bootstrap/ListGroup';

import { LinkContainer } from 'react-router-bootstrap';

import "./HomePage.css";
import Placeholder from './placeholder';

import Shetland from "./img/dog-shetland-sheepdog-collie-sheltie-royalty-free-image-491206081-1565123992.jpg";
import Golden from "./img/golden-retriever-royalty-free-image-506756303-1560962726.jpg"
import Samoyed from "./img/samoyed-royalty-free-image-1581005065.jpg"

var basename="/WEBAPP/React/build/"
function HomePage(){
    return(
        <div>
            <Description/>
            <QuickGuide/>
            <Experience/>
            <Donation/>
        </div>
    );
}
export default HomePage

function Description(){
    return(
            <Stack direction="horizontal" gap={0} className='row mx-3 justify-content-around'>
                <Container className='des col-sm-5 col-md-4 col-lg-3 col-xxl-2 col-6 border border-dark rounded shadow-sm'>
                    <h3 className='m-3'>關於本站</h3>
                    <p className='m-3'>描述</p>
                </Container>
                <Container className='col-md-8'>
                    <Display/>
                </Container>
            </Stack>
    );
}

function Display(){
    return (
        <Carousel className='rounded border border-dark w-100 h-100 shadow-sm'>
          <Carousel.Item>
            <img
              className="d-block w-100 caroimg"
              src={Shetland}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 caroimg"
              src={Golden}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 caroimg"
              src={Samoyed}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}

function QuickGuide(){
    return(
        <Container className='my-5'>
            <Placeholder/>
            <h2>快速指引</h2>
            <Container className='mt-5'>
                <Row className='px-auto g-3'>
                    <Col sm className='justify-content-center d-flex'>
                        <LinkContainer to={basename+'quickguide'} style={{ width: '18rem' , height:'20rem'}}>
                            <Card className='QGcard position-relative'>
                                <Card.Img 
                                className='cardimage'
                                variant="top" 
                                src={Shetland}
                                alt='Dog'/>
                                <Card.ImgOverlay>
                                    <Card.Title className='d-flex position-absolute bottom-0 start-50 translate-middle-x mb-5 d-block w-100 bg-dark text-light justify-content-center opacity-75 h-25 align-items-center'>狗</Card.Title>
                                </Card.ImgOverlay>
                            </Card>
                        </LinkContainer>
                    </Col>
                    <Col sm className='justify-content-center d-flex'> 
                        <LinkContainer to={basename+'quickguide'} style={{ width: '18rem' , height:'20rem'}}>
                            <Card className='QGcard position-relative'>
                                <Card.Img 
                                className='cardimage'
                                variant="top"
                                src={Golden} 
                                alt='Cat'/>
                                <Card.ImgOverlay>
                                    <Card.Title className='d-flex position-absolute bottom-0 start-50 translate-middle-x mb-5 d-block w-100 bg-dark text-light justify-content-center opacity-75 h-25 align-items-center'>貓</Card.Title>
                                </Card.ImgOverlay>
                            </Card>
                        </LinkContainer>
                    </Col>
                    <Col sm className='justify-content-center d-flex'>
                        <LinkContainer to={basename+'quickguide'} style={{ width: '18rem' , height:'20rem'}}>
                            <Card className='QGcard position-relative'>
                                <Card.Img 
                                className='cardimage'
                                variant="top"
                                src={Samoyed}
                                alt='Bird'/>
                                <Card.ImgOverlay>
                                    <Card.Title 
                                    className='d-flex position-absolute bottom-0 start-50 translate-middle-x mb-5 d-block w-100 bg-dark text-light justify-content-center opacity-75 h-25 align-items-center'>
                                        鳥
                                    </Card.Title>
                                </Card.ImgOverlay>
                            </Card>
                        </LinkContainer>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

function Experience(){
    return(
        <>
            <Placeholder/>
            <LinkContainer to={basename+''}>
                <div className="d-grid gap-2 w-50 my-3 mx-auto">
                    <Button variant="dark" size="lg">
                        我來分享
                    </Button>
                </div>
            </LinkContainer>
            <Placeholder/>
            <Container>
                <h2>緊急處置經驗</h2>
            </Container>
            <Placeholder/>
            <ShowExperience/>
            <Container>
                <h2>其他處置經驗</h2>
            </Container>
            <Placeholder/>
            <ShowExperience/>
        </>
    );
}

function ShowExperience(props){
    return(
        <div>
            <Container className='my-5'>
                <Row className='px-auto'>
                    <Col sm className='justify-content-center d-flex col-md-3'>
                        <ExperienceCard src={Shetland} title='Title1' content='content' date='date' link=''/>
                    </Col>
                    <Col sm className='justify-content-center d-flex col-md-3'> 
                        <ExperienceCard src={Golden} title='Title2' content='content' date='date' link=''/>
                    </Col>
                    <Col sm className='justify-content-center d-flex col-md-3'>
                        <ExperienceCard src={Samoyed} title='Title3' content='content' date='date' link=''/>
                    </Col>
                    <Col sm className='justify-content-center d-flex col-md-3'>
                        <ExperienceCard src={Shetland} title='Title4' content='content' date='date' link=''/>
                    </Col>
                </Row>
            </Container>

            <Container className='justify-content-center d-flex my-5'>
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item>{11}</Pagination.Item>
                    <Pagination.Item active>{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>
                    <Pagination.Item disabled>{14}</Pagination.Item>

                    <Pagination.Ellipsis />
                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </Container>
        </div>
    );
}

function ExperienceCard(props){
    return (
        <Card className='expcard' style={{ width: '15rem' }}>
          <Card.Img variant="top" src={props.src} className='cardimage'/>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.content}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
                <LinkContainer to={basename + props.link}>
                    <Button variant="outline-secondary">全文</Button>
                </LinkContainer>
            </ListGroup.Item>
            <ListGroup.Item>{props.date}</ListGroup.Item>
          </ListGroup>
        </Card>
      );
}

function Donation(){
    return(
        <Row direction="horizontal" className='dona m-5 justify-content-around border border-dark rounded shadow-sm'>
            <Col sm={5} className='p-0'>
                <img src={Shetland} alt='donationImage' className='donaImg'/>
            </Col>
            <Col sm={7} style={{minHeight: '50vh',}}>
                <Container className='p-3'>
                    <h1>立即捐款</h1>
                </Container>
            </Col>
        </Row>
    );
}