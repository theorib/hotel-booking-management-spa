import { useForm } from 'react-hook-form';

import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';

import FormRow from '../../ui/FormRow';
import useCreateCabin from './useCreateCabin';
import useUpdateCabin from './useUpdateCabin';

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { createCabin, isCreating } = useCreateCabin();
  const { updateCabin, isUpdatingCabin } = useUpdateCabin();
  const isWorking = isCreating || isUpdatingCabin;

  const { id: updateId, ...updateValues } = cabinToEdit;
  const isUpdateSession = Boolean(updateId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isUpdateSession ? updateValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    if (isUpdateSession) {
      updateCabin(
        { data, updateId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    }
    if (!isUpdateSession) {
      createCabin(data, {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      });
    }
  }

  function onError(errors) {
    console.error(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? 'modal' : 'regular'}
    >
      <FormRow label="Cabin name" errors={errors}>
        <Input
          disabled={isWorking}
          type="text"
          id="name"
          {...register('name', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" errors={errors}>
        <Input
          disabled={isWorking}
          type="number"
          id="maxCapacity"
          {...register('maxCapacity', {
            required: 'This field is required',
            min: { value: 1, message: 'Capacity should be at least 1' },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" errors={errors}>
        <Input
          disabled={isWorking}
          type="number"
          id="regularPrice"
          {...register('regularPrice', {
            required: 'This field is required',
            min: { value: 50, message: 'Regular price should be at least 50' },
          })}
        />
      </FormRow>

      <FormRow label="Discount" errors={errors}>
        <Input
          disabled={isWorking}
          type="number"
          id="discount"
          defaultValue={0}
          {...register('discount', {
            required: 'This field is required',
            validate: value => {
              return (
                Number(value) <= Number(getValues().regularPrice) ||
                'Discount should be less than the regular price'
              );
            },
          })}
        />
      </FormRow>
      <FormRow label="Description for website" errors={errors}>
        <Textarea
          disabled={isWorking}
          type="number"
          id="description"
          defaultValue=""
          {...register('description', { required: 'This field is required' })}
        />
      </FormRow>
      <FormRow label="Cabin photo" errors={errors}>
        <FileInput
          disabled={isWorking}
          id="image"
          accept="image/*"
          {...register('image', {
            required: isUpdateSession ? false : 'This field is required',
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          disabled={isWorking}
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isWorking
            ? `${
                isUpdateSession ? 'Editting cabin...' : 'Creating new cabin...'
              }`
            : `${isUpdateSession ? 'Edit Cabin' : 'Create new cabin'}`}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
