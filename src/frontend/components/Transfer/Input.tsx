import React, { Key } from 'react';

export type InputProps = {
  label: string;
  placeholder: string;
  key: Key;
};

const Input = ({ label, placeholder, key }: InputProps) => {
  return (
    <div className='mb-4' key={key}>
      <label className='block text-gray-700 text-sm font-bold mb-2'>
        {label}
      </label>
      <input
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        id='username'
        type='text'
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
