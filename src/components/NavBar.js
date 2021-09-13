import { Button, Container } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useEthers, useEtherBalance } from "@usedapp/core";

import "./navbar.scss";

const NavBar = () => {
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  return (
    <div className="navigationBar">
      <Container>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>Euler Test Task</h1>
        </Link>
        <Button onClick={activateBrowserWallet}>
          Wallet Address: {account ? account : "Connect Wallet"}
        </Button>
      </Container>
    </div>
  );
};

export default NavBar;
