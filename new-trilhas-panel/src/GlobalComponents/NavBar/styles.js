import styled from "styled-components";

export const ContainerAccounts = styled.div`
  color: white;
  font-size: 12px;
  width: 74%;
`;

export const Container = styled.div``;

export const ButtonAdd = styled.button`
  width: 12vw;
  height: 3vw;
  background: rgba(255, 198, 73, 1);
  outline: none;
  border: none;
  border-radius: 3px;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 15px;
`;

export const ButtonAddTextBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonAddText = styled.span`
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
  text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.94);
  color: #fff;
`;

export const InputFile = styled.input`
  border: none;
  outline: none;
  border-radius: 15px;
  padding-left: 10px;
  width: 11.7%;
  margin: 5px;
  display: none;
`;

export const InputFileLabel = styled.label`
  background-color: #cbeefd;
  outline: none;
  border: none;
  height: 4vh;
  margin-right: 3px;
  font-size: 12px;
  padding: 6px;
  box-shadow: 3px 4px 15px -1px rgba(0, 0, 0, 0.7);
`;

export const Input = styled.input`
  background-color: #cbeefd;
  outline: none;
  border: none;
  height: 4vh;
  margin-right: 2px;
  font-size: 12px;
  box-shadow: 3px 4px 15px -1px rgba(0, 0, 0, 0.7);
`;

export const ButtonInput = styled.button`
  background-color: #ffe082;
  outline: none;
  border: none;
  height: 4.3vh;
  width: 8%;
  margin-right: 5px;
  font-size: 12px;
  text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.94);
  box-shadow: 3px 4px 15px -1px rgba(0, 0, 0, 0.7);
  border-radius: 2px;
  color: white;
  font-weight: bold;
`;
export const SideBarButtonDropdown = styled.button`
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
    background-color: #2aceb6;
    padding-top: 15px;
    padding-bottom: 15px;
    color: #000;
  }
`;

export const ConfigDropdown = styled.div`
  width: 15vw;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  margin-top: 17px;
  margin-left: -6px;
`;

export const SideBarButtonConfig = styled.button`
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

export const DivNav = styled.div`
  width: 73%;
  margin-left: 50px;
  display: flex;
  justify-content: space-between;
`;
