import styled from "styled-components";

export const SearchBox = styled.div`
  width: 15vw;
  height: 5vh;
  margin-left: 20px;
  background-color: #cbeefd;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 0px 200px 200px 0px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  padding-left: 10px;
  width: 100%;
  background-color: #cbeefd;
`;

export const Select = styled.select`
  border: none;
  outline: none;
  scroll-behavior: smooth;
  height: 100%;
`;

export const Option = styled.option`
  border: none;
  outline: none;
  scroll-behavior: smooth;
  height: 100%;
`;
