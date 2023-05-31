import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

import "./QuickGuide.css";

import Pigeon from "./img/feathers.jpg";

function QGBird(){
    return(
        <div>
            <Title/>
            <Bird/>
        </div>
    );
}
export default QGBird

function Title(){
    return(
        <Card className='justify-content-center d-flex'>
            <Card.Img 
                className='cardimg'
                variant="top" 
                src={Pigeon}
                alt='Pigeons'
            />
            <Card.ImgOverlay>
                <Card.Title className='d-flex position-relative top-0 start-50 translate-middle-x mb-5 w-50 h-100 bg-dark text-light justify-content-center align-items-center fs-2'>快速指引：鳥</Card.Title>
            </Card.ImgOverlay>
        </Card>
    );
}

class SelectBirdAge extends React.Component {
    get show() {
        return this.props.activeSection === "age";
    }
    
    render() {
        if (this.show) {
            return (
            <>
            <div align='center'>
            <Form>
            <div className="add-more-padding"><span className="add-padding">
                <input type="radio" name="age" id="newborn" class="input-hidden" onClick={this.props.onAgeSelect}/>
                <label for="newborn">
                    <p className="add-padding">雛鳥</p>
                    <img 
                        src={Pigeon} 
                        alt="雛鳥"/>
                </label>
            </span>
            <span className="add-padding">
                <input type="radio" name="age" id="chick" class="input-hidden" onClick={this.props.onAgeSelect}/>
                <label for="chick">
                    <p className="add-padding">幼鳥</p>
                    <img 
                        src={Pigeon} 
                        alt="幼鳥"/>
                </label>
            </span>
            <span className="add-padding">
                <input type="radio" name="age" id="adult" class="input-hidden" onClick={this.props.onAgeSelect}/>
                <label for="adult">
                    <p className="add-padding">成鳥</p>
                    <img 
                        src={Pigeon} 
                        alt="成鳥"/>
                </label>
            </span></div>
            <Button name="questions" onClick={this.props.onToggle}>Next</Button>
            </Form>
            </div>
            </>
        );
        } else {
            return null;
        }
    }
}

class Questions extends React.Component {
    get show() {
        return this.props.activeSection === "questions";
    }

    render() {
    if (this.show) { 
        return (
        <div align="center">
            <Form className="was-validated">
                <Accordion defaultActiveKey={['0', '1', '2', '3']} alwaysOpen>
                    <div className='box'><Accordion.Item eventKey="0">
                    <Accordion.Header>目視外傷</Accordion.Header>
                        <Accordion.Body> 
                            <Form.Check class="form-check" className="option">
                                <input type="radio" class="form-check-input input-hidden" id="a1" name="0" onClick={this.props.onConditionSelect} required/>
                                <label class="form-check-label" for="a1"><div>無</div></label>
                            </Form.Check>
                            <Form.Check class="form-check" className="option">
                                <input type="radio" class="form-check-input input-hidden" id="a2" name="0" onClick={this.props.onConditionSelect} required/>
                                <label class="form-check-label" for="a2"><div>傷口</div></label>
                            </Form.Check>
                            <Form.Check class="form-check" className="option">
                                <input type="radio" class="form-check-input input-hidden" id="a3" name="0" onClick={this.props.onConditionSelect} required/>
                                <label class="form-check-label" for="a3"><div>血跡</div></label>
                            </Form.Check>
                            <Form.Check class="form-check" className="option">
                                <input type="radio" class="form-check-input input-hidden" id="a4" name="0" onClick={this.props.onConditionSelect} required/>
                                <label class="form-check-label" for="a4"><div>蛆</div></label>
                            </Form.Check>
                            <Form.Check class="form-check" className="option">
                                <input type="radio" class="form-check-input input-hidden" id="a0" name="0" onClick={this.props.onConditionSelect} required/>
                                <label class="form-check-label" for="a0"><div>?</div></label>
                                <div class="invalid-feedback">*</div>
                            </Form.Check>
                        </Accordion.Body>
                    </Accordion.Item></div>

                    <div className='box'><Accordion.Item eventKey="1">
                    <Accordion.Header>精神狀況</Accordion.Header>
                    <Accordion.Body> 
                        <Form.Check class="form-check" className="option">
                            <input type="radio" class="form-check-input input-hidden" id="b1" name="1" onClick={this.props.onConditionSelect} required/>
                            <label class="form-check-label" for="b1"><div>無</div></label>
                        </Form.Check>
                        <Form.Check class="form-check" className="option">
                            <input type="radio" class="form-check-input input-hidden" id="b2" name="1" onClick={this.props.onConditionSelect} required/>
                            <label class="form-check-label" for="b2"><div>傷口</div></label>
                        </Form.Check>
                        <Form.Check class="form-check" className="option">
                            <input type="radio" class="form-check-input input-hidden" id="b3" name="1" onClick={this.props.onConditionSelect} required/>
                            <label class="form-check-label" for="b3"><div>血跡</div></label>
                        </Form.Check>
                        <Form.Check class="form-check" className="option">
                            <input type="radio" class="form-check-input input-hidden" id="b4" name="1" onClick={this.props.onConditionSelect} required/>
                            <label class="form-check-label" for="b4"><div>蛆</div></label>
                        </Form.Check>
                        <Form.Check class="form-check" className="option">
                            <input type="radio" class="form-check-input input-hidden" id="b0" name="1" onClick={this.props.onConditionSelect} required/>
                            <label class="form-check-label" for="b0"><div>?</div></label>
                            <div class="invalid-feedback">*</div>
                        </Form.Check>
                    </Accordion.Body>
                    </Accordion.Item></div>

                    <div className='box'><Accordion.Item eventKey="2">
                    <Accordion.Header>體溫狀態</Accordion.Header>
                    <Accordion.Body> <div className="form-check"> 
                        <Form.Check class="form-check" className="option">
                            <input type="radio" class="form-check-input input-hidden" id="c1" name="2" onClick={this.props.onConditionSelect} required/>
                            <label class="form-check-label" for="c1"><div>無</div></label>
                        </Form.Check>
                        <Form.Check class="form-check" className="option">
                            <input type="radio" class="form-check-input input-hidden" id="c2" name="2" onClick={this.props.onConditionSelect} required/>
                            <label class="form-check-label" for="c2"><div>傷口</div></label>
                        </Form.Check>
                        <Form.Check class="form-check" className="option">
                            <input type="radio" class="form-check-input input-hidden" id="c3" name="2" onClick={this.props.onConditionSelect} required/>
                            <label class="form-check-label" for="c3"><div>血跡</div></label>
                        </Form.Check>
                        <Form.Check class="form-check" className="option">
                            <input type="radio" class="form-check-input input-hidden" id="c4" name="2" onClick={this.props.onConditionSelect} required/>
                            <label class="form-check-label" for="c4"><div>蛆</div></label>
                        </Form.Check>
                        <Form.Check class="form-check" className="option">
                            <input type="radio" class="form-check-input input-hidden" id="c0" name="2" onClick={this.props.onConditionSelect} required/>
                            <label class="form-check-label" for="c0"><div>?</div></label>
                            <div class="invalid-feedback">*</div>
                        </Form.Check>
                    </div> </Accordion.Body>
                </Accordion.Item></div>
                </Accordion> 
            </Form>
            <div className="submit-button">
                <Button name="age" variant="secondary" size="lg" onClick={this.props.onToggle}>back</Button> 
                <Button type="submit" variant="primary" size="lg" onClick={this.props.onSubmit}>提交</Button> 
            </div> 
            
        </div>
        );
    } 
    else {
        return null;
    }
    }
}

