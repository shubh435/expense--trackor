import { Container, Paper, Stack, styled, Typography } from "@mui/material";
import React, { Component } from "react";
import { Transaction } from "../App";
interface Props {
  transactions: Transaction[];
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default class Transactions extends Component<Props, any> {
  render() {
    return (
      <Container maxWidth="xl" sx={{ mt: 5 }}>
        <Stack spacing={2}>
          {this.props.transactions &&
            this.props.transactions.map((trans: Transaction) => (
              <Item
                key={trans.id}
                className={`${
                  !trans.isCredited ? "border-red" : "border-green"
                } border--item  `}
              >
                <Typography >{trans.name}</Typography>
                <Typography color={trans.isCredited ? "success" : "error"}>
                  {trans.isCredited ? "cr" : "dr"}
                </Typography>
                <Typography>{trans.transactionMoney}/-</Typography>
              </Item>
            ))}
        </Stack>
      </Container>
    );
  }
}
