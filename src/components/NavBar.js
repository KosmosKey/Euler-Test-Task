import { Button, Container } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useEthers } from "@usedapp/core";
import "./navbar.scss";

const NavBar = () => {
  const { activateBrowserWallet, account } = useEthers();

  return (
    <div className="navigationBar">
      <Container>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>Euler Test Task</h1>
        </Link>
        <Button onClick={activateBrowserWallet}>
          {account ? `Wallet Address: ${account}` : "Connect Wallet"}
        </Button>
      </Container>
    </div>
  );
};

export default NavBar;
