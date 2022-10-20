import React, { Fragment, useState} from "react";
import { Modal, ModalHeader, Button, ModalFooter } from "reactstrap";
import axios from "axios";






function ConfirmRemovalModal(props) {

    const [state,setState] = useState({modal:false})

    const toggle = () => {
        setState(prevState => ({
            modal: !prevState.modal
        }))
    }
    const deleteStudent = (pk) => {
        axios.delete(API_URL + pk).then(() => {
            props.resetState();
            toggle();
        });
        props.resetState()
        props.toggle()
    }
    return (
        <Fragment>
            <Button color="danger" onClick={() => toggle()}>
                Remove
            </Button>
            <Modal isOpen={state.modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Do you really wanna delete the student?
                </ModalHeader>

                <ModalFooter>
                    <Button type="button" onClick={() => toggle()}>
                        Cancel
                    </Button>
                    <Button
                        type="button"
                        color="primary"
                        onClick={() => deleteStudent(props.pk)}
                    >
                        Yes
                    </Button>
                </ModalFooter>
            </Modal>
        </Fragment>
    );
}

export default ConfirmRemovalModal;