import React, { ReactNode } from "react";
import { theme } from "@/App.styled";
import styled from "styled-components";
import { RiCloseFill } from "react-icons/ri";

const ModalOverlay = styled.div`
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: left;
  align-items: center;
`;

const ModalBox = styled.div`
  display: block;
  background: white;
  width: 25%;
  height: 50%;
  padding: 1rem;
  border-radius: 1rem;
  position: relative;
  margin-left: 5vw;

  .closeButtonDiv {
    position: absolute;
    top: 7%;
    right: 5%;
    display: inline-block;
  }
`;

const CloseButton = styled.button`
  color: ${theme.colors.pink[700]};
  border: 2px solid ${theme.colors.pink[800]};
`;

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <ModalOverlay>
          <ModalBox>
            <div className="closeButtonDiv">
              <CloseButton onClick={props.toggle}>
                {React.createElement(RiCloseFill)}
              </CloseButton>
            </div>
            {props.children}
          </ModalBox>
        </ModalOverlay>
      )}
    </>
  );
}
