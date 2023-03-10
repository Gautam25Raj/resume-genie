import { useEffect } from 'react';
import { motion } from 'framer-motion';

import Button from '../component/Button';

import logo from './../assests/svg/logo.svg';
import recoverySVG from './../assests/svg/recovery-svg.svg';

import './bg.css';

const Recovery = () => {
  const Input = (props) => {
    return (
      <input
        type="text"
        placeholder={props.placeholder}
        maxlength="1"
        min="0"
        max="9"
        className="border-solid border-[#F0F0F0] rounded-[5px] border py-[9px]  w-[42.5px] text-[24px] text-center [&:not(:first-child)]:ml-[9px]"
      />
    );
  };

  useEffect(() => {
    document.title = 'Resume Genie | Recovery';
  }, []);

  return (
    <motion.section
      initial={{opacity: 0, x: '-100%' }}
      animate={{opacity: 1, x: '0' }}
      transition={{ duration: 0.75, ease: [0, 0.99, 1, 0.94] }}
      exit={{opacity: 0, x: '100%' }}
      className="w-[100%] min-h-[100vh] flex bg-cover bg-no-repeat bg"
    >
      <div className="w-2/5 p-[40px]">
        <div>
          <img src={logo} alt="Resume Genie Logo" />
        </div>

        <section className="mt-[20px] p-[40px] text-center">
          <div className="mb-[36px]">
            <h2 className="text-[28px] font-bold text-[var(--text)] tracking-wider">
              Confirm O TP
            </h2>
            <p className="text-[16px] text-[var(--text-light)] max-w-[320px] mx-auto">
              Enter 6-digit OTP sent to your registered Email address.
            </p>
          </div>

          <form action="">
            <div className="mb-[9px]">
              {[5, 2, 6, 9, 1, 4].map((element) => (
                <Input placeholder={element} />
              ))}
            </div>

            <a
              href="/"
              className="block text-right max-w-[300px] mx-auto text-[14px] text-[var(--primary)] mb-[18px]"
            >
              Resned OTP
            </a>

            <p className="text-center max-w-[300px] mx-auto text-[14px] text-[var(--text)] mb-[18px]">
              OTP can be sent again in
              <span className="ml-[4px] text-[#f23333]">0:59</span>
            </p>

            <Button
              type="submit"
              text="CONFIRM OTP"
              className="text-[var(--white)] text-[12px] bg-[var(--primary)] p-[18px] w-full rounded-[5px] max-w-[300px] my-[18px] font-bold"
            />
          </form>

          <div className="text-[18px] flex justify-center mt-[36px]">
            <p className="text-[var(--text) mr-2">Remember Password?</p>
            <a href="/login" className="text-[var(--primary)]">
              Login Page
            </a>
          </div>
        </section>
      </div>

      <div className="w-3/5 flex justify-center items-center">
        <img
          src={recoverySVG}
          alt="Forgot Password SVG"
          className="max-w-[calc(14vw+500px)]"
        />
      </div>
    </motion.section>
  );
};

export default Recovery;
