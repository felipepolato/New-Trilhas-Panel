import styled from "styled-components";

export const ContainerAccounts = styled.div`
  color: white;
  font-size: 12px;
  width: 74%;
`;

export const Container = styled.div``;

export const InputFile = styled.input`
  border: none;
  outline: none;
  border-radius: 15px;
  padding-left: 10px;
  width: 11.7%;
  margin: 5px;
`;

export const Input = styled.input`
  background-color: #cbeefd;
  outline: none;
  border: none;
  height: 4vh;
  margin-right: 3px;
  font-size: 12px;
  box-shadow: 3px 4px 15px -1px rgba(0, 0, 0, 0.7);
`;

export const ButtonInput = styled.button`
  background-color: #ffe082;
  outline: none;
  border: none;
  height: 4.3vh;
  width: 10%;
  margin-right: 5px;
  font-size: 12px;
  text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.94);
  box-shadow: 3px 4px 15px -1px rgba(0, 0, 0, 0.7);
  border-radius: 2px;
  color: white;
  font-weight: bold;
`;

export const SelectContas = styled.select`
  border: none;
  outline: none;
  text-decoration: none;
  width: 10%;
  height: 28px;
  margin-top: -0.21px;
  margin-right: 3px;
  border-radius: 2px;
  background-color: #cbeefd;
  box-shadow: 3px 4px 15px -1px rgba(0, 0, 0, 0.7);
`;

export const OptionContas = styled.option`
  background-color: #cbeefd;
  outline: none;
  border: none;
`;

export const SideBar = styled.div`
  position: fixed;
  width: 15vw;
  height: 100vh;
  background-color: #116591;
  top: 0;
  left: 0;
  box-shadow: 5px 5px 15px 1px rgba(0, 0, 0, 0.18);
`;

export const SideBarFooter = styled.span`
  position: fixed;
  bottom: 5px;
  left: 38px;
  color: white;
  font-size: 12px;
`;

export const SideBarButton = styled.button`
  outline: none;
  border: none;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 1px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  background-color: rgba(167, 203, 219, 0);
  border-bottom-style: solid;
  border-bottom-width: thin;
  border-bottom-color: #116591;
  color: #fff;
  &:hover {
    cursor: pointer;
    background-color: rgba(255, 198, 73, 1);
    padding-top: 15px;
    padding-bottom: 15px;
    color: #116591;
  }
`;

export const NavBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #116591;
  box-shadow: 5px 5px 15px 1px rgba(0, 0, 0, 0.35);
`;

export const Logomarca = styled.img`
  width: 80%;
  margin-top: 12px;
  margin-bottom: 8px;
`;

export const UserDetails = styled.div`
  margin-right: 3vh;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const UserName = styled.span`
  color: white;
`;

export const UserAccess = styled.span`
  color: white;
  font-size: 12px;
`;
