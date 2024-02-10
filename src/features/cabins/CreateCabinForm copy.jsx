import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';
import CreateCabinFormRow from './CreateCabinFormRow';

function CreateCabinForm({ cabinToEdit }) {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  const queryClient = useQueryClient();
  const { mutate, isPending: isCreating } = useMutation({
    mutationFn: cabin => createCabin(cabin),
    onSuccess: () => {
      toast.success('New cabin successfully created');
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
      // reset();
    },
    onError: err => {
      toast.error(err.message);
      console.error(err);
    },
  });

  function onSubmit(data) {
    console.log(data);
    // console.log(data.image[0]);

    mutate({ ...data, image: data.image[0] });
  }

  function onError(errors) {
    console.error(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <CreateCabinFormRow label="Cabin name" errors={errors}>
        <Input
          disabled={isCreating}
          type="text"
          id="name"
          {...register('name', { required: 'This field is required' })}
        />
      </CreateCabinFormRow>

      <CreateCabinFormRow label="Maximum capacity" errors={errors}>
        <Input
          disabled={isCreating}
          type="number"
          id="maxCapacity"
          {...register('maxCapacity', {
            required: 'This field is required',
            min: { value: 1, message: 'Capacity should be at least 1' },
          })}
        />
      </CreateCabinFormRow>

      <CreateCabinFormRow label="Regular price" errors={errors}>
        <Input
          disabled={isCreating}
          type="number"
          id="regularPrice"
          {...register('regularPrice', {
            required: 'This field is required',
            min: { value: 50, message: 'Regular price should be at least 50' },
          })}
        />
      </CreateCabinFormRow>

      <CreateCabinFormRow label="Discount" errors={errors}>
        <Input
          disabled={isCreating}
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
      </CreateCabinFormRow>
      <CreateCabinFormRow label="Description for website" errors={errors}>
        <Textarea
          disabled={isCreating}
          type="number"
          id="description"
          defaultValue=""
          {...register('description', { required: 'This field is required' })}
        />
      </CreateCabinFormRow>
      <CreateCabinFormRow label="Cabin photo" errors={errors}>
        <FileInput
          id="image"
          accept="image/*"
          {...register('image', { required: 'This field is required' })}
        />
      </CreateCabinFormRow>

      <CreateCabinFormRow>
        <Button variation="secondary" type="reset" disabled={isCreating}>
          Cancel
        </Button>
        <Button disabled={isCreating}>
          {isCreating ? 'Adding cabin...' : 'Add cabin'}
        </Button>
      </CreateCabinFormRow>
    </Form>
  );
}

export default CreateCabinForm;
