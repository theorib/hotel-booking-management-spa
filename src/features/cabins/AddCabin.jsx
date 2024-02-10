import CreateCabinForm from './CreateCabinForm';
import Modal from '../../ui/Modal';
import Button from '../../ui/Button';

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opensWindow="cabin-form">
          <Button>Add New Cabin</Button>
        </Modal.Open>
        <Modal.Window windowName="cabin-form">
          <Modal.Close />
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCabin;
