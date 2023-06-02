import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Title, imgOption, optionGroup, options } from './QuickGuide';
import "./QuickGuide.css";

import Pigeon from "./img/pigeons.jpg";
import a_bird from "./img/QGbird/adult_bird.jpg";
import b_bird from "./img/QGbird/baby_bird.jpg";
import fledgling from "./img/QGbird/fledgling.jpg";

const age = [
    {id:'newborn', label:'雛鳥', img:fledgling}, 
    {id:'chick', label:'幼鳥', img:b_bird},
    {id:'adult', label:'成鳥', img:a_bird}
];
const group0 = [
    {label:'尚無發現', id:'01'}, 
    {label:'明顯外傷', id:'02'}, 
    {label:'尚在流血', id:'03'}, 
    {label:'有蛆蟲', id:'04'}, 
];
const group1 = [
    {label:'正常(安穩)', id:'11'}, 
    {label:'警覺', id:'12'}, 
    {label:'沉鬱', id:'13'}, 
    {label:'無意識', id:'14'}, 
];
const group2 = [
    {label:'正常', id:'21'}, 
    {label:'冷/涼', id:'22'}, 
    {label:'失溫', id:'23'},  
];
const group3 = [
    {label:'正常(對稱)', id:'31'}, 
    {label:'不對稱', id:'32'}, 
    {label:'歪斜', id:'33'}, 
    {label:'有缺口', id:'34'}, 
];
const group4 = [
    {label:'正常(柔順)', id:'41'}, 
    {label:'掉毛', id:'42'}, 
    {label:'濕黏', id:'43'}, 
];
const healthyNest_cantbackResult= "這隻鳥是健康的! Instruction: 請幫助牠，輕輕地將牠放回巢穴中!"
const healthyNoNestResult = "這隻鳥是健康的! \n 但牠可能沒有巢穴，需要照顧! 請帶牠到動物收容所!";
const healthyNestResult = "這隻鳥是健康的! \n Instruction: 可以讓牠自行回去巢穴，必要時再幫助牠!";
const healthyAdultResult = "這是一隻健康的成鳥! 請不要動牠即可!";
const unwellResult = "這隻鳥目前狀態危險! 請帶牠到獸醫院!";
const unableToDetermine = "情況難以鑑定! 為了確保動物健康，請帶牠到獸醫院!";

function QGBird(){
    return(
        <div>
            {Title(Pigeon, "pigeons", "傷救指引：鳥")}
            {/* {getLocation} */}
            <Bird/>
        </div>
    );
}
export default QGBird;

// function showPosition(position) {
//     return( 
//         <p>Latitude: {position.coords.latitude}Longitude: {position.coords.longitude}</p>
//     );
// }
// function getLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition);
//     } else { 
//       return(<p>Geolocation is not supported by this browser.</p>);
//     }
// }  


class SelectAge extends React.Component {
    render() {
        if (this.props.activeSection === "age") {
            return (
            <>
            <div align='center'>
            <Form>
                <div className="add-more-padding">
                    {imgOption(age, this.props.onAgeSelect)}
                </div>
                <Button name="healthcheck" onClick={this.props.onNext}>Next</Button>
            </Form>
            </div>
            </>
        );
        } else {
            return null;
        }
    }
}

class HealthCheck extends React.Component {
    render() {
    if (this.props.activeSection === "healthcheck") { 
        return (
        <div align="center">
            <Form className="was-validated">
                <Accordion defaultActiveKey={['0', '1', '2', '3','4']} alwaysOpen>
                    {optionGroup("目視外傷", "0", group0, this.props.onConditionSelect)}
                    {optionGroup("精神狀況", "1", group1, this.props.onConditionSelect)}
                    {optionGroup("體溫狀態", "2", group2, this.props.onConditionSelect)}
                    {optionGroup("肢體外貌", "3", group3, this.props.onConditionSelect)}
                    {optionGroup("羽毛狀態", "4", group4, this.props.onConditionSelect)}
                </Accordion> 
            </Form>
            <div className="submit-button">
                <ButtonGroup aria-label="Basic example">
                    <Button name="age" variant="secondary" size="lg" onClick={this.props.onBack}>back</Button> 
                    <Button type="submit" variant="primary" size="lg" onClick={this.props.onSubmit}>提交</Button> 
                </ButtonGroup>
            </div> 
        </div>
        );
    } 
    else {
        return null;
    }
    }
}

class EnvironmentCheck extends React.Component {
    render() {
        if(this.props.activeSection === "environmentcheck"){
            const TF0 = [
                {id:'t0', label:'是'},
                {id:'f0', label:'否'}
            ];
            const TF1 = [
                {id:'t1', label:'是'},
                {id:'f1', label:'否'}
            ];
            return(
                <div align="center">
                <div className='result-container' align="center">
                    <h2>這隻鳥目前狀態健康!</h2>
                    <h4>請問您可以找到牠的巢穴嗎?</h4>
                    {options("nest", TF0, this.props.onSelect)}
                    <h4>牠可以自己回到牠的巢穴嗎?</h4>
                    {options("canReturn", TF1, this.props.onSelect)}
                    <Button type="submit" variant="primary" size="lg" onClick={this.props.onSubmit}>提交</Button> 
                    <h4>{this.props.instruction}</h4>
                </div></div>
            );
        }
    }
}

