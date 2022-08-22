import React from 'react';
import Input, { InputProps } from './Input';

type FormProps = {
  inputs: Array<InputProps>;
};

const Form = ({ inputs }: FormProps) => {
  return (
    <div className='w-full max-w-xs'>
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        {inputs.map((input: any, index: number) => {
          return (
            <Input
              label={input.label}
              placeholder={input.placeholder}
              key={index}
            />
          );
        })}
        <p className='text-gray-500 text-s'>
          Your balance: <span className='font-bold'>0 Tokens</span>
        </p>
        <div className='flex items-center justify-center space-x-3 mt-5'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='button'
          >
            Cancel
          </button>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='button'
          >
            Transfer
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
