import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
interface Props {
  openModal: () => void;
  amount: number | string;
  isAddButton: boolean;
  handleDebitedTransactions: () => void;
}
export default class Header extends Component<Props, any> {
  render() {
    return (
      <Container
        maxWidth="xl"
        sx={{ maxWidth: { xs: "100%", md: "xl" } }}
        
      >
        <AppBar position="static" >
          <Toolbar>
            <Button variant="contained" onClick={() => this.props.openModal()}>
              {this.props.amount ? this.props.amount : " Add Money"}
            </Button>
            <Typography
              variant="h6"
              component="div"
              align="center"
              sx={{ flexGrow: { xs: 1, md: 1 }, fontSize: "14px" }}
            >
              EXPENSE TRACKER
            </Typography>
            {this.props.isAddButton && (
              <Button
                color="info"
                onClick={() => this.props.handleDebitedTransactions()}
                variant="contained"
              >
                <AddIcon />
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Container>
    );
  }
}
