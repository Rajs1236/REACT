import React, { useState } from 'react';
import authService from '../appwrite/auth';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';
import { Button, Input, Logo } from './index.js';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError('');
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const CurrentUser = await authService.getCurrentUser();
        if (CurrentUser) dispatch(login(CurrentUser));
        navigate('/');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="mx-auto w-full max-w-lg bg-gray-800 text-white rounded-xl p-10 shadow-lg border border-gray-700">
        <div className="mb-6 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold">Sign up to create account</h2>
        <p className="mt-2 text-center text-sm text-gray-400">
          Already have an account?{' '}
          <Link
            to="/login"
            className="text-indigo-400 hover:underline transition duration-150"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-400 mt-6 text-center">{error}</p>}

        <form onSubmit={handleSubmit(create)} className="mt-8 space-y-6">
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            className="text-black"
            {...register('name', { required: true })}
          />
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            className="text-black"
            {...register('email', {
              required: 'Email is required',
              validate: (value) =>
                /^\S+@\S+\.\S+$/.test(value) || 'Email address must be valid',
            })}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            className="text-black"
            {...register('password', { required: true })}
          />
          <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500">
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
