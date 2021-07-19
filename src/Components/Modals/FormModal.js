import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import Modal from '../../UIComponents/Modal';
import Form from '../Form';
import Button from '../../UIComponents/Button';

import './FormModal.css';

const Content = props => {
    return (
        ReactDOM.createPortal(
            <Form FormName="myForm" IsForm="true" {...props} />,
        document.getElementById('form-hook')
        )
    )
}

const FormModal = props => {
    const [toggleOpen, setToggleOpen] = useState(false);

    const handleClick = () => {
        setToggleOpen(toggleOpen => !toggleOpen);
    }

    return (
        <React.Fragment>
            <Button ButtonName="SignUp"  addClass="button-big" handleClick={handleClick}/>
            
            <Modal NotOpen={toggleOpen} ClickHandle={handleClick}>
                <Content ClickHandle={handleClick} NotOpen={toggleOpen} {...props}/>                
            </Modal>
        </React.Fragment>
    )
}

export default FormModal;