class AlertNotif extends React.Component {
    render() {
        if(this.props.activeSection === "questions" && this.props.completion === false){
            return(
                <div align="center"><div className='box' align="center"><Alert variant='danger'>表格未完成！</Alert></div></div>
            );
        }
    }
}

const healthyResult = "The bird is healthy!"
const unwellResult = "The bird is unwell!"
const unableToDetermine = "Unable to be determined!"

class Result extends React.Component {
    get show() {
        return this.props.activeSection === "result";
    }
    get result() {
        switch(this.props.result){
            case "healthy":
                return healthyResult;
            case "unwell":
                return unwellResult;
            case "unknown":
                return unableToDetermine;
        }
    }
    
    render() {
        const result = this.result;
        if (this.show) {
            return (
                <div align='center'>
                    <Container fluid="md">
                        <h2>結果</h2>
                        <p>{result}</p>
                    </Container>
                </div>
            );
        } else {
            return null;
        }
    }
}

class Map extends React.Component {
    get show() {
        return this.props.activeSection === "result";
    }
    
    render() {
        if (this.show) {
            return (
                <div align="center"><iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=vet%20taipei+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">distance maps</a></iframe></div>
            );
        } else {
            return null;
        }
    }
}

class Bird extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSection: "age",
            selectedAge: "",
            birdCondition: ["", "", ""],
            result: "healthy", 
            completion: false
        };

        this.handleToggleSection = this.handleToggleSection.bind(this);
        this.handleAgeSelection = this.handleAgeSelection.bind(this);
        this.handleBirdCondition = this.handleBirdCondition.bind(this);
        this.handleResult = this.handleResult.bind(this);
    }

    handleToggleSection(e) {
        const { name } = e.target;
        if (this.state.selectedAge!=""){
        this.setState(() => ({
            activeSection: name
        }));
        }
    }
    handleAgeSelection(e) {
        const { id } = e.target;
        this.setState(() => ({
            selectedAge: id
        }));
    }
    handleBirdCondition(e) {
        const { id } = e.target;
        const x = id.charAt(1);
        const i = parseInt(e.target.name);
        let isCompleted = true;
        const list = this.state.birdCondition.map((item, j) => {
            if (item===""){
                isCompleted = false;
            }
            if (j === i) {
              return x;
            } else {
              return item;
            }
          });
        this.setState(() => ({
            birdCondition: list,
            completion: isCompleted
        }));
    }
    handleResult() {
        let completed = true;
        let healthy = true;
        let unknown = false;
        this.state.birdCondition.map((item) => {
            if (item === "") {
                completed = false;
            }
            if (item != "1" && item != "0"){
                healthy = false;
            }
            else if (item === "0" ){
                unknown = true;
            }
        });
        if(completed === true){
            this.setState(() => ({
                activeSection: "result"
            }));
            if(healthy===false){
                this.setState(() => ({result: "unwell"}));
            }
            else if(unknown===true){
                this.setState(() => ({result: "unknown"}));
            }
            else if(healthy===true){
                this.setState(() => ({result: "healthy"}));
            }
        }
    }

    render() {
        return (
            <div>
            <SelectBirdAge activeSection={this.state.activeSection} onToggle={this.handleToggleSection} onAgeSelect={this.handleAgeSelection}/>
            <Questions activeSection={this.state.activeSection} birdCondition={this.state.birdCondition} onSubmit={this.handleResult} onConditionSelect={this.handleBirdCondition}/>
            <AlertNotif activeSection={this.state.activeSection} completion={this.state.completion}/>
            <Result activeSection={this.state.activeSection} result={this.state.result} onToggle={this.handleToggleSection}/>
            <Map activeSection={this.state.activeSection} result={this.state.result}/>
            </div>
        );
    }
}