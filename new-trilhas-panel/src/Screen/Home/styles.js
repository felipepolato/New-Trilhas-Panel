import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #cbeefd;
`;

export const Title = styled.span`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;
export const NomeTrilheiro = styled.span`
  color: white;
  font-size: 16px;
`;
export const CidadeTrilheiros = styled.span`
  color: white;
  font-size: 16px;
`;

export const TitleBox = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
`;

export const Content = styled.div`
  width: 81vw;
  height: 88vh;
  position: fixed;
  top: 10vh;
  margin-left: 17vw;
  background-color: #116591;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.38);
  overflow-y: scroll;
`;

export const ButtonsBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TrilheirosBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const AvatarTrilheiros = styled.img`
  width: 6%;
  margin-left: 10px;
`;

export const TrilheiroDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  width: 20%;
`;

export const ButtonRelatorio = styled.button`
  background-color: #cbeefd;
  width: 23%;
  height: 10vh;
  border: none;
  outline: none;
  font-weight: bold;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.6);
  font-weight: bold;

  border-left-style: solid;
  border-left-width: thin;
  border-left-color: #116591;

  border-right-style: solid;
  border-right-width: thin;
  border-right-color: #116591;

  &:hover {
    cursor: pointer;
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.26);
  }
`;
