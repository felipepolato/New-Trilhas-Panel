import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #116591;
  display: flex;
`;

export const Logomarca = styled.div`
  background: #1179b6;
`;

export const ButtonSubmit = styled.button`
  width: 100%;
  height: 6vh;
  background: rgba(255, 198, 73);
  outline: none;
  border: none;
  border-radius: 3px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  font-weight: bold;
  color: white;
  font-size: 18px;
  text-shadow: 0px 0px 5px #000000;
`;

export const ContainerShadowBox = styled.div`
  width: 90vw;
  height: 85vh;
  background: #1179b6;
  top: 10vh;
  left: 5vw;
  position: fixed;
  z-index: 0;
  box-shadow: 3px 4px 15px -1px rgba(0, 0, 0, 0.7);
`;

export const Container = styled.div`
  width: 100vw;
  height: 85vh;
  overflow-y: scroll;
  background: #1179b6;
  margin-top: 10vh;
  margin-left: 5vw;
  padding-left: 30px;
  z-index: 3;
  box-shadow: inset 0px -30px 30px 0px rgba(0, 0, 0, 0.4);
`;

export const DivAbsoluta = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageLoading = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

export const FormSectionTitle = styled.span`
  font-size: 20px;
  text-shadow: 0px 0px 5px #000000;
  color: #fff;
  margin: 0;
  padding: 15px;
  font-weight: bold;
`;

export const Title = styled.div`
  margin-top: 10%;
  margin-bottom: 2%;
`;

export const TextCheckbox = styled.label`
  font-size: 16px;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  color: white;
  margin: 20px;
  margin-top: 8px;
  padding-left: 2px;
`;

export const DivCheckbox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Endereco = styled.div`
  margin-top: 4em;
`;