class Result extends React.Component {   
    render() {
        if (this.props.activeSection === "result") {
            return (
                <div align="center">
                <div className="result-container">
                    <h2>結果</h2>
                    <p>{this.props.result}</p>
                    <Button name="healthcheck" variant="secondary" size="lg" onClick={this.props.onBack}>back</Button> 
                </div>
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
                //<div align="center"><iframe src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&region=JP&language=ja&callback=initMap"><a href="https://www.maps.ie/distance-area-calculator.html">distance maps</a></iframe></div>
                <div align="center"><iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14461.340873575753!2d121.53524947935185!3d25.022690417760334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z54246Yar!5e0!3m2!1szh-TW!2stw!4v1685614250038!5m2!1szh-TW!2stw"></iframe></div>
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
            condition: ["", "", "", "", ""],
            result: "healthy", 
            completion: false,

            nest: null,
            canReturn: null
        };

        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleAgeSelection = this.handleAgeSelection.bind(this);
        this.handleCondition = this.handleCondition.bind(this);
        this.handleResult = this.handleResult.bind(this);

        this.handleNestChoice = this.handleNestChoice.bind(this);
        this.handleNestSubmit = this.handleNestSubmit.bind(this);
    }

    handleNext(e) {
        const { name } = e.target;
        if(this.state.selectedAge!==""){
            this.setState(() => ({
                activeSection: name
            }));
        }
    }
    handleAgeSelection(e) {
        const { id } = e.target;
        this.setState({
            selectedAge: id
        });
    }
    handleBack(e) {
        const { name } = e.target;
        this.setState(() => ({
            activeSection: name,
            condition: ["", "", "", "", ""]
        }));
    }
    handleCondition(e) {
        const { id } = e.target;
        const x = id.charAt(1);
        const i = parseInt(e.target.name);
        let isCompleted = true;
        const list = this.state.condition.map((item, j) => {
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
            condition: list,
            completion: isCompleted
        }));
        console.log(this.state.condition);
    }
    handleResult() {
        let isCompleted = true;
        let healthy = true;
        let unknown = false;
        this.state.condition.map((item) => {
            if (item === "") {
                isCompleted = false;
            }
            if (item != "1" && item != "0"){
                healthy = false;
            }
            else if (item === "0" ){
                unknown = true;
            }
        });
        if(isCompleted === true){
            this.setState(() => ({
                completion: true
            }));
            if(healthy===false){
                this.setState(() => ({
                    result: unwellResult,
                    activeSection: "result"
                }));
            }
            else if(unknown===true){
                this.setState(() => ({
                    result: unableToDetermine,
                    activeSection: "result"
                }));
            }
            else if(healthy===true){
                if(this.state.selectedAge==="newborn"){
                    this.setState(() => ({activeSection: "environmentcheck"}));
                }
                else if(this.state.selectedAge==="chick"){
                    this.setState(() => ({activeSection: "environmentcheck"}));
                }
                else{
                    this.setState(() => ({result: healthyAdultResult}));
                    this.setState(() => ({activeSection: "result"}));
                }
            }
        }
    }

    handleNestChoice(e) {
        const { id } = e.target;
        const { name } = e.target;
        if(name==="nest"){
            if(id==="t0"){
                this.setState({nest: true})
            }
            else{
                this.setState({nest: false})
            }
        }
        else{
            if(id==="t1"){
                this.setState({canReturn: true})
            }
            else{
                this.setState({canReturn: false})
            }
        }
        console.log(this.state.nest, this.state.canReturn);
    }
    handleNestSubmit() {
        if(this.state.nest!==null && this.state.canReturn!==null){
            this.setState({activeSection: "result"})
            if(this.state.nest===true && this.state.canReturn===true){
                this.setState({result: healthyNest_cantbackResult})

            }
            else if(this.state.nest===true && this.state.canReturn===false){
                this.setState({result: healthyNest_cantbackResult})
            }
            else {
                this.setState({result: healthyNoNestResult})
            }
        }
    }

    render() {
        return (
            <div>
                <SelectAge activeSection={this.state.activeSection} onNext={this.handleNext} onAgeSelect={this.handleAgeSelection}/>
                <HealthCheck activeSection={this.state.activeSection} onBack={this.handleBack} condition={this.state.condition} onSubmit={this.handleResult} onConditionSelect={this.handleCondition}/>
                <EnvironmentCheck activeSection={this.state.activeSection} instruction={this.state.instruction} onSelect={this.handleNestChoice} onSubmit={this.handleNestSubmit}/>
                <Result activeSection={this.state.activeSection} result={this.state.result} onBack={this.handleBack}/>
                <Map activeSection={this.state.activeSection} result={this.state.result}/>
            </div>
        );
    }
}
