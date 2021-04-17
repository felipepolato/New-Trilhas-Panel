import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #cbeefd;
  display: flex;
`;

export const ContainerShadowBox = styled.div`
  width: 75vw;
  height: 88vh;
  background: #1179b6;
  top: 10vh;
  left: 17vw;
  position: fixed;
  z-index: 0;
  box-shadow: 3px 4px 15px -1px rgba(0, 0, 0, 0.7);
`;

export const Container = styled.div`
  width: 83vw;
  height: 88vh;
  overflow-y: scroll;
  overflow-x: hidden;
  background: #1179b6;
  margin-top: 10vh;
  margin-left: 7vw;
  padding-left: 10px;
  padding-right: 10px;
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
