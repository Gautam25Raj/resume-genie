import { useEffect } from 'react';
import { motion } from 'framer-motion';

import Input from '../component/Input';
import Button from '../component/Button';

import logo from './../assests/svg/logo.svg';
import loginSvg from './../assests/svg/login-svg.svg';

import './bg.css';

const Login = () => {
  useEffect(() => {
    document.title = 'Resume Genie | Login';
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: 1, x: '0' }}
      transition={{ duration: 0.75, ease: [0, 0.99, 1, 0.94] }}
      exit={{ opacity: 0, x: '100%' }}
      className="w-[100%] min-h-[100vh] flex bg-cover bg-no-repeat bg"
    >
      <div className="w-2/5 p-[40px]">
        <div>
          <img src={logo} alt="Resume Genie Logo" />
        </div>

        <section className="mt-[20px] p-[40px] text-center">
          <div className="mb-[36px]">
            <h2 className="text-[28px] font-bold text-[var(--text)] tracking-wider">
              Welcome Back
            </h2>
            <p className="text-[16px] text-[var(--text-light)]">
              Welcome Back! Please enter your details.
            </p>
          </div>

          <form action="">
            <Input
              type="email"
              label="Email"
              labelFor="login-mail"
              placeholder="Your Email"
            />
            <Input
              type="password"
              label="Password"
              labelFor="login-password"
              placeholder="Your Password"
            />

            <div className="text-right max-w-[300px] mx-auto">
              <a
                href="/forgotPassword"
                className="text-[var(--primary)] text-[14px]"
              >
                Forgot Password?
              </a>
            </div>

            <Button
              type="submit"
              text="LOG IN"
              className="text-[var(--white)] text-[12px] bg-[var(--primary)] p-[18px] w-full rounded-[5px] max-w-[300px] my-[18px] font-bold"
            />
          </form>

          <div className="text-[18px] flex justify-center mt-[36px]">
            <p className="text-[var(--text) mr-2">Don't have an Account?</p>
            <a href="/register" className="text-[var(--primary)]">
              Sign up for free
            </a>
          </div>
        </section>
      </div>

      <div className="w-3/5 flex justify-center items-center">
        <img
          src={loginSvg}
          alt="Login SVG"
          className="max-w-[calc(14vw+500px)]"
        />
      </div>
    </motion.section>
  );
};

export default Login;
