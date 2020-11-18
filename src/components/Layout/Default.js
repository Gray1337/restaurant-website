import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled, {css} from "styled-components";

const PageHeader = styled.div`
  ${(props) =>
    props.fixed &&
    css`
      position: fixed;
      z-index: 1;
    `}
`;

const Default = ({ children, fixedHeader }) => {
  return (
    <div>
      <PageHeader fixed={fixedHeader}>
        <Header />
      </PageHeader>
      <div>{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default Default;
