import { useEffect } from 'react';
import { motion } from 'framer-motion';

import Input from '../component/Input';
import Button from '../component/Button';

import logo from './../assests/svg/logo.svg';
import signupSvg from './../assests/svg/signup-svg.svg';

import './bg.css';

const SignUp = () => {
  useEffect(() => {
    document.title = 'Resume Genie | Register';
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
              Create an account
            </h2>
            <p className="text-[16px] text-[var(--text-light)]">
              And enjoy life during the time you saved!
            </p>
          </div>

          <form action="">
            <Input
              type="text"
              label="Name"
              labelFor="signup-name"
              placeholder="Your Name"
            />
            <Input
              type="email"
              label="Email"
              labelFor="signup-mail"
              placeholder="Your Email"
            />
            <Input
              type="password"
              label="Password"
              labelFor="signup-password"
              placeholder="Your Password"
            />

            <Button
              type="submit"
              text="CREATE AN ACCOUNT"
              className="text-[var(--white)] text-[12px] bg-[var(--primary)] p-[18px] w-full rounded-[5px] max-w-[300px] my-[18px] font-bold"
            />
          </form>

          <div className="text-[18px] flex justify-center mt-[36px]">
            <p className="text-[var(--text) mr-2">Already have an Account?</p>
            <a href="/login" className="text-[var(--primary)]">
              Login
            </a>
          </div>
        </section>
      </div>

      <div className="w-3/5 flex justify-center items-center">
        <img
          src={signupSvg}
          alt="Sign Up SVG"
          className="max-w-[calc(14vw+500px)]"
        />
      </div>
    </motion.section>
  );
};

export default SignUp;
