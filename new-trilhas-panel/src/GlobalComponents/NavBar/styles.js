import styled from "styled-components";

export const Container = styled.div``;

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
