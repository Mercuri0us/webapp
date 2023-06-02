import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Title, imgOption, optionGroup } from './QuickGuide';
import "./QuickGuide.css";

import puppy from "./img/QGdog/puppy.jpg";
import adult_dog from "./img/QGdog/adult_dog.jpg";
import special_dog from "./img/QGdog/special_dog.jpg";
import dog from "./img/QGdog/dog.png";

const age = [
    {id:'newborn', label:'幼犬', img:puppy}, 
    {id:'adult', label:'成犬', img:adult_dog},
    {id:'special', label:'疑似特殊品種狗', img:special_dog}
];
const group0 = [
    {label:'未發現', id:'01'}, 
    {label:'有開放性傷口', id:'02'}, 
    {label:'嚴重皮膚病', id:'03'}, 
    {label:'流血不止', id:'04'}, 
    {label:'以上皆有', id:'05'}, 
];
const group1 = [
    {label:'正常', id:'11'}, 
    {label:'無意識', id:'12'}, 
    {label:'換氣困難、呼吸急迫', id:'13'}, 
    {label:'痛苦嚎叫', id:'14'}, 
];
const group2 = [
    {label:'正常', id:'21'}, 
    {label:'冷/涼', id:'22'}, 
    {label:'失溫', id:'23'}, 
    {label:'嚴重發燙', id:'24'}, 
];
const group3 = [
    {label:'正常', id:'31'}, 
    {label:'營養不良、異常消瘦', id:'32'}, 
    {label:'無法自行移動', id:'33'}, 
];
const group4 = [
    {label:'無', id:'41'}, 
    {label:'其他狀態(可能需要照顧)', id:'42'}, 
];
const healthyNewbornResult_dog = "健康小狗!請注意母犬是否位於附近，否則協助送至非營利組織!";
const healthyAdultResult_dog = "健康成犬，建議不打擾亦不刻意餵食牠";
const unwellResult_dog = "狗狗需要治療!請送至獸醫院!";
const unableToDetermine_dog = "狗狗狀態無法確定!請送至獸醫院治療!";
const healthySpecialResult_dog = "特殊品種狗狗，雖然狀態健康但可能為走失犬，建議Po文幫助其找回主人!"

function QGDog(){
    return(
        <div>
            {Title(dog, "dogs", "快速指引：狗")}
            {/* {getLocation} */}
            <Bird/>
        </div>
    );
}
export default QGDog;

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
                <Accordion defaultActiveKey={['0', '1', '2', '3', '4']} alwaysOpen>
                    {optionGroup("目視外傷", "0", group0, this.props.onConditionSelect)}
                    {optionGroup("精神狀況", "1", group1, this.props.onConditionSelect)}
                    {optionGroup("體溫狀態", "2", group2, this.props.onConditionSelect)}
                    {optionGroup("體態", "3", group3, this.props.onConditionSelect)}
                    {optionGroup("其他", "4", group4, this.props.onConditionSelect)}
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

class Result extends React.Component {   
    render() {
        if (this.props.activeSection === "result") {
            return (
                <div align="center">
                <div className="result-container">
                    <h2>結果</h2>
                    <p>{this.props.result}</p>
                    <p>救援貓狗原則:</p>
                        <p>1. 不立刻接近，以自身安全為優先!</p>
                        <p>2. 先研判傷勢。</p>
                        <p>3. 若要移動，需使用工具(運輸籠..)。</p>
                        <p>4. 若暫無人收養且動物受傷，盡量照顧至其痊癒。</p>
                        <p>5. 非不得以先不聯絡警察、消防隊、政府動物收容所，因政府機關可能直接將其安樂死。</p>
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
    render() {
        if (this.props.activeSection === "result" && (this.props.result===unwellResult_dog || this.props.result===unableToDetermine_dog||this.props.result===healthyNewbornResult_dog)) {
            return (
                //<div align="center"><iframe src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&region=JP&language=ja&callback=initMap"><a href="https://www.maps.ie/distance-area-calculator.html">distance maps</a></iframe></div>
                <div align="center"><iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14461.340873575753!2d121.53524947935185!3d25.022690417760334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z54246Yar!5e0!3m2!1szh-TW!2stw!4v1685614250038!5m2!1szh-TW!2stw"></iframe></div>
            )
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
            result: "", 
            completion: false,
        };

        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleAgeSelection = this.handleAgeSelection.bind(this);
        this.handleCondition = this.handleCondition.bind(this);
        this.handleResult = this.handleResult.bind(this);
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
            if (item !== "1" && item !== "0"){
                healthy = false;
            }
            else if (item === "0" ){
                unknown = true;
            }
        });
        if(isCompleted === true){
            this.setState(() => ({
                completion: true,
                activeSection: "result"
            }));
            if(healthy===false){
                this.setState({result: unwellResult_dog});
            }
            else if(unknown===true){
                this.setState({result: unableToDetermine_dog});
            }
            else if(healthy===true){
                if(this.state.selectedAge==="newborn"){
                    this.setState({result: healthyNewbornResult_dog});
                }
                else if(this.state.selectedAge==="adult"){
                    this.setState(() => ({result: healthyAdultResult_dog}));
                }
                else if(this.state.selectedAge==="special"){
                    this.setState(() => ({result: healthySpecialResult_dog}));
                }
            }
        }
    }

    render() {
        return (
            <div>
                <SelectAge activeSection={this.state.activeSection} onNext={this.handleNext} onAgeSelect={this.handleAgeSelection}/>
                <HealthCheck activeSection={this.state.activeSection} onBack={this.handleBack} condition={this.state.condition} onSubmit={this.handleResult} onConditionSelect={this.handleCondition}/>
                <Result activeSection={this.state.activeSection} result={this.state.result} onBack={this.handleBack}/>
                <Map activeSection={this.state.activeSection} result={this.state.result}/>
            </div>
        );
    }
}
