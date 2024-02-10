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
    settingsError,
  } = useSettings();
  const { updateSettings, isUpdatingSettings } = useUpdateSettings();

  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  if (isLoadingSettings) return <Spinner />;

  const handleUpdate = function (e) {
    const { value, id } = e.target;
    if (!value) return;

    updateSettings({ [id]: value });
  };

  function onError(errors) {
    console.error(errors);
  }

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="minBookingLength"
          disabled={isLoadingSettings}
          defaultValue={minBookingLength}
          {...register('minBookingLength', { onBlur: handleUpdate })}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="maxBookingLength"
          disabled={isLoadingSettings}
          defaultValue={maxBookingLength}
          {...register('maxBookingLength', { onBlur: handleUpdate })}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="maxGuestsPerBooking"
          disabled={isLoadingSettings}
          defaultValue={maxGuestsPerBooking}
          {...register('maxGuestsPerBooking', { onBlur: handleUpdate })}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfastPrice"
          disabled={isLoadingSettings}
          defaultValue={breakfastPrice}
          {...register('breakfastPrice', { onBlur: handleUpdate })}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
