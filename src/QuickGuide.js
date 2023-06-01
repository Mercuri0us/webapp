import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function Title(img, alt, title){
    return(
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
function optionGroup(groupname, arr, onConditionSelect) {
    return (
        <>
        <div className="form-check"> 
            {arr.map((item) => (
                <><Form.Check class="form-check" className="option">
                    <input type="radio" class="form-check-input input-hidden" id={item.id} name={groupname} onClick={onConditionSelect} required/>
                    <label class="form-check-label" for={item.id}><div>{item.label}</div></label>
                </Form.Check></>
            ))}
            <><Form.Check class="form-check" className="option">
                    <input type="radio" class="form-check-input input-hidden" id={groupname+"0"} name={groupname} onClick={onConditionSelect} required/>
                    <label class="form-check-label" for={groupname+"0"}><div>?</div></label>
                    <div class="invalid-feedback">*必填</div>
            </Form.Check></>
        </div>
        </>
    );
}

export { Title, imgOption, optionGroup };

{/* <div align="center"><div className='box' align="center"><Alert variant='danger'>表格未完成！</Alert></div></div> */}
