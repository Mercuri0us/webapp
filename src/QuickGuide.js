import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';

function Title(img, alt, title) {
    return (
        <Card className='justify-content-center d-flex'>
            <Card.Img 
                className='cardimg'
                variant="top" 
                src={img}
                alt={alt}
            />
            <Card.ImgOverlay>
                <Card.Title className='d-flex position-relative top-0 start-50 translate-middle-x mb-5 w-50 h-100 bg-dark text-light justify-content-center align-items-center fs-2'>{title}</Card.Title>
            </Card.ImgOverlay>
        </Card>
    );
}

function imgOption(arr, onAgeSelect) {
    return(
        <>
        {arr.map((item) => (
            <span className="add-padding">
                <input type="radio" name="age" id={item.id} class="input-hidden" onClick={onAgeSelect} required/>
                <label for={item.id}>
                    <p className="add-padding">{item.label}</p>
                    <img 
                        src={item.img}
                        alt={item.label}/>
                </label>
            </span>
        ))}
        </>
    );
}
function optionGroup(header, groupname, arr, onConditionSelect) {
    return (
        <>
        <div className='box'><Accordion.Item eventKey={groupname}>
            <Accordion.Header>{header}</Accordion.Header>
            <Accordion.Body> 
                {arr.map((item) => (
                    <Form.Check class="form-check" className="option">
                        <input type="radio" class="form-check-input input-hidden" id={item.id} name={groupname} onClick={onConditionSelect} required/>
                        <label class="form-check-label" for={item.id}><div>{item.label}</div></label>
                    </Form.Check>
                ))}
                <Form.Check class="form-check" className="option">
                        <input type="radio" class="form-check-input input-hidden" id={groupname+"0"} name={groupname} onClick={onConditionSelect} required/>
                        <label class="form-check-label" for={groupname+"0"}><div>?</div></label>
                        <div class="invalid-feedback">*必填</div>
                </Form.Check>
            </Accordion.Body>
        </Accordion.Item></div>
        </>
    );
}
function options(groupname, arr, onConditionSelect) {
    return(
        <>
        {arr.map((item) => (
                <Form.Check class="form-check" className="option">
                    <input type="radio" class="form-check-input input-hidden" id={item.id} name={groupname} onClick={onConditionSelect} required/>
                    <label class="form-check-label" for={item.id}><div>{item.label}</div></label>
                </Form.Check>
        ))}
        </>
    );
}
function map(){
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28921.908747808964!2d121.49563132450444!3d25.02597579999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a98c002d5cbd%3A0xa3193cea1acf1e14!2z5Y-k5Lqt5YuV54mp6Yar6Zmi!5e0!3m2!1sen!2stw!4v1685672791094!5m2!1sen!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
}

export { Title, imgOption, optionGroup, options };

{/* <div align="center"><div className='box' align="center"><Alert variant='danger'>表格未完成！</Alert></div></div> */}
