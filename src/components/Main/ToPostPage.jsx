import React from 'react';
import { SlPencil } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StToPostPageButton = styled.button`
  border: none;
  border-radius: 50%;
  background-color: #99ff89;
  width: 50px;
  height: 50px;

  font-size: 26px;
  color: black;

  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 75px;
  bottom: 100px;

  cursor: pointer;

  @media (max-width: 1120px) {
    display: none;
  }

  &:active {
    background-color: black;
    color: #ededed;
    cursor: pointer;
  }
`;

const ToPostPage = () => {
  const navigate = useNavigate();

  return (
    <StToPostPageButton>
      <SlPencil onClick={() => navigate(`/createPost`)} />
    </StToPostPageButton>
  );
};

export default ToPostPage;