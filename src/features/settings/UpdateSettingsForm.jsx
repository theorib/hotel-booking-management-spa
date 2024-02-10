import { useForm } from 'react-hook-form';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';

import Spinner from '../../ui/Spinner';

import useSettings from './useSettings';
import useUpdateSettings from './useUpdateSettings';

function UpdateSettingsForm() {
  const {
    isLoadingSettings,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();
  const { updateSettings, isUpdatingSettings } = useUpdateSettings();

  const { register, formState } = useForm();
  const { errors } = formState;

  if (isLoadingSettings) return <Spinner />;

  const handleUpdate = function (e) {
    const { value, id } = e.target;
    if (!value) return;

    updateSettings({ [id]: value });
  };

  return (
    <Form>
      <FormRow label="Minimum nights/booking" errors={errors}>
        <Input
          type="number"
          id="minBookingLength"
          disabled={isLoadingSettings || isUpdatingSettings}
          defaultValue={minBookingLength}
          {...register('minBookingLength', { onBlur: handleUpdate })}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking" errors={errors}>
        <Input
          type="number"
          id="maxBookingLength"
          disabled={isLoadingSettings || isUpdatingSettings}
          defaultValue={maxBookingLength}
          {...register('maxBookingLength', { onBlur: handleUpdate })}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking" errors={errors}>
        <Input
          type="number"
          id="maxGuestsPerBooking"
          disabled={isLoadingSettings || isUpdatingSettings}
          defaultValue={maxGuestsPerBooking}
          {...register('maxGuestsPerBooking', { onBlur: handleUpdate })}
        />
      </FormRow>
      <FormRow label="Breakfast price" errors={errors}>
        <Input
          type="number"
          id="breakfastPrice"
          disabled={isLoadingSettings || isUpdatingSettings}
          defaultValue={breakfastPrice}
          {...register('breakfastPrice', { onBlur: handleUpdate })}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
