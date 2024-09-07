import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slider from '../Components/slider.component';

const Background = styled.div`
  background: url('images/background.avif') no-repeat center center fixed;
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SliderPage: React.FC = () => {
  return (
    <Background>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Slider />
    </motion.div>
    </Background>
  );
};

export default SliderPage;