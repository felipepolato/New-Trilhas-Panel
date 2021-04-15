import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default ({
  title,
  message,
  confirmTitle,
  confirmOnClick,
  cancelTitle,
  cancelOnClick,
  pageToReturn,
}) => {
  let linkToReturn = `${pageToReturn}`;
  return (
    <TrilhasAlertContainer>
      <TrilhasAlertBox>
        <TrilhasAlertBoxHeader>{title}</TrilhasAlertBoxHeader>

        <TrilhasAlertBoxContent>{message}</TrilhasAlertBoxContent>

        <TrilhasAlertBoxFooter>
          <Link
            to={linkToReturn}
            onClick={cancelOnClick}
            style={{ width: "50%", height: "25px" }}
          >
            <TrilhasAlertBoxFooterButtonConfirm
              type="button"
              onClick={confirmOnClick}
            >
              {confirmTitle}
            </TrilhasAlertBoxFooterButtonConfirm>
          </Link>
          <TrilhasAlertBoxFooterButtonCancel
            type="button"
            onClick={cancelOnClick}
          >
            {cancelTitle}
          </TrilhasAlertBoxFooterButtonCancel>
        </TrilhasAlertBoxFooter>
      </TrilhasAlertBox>
    </TrilhasAlertContainer>
  );
};

const TrilhasAlertContainer = styled.div`
  position: fixed;
  display: flex;
  z-index: 7;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: center;
`;

const TrilhasAlertBox = styled.div`
  position: fixed;
  z-index: 8;
  width: 20vw;
  background-color: #fff;
  -webkit-box-shadow: 5px 5px 15px -4px #000000;
  box-shadow: 5px 5px 15px -4px #000000;
  border-radius: 5px;
`;

const TrilhasAlertBoxHeader = styled.div`
  width: 100%;
  height: 20px;
  z-index: 9;
  background-color: #1179b6;
  text-align: center;
  color: #fff;
  padding-bottom: 5px;
  padding-top: 5px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.67);
`;

const TrilhasAlertBoxContent = styled.div`
  width: 100%;
  padding-bottom: 15px;
  padding-top: 15px;
  z-index: 9;
  text-align: center;
  color: #000;
  font-weight: bold;
`;

const TrilhasAlertBoxFooter = styled.div`
  width: 100%;
  height: 20px;
  z-index: 9;
  background-color: #1179b6;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: row;
`;

const TrilhasAlertBoxFooterButtonConfirm = styled.button`
  border: none;
  outline: none;
  width: 100%;
  height: 25px;
  color: #fff;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.67);
  background-color: rgba(42, 206, 182, 0.8);
  border-radius: 0px 0px 0px 5px;
`;

const TrilhasAlertBoxFooterButtonCancel = styled.button`
  border: none;
  outline: none;
  width: 50%;
  height: 25px;
  color: #fff;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.67);
  background-color: rgba(249, 72, 39, 0.8);
  border-radius: 0px 0px 5px 0px;
`;
