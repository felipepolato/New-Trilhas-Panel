import styled from "styled-components";

export const LoginBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #116591;
  width: 98vw;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 100vw 100vw 8vw 100vw;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.26);
`;

export const InputsBox = styled.div`
  margin-left: 10px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 90%;
  height: 30px;
  border: none;
  outline: none;  
  border-bottom-width: thin;
  border-bottom-style: solid;
  border-bottom-color: rgba(0,0,0,0.2);
`;

export const InputSubmit = styled.button`
  width: 92%;
  height: 28px;
  border: none;
  outline: none;
  background-color: rgb(255, 198, 73);
  font-weight: bold;
  color: #116591;
  &:hover {
      margin-top: 5px;
      cursor: pointer;
      box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.26);
  }
`;

export const FormTitle = styled.span`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
