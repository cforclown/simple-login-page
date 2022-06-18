import { useState } from 'react';
import { PulseLoader } from 'react-spinners';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import WaveImg from './Assets/waves.png';
import LogoImg from './Assets/logo.svg';
import FormInput from './Components/Form/FormInput/FormInput.style';
import FormSubmit from './Components/Form/FormSubmit/FormSubmit.style';
import validateFormValues from './Utils/ValidateSchema';

interface IApp {
  className?: string
}

function AppBase({ className }: IApp): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (values: Record<string, any>): void => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsError(Math.random() < 0.5);
    }, 1000);
  };

  return (
    <div className={className}>
      <div className="logo text-center">
        <img className="logo " src={LogoImg} alt={LogoImg} />
      </div>
      <img className="wave" src={WaveImg} alt={WaveImg} />

      <div className="login-form text-center p-7 md:p-9 sm:p-7">
        <h1 className="font-sans text-slate-800 mb-2 md:mb-3 sm:mb-2 font-bold text-2xl md:text-3xl sm:text-2xl">Welcome</h1>
        <p className="font-sans text-slate-600 mb-4 md:mb-5 sm:mb-4 text-lg md:text-xl sm:text-lg">Log in to your CASEOS account!</p>

        {isError && (
          <div className="login-error text-red-700 bg-red-100 rounded-lg dark:bg-red-500 dark:text-white text-md md:text-lg sm:text-md p-3.5 md:p-4.5 sm:p-3.5 mb-3" role="alert">
            <FontAwesomeIcon icon={faExclamationTriangle} size="lg" />
            <p className="text-left text-md">
              <span className="font-bold">Please try again.</span>
              {' '}
              Your credentials are wrong.
            </p>
          </div>
        )}

        <Formik
          initialValues={{ email: '', password: '' }}
          validate={validateFormValues(LoginFormSchema)}
          onSubmit={onSubmit}
        >
          <ILoginField disabled={isLoading} />
        </Formik>

        {isLoading && (
          <div className="spinner-container">
            <PulseLoader size={20} color="#a29bfe" />
          </div>
        ) }
      </div>
    </div>
  );
}

const LoginFormSchema = yup.object({
  email: yup.string()
    .email()
    .required('Please type the correct email!'),
  password: yup.string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&?!|*])(?=.{8,})/,
      'Must Contain 8 Characters, Uppercase, Lowercase, Number and special case character!',
    ),
});

interface ILoginFields {
  disabled?: boolean;
}
function ILoginField({ disabled }: ILoginFields): JSX.Element {
  return (
    <Form>
      <FormInput type="text" name="email" label="Email" placeholder="Type email here" disabled={disabled} />
      <FormInput type="password" name="password" label="Password" placeholder="Minimum 8 characters" disabled={disabled} />
      <FormSubmit className="mt-6 md:mt-10 sm:mt-8" text="Log in" />
    </Form>
  );
}

export default AppBase;
