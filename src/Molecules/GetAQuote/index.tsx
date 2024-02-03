import { useState } from "react";
import { Modal } from "react-bootstrap";
import ContactUs from "../../Organisms/ContactUs";


const GetAQuote = (props:any) => {
    const [modal, ShowModal] = useState(false);

    return (
        <div>
           <p onClick={()=> ShowModal(true)} style={props.styles || {}}>GET A QUOTE</p> 
        <Modal
        size="lg"
        show={modal}
        onHide={() => ShowModal(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton style={{backgroundColor:'#FFF5E0'}}>
            <Modal.Title id="example-modal-sizes-title-lg">
            Contact Us
            </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:'#FFF5E0'}}>
            <ContactUs/>
        </Modal.Body>
        </Modal>
        </div>
    );
}

export default GetAQuote;