import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; // Assuming you're using Reactstrap

function RateModal(props) {
  // console.log(props.data, props.id)
  // props.id===1?console.log(props.data[0]):console.log("yo")
  const[dataOption,setDataOption]=useState([])
  const { isOpen, closeModal, id, data } = props;
  // console.log(id)
  useEffect(() => {
    if (id >= 1 && id <= data.length) {
      setDataOption(data[id - 1]);
    } else {
      setDataOption({});
    }
  }, [id, data]);
  return (
    <div>
      <Modal isOpen={isOpen} toggle={closeModal} >
      <ModalHeader>{dataOption.title}</ModalHeader>
       
        <ModalBody>
          
        </ModalBody>
        <ModalFooter>
          {/* <Button color="primary">Do Something</Button>{' '} */}
          <Button color="secondary" onClick={closeModal} >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default RateModal;
