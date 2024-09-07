// src/pages/HomePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Стилі для сторінки
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #ffffff;
  margin-bottom: 20px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
`;

const Button = styled.button`
  padding: 15px 30px;
  font-size: 1.2rem;
  color: #ffffff;
  background-color: #ff6b6b;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff5252;
  }
`;

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/slider');
  };

  return (
    <Container>
      <Title>Це топ 10 причин чому я люблю свою Настю!</Title>
      <Button onClick={handleClick}>Перейти до слайдера</Button>
    </Container>
  );
};

export default HomePage;