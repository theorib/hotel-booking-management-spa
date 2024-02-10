import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
// import { DevTool } from '@hookform/devtools';
import useSignUp from './useSignup';

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { signUp, isSigningUp } = useSignUp();
  const { register, formState, getValues, handleSubmit, reset } = useForm({
    mode: 'onChange',
  });
  const { errors } = formState;

  const onSubmit = function ({ email, password, fullName }) {
    signUp(
      { email, password, fullName },
      {
        onSettled: reset,
      }
    );
  };

  return (
    <>
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Full name" errors={errors}>
          <Input
            disabled={isSigningUp}
            type="text"
            id="fullName"
            {...register('fullName', {
              required: 'This field is required',
            })}
          />
        </FormRow>

        <FormRow label="Email address" errors={errors}>
          <Input
            disabled={isSigningUp}
            type="email"
            id="email"
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Provide a valid email address',
              },
            })}
          />
        </FormRow>

        <FormRow label="Password (min 8 characters)" errors={errors}>
          <Input
            disabled={isSigningUp}
            type="password"
            id="password"
            {...register('password', {
              required: 'This field is required',
              minLength: {
                value: 8,
                message: 'Password needs a minimum of 8 characters',
              },
            })}
          />
        </FormRow>

        <FormRow label="Repeat password" errors={errors}>
          <Input
            disabled={isSigningUp}
            type="password"
            id="passwordConfirm"
            {...register('passwordConfirm', {
              required: 'This field is required',
              validate: value =>
                value === getValues().password || 'Password does not match',
            })}
          />
        </FormRow>

        <FormRow>
          {/* type is an HTML attribute! */}
          <Button variation="secondary" type="reset">
            Reset
          </Button>
          <Button disabled={isSigningUp}>Create new user</Button>
        </FormRow>
      </Form>
      {/* <DevTool control={control} /> */}
    </>
  );
}

export default SignupForm;
