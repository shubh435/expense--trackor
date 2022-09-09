import Header from "./Components/Header";
import "./App.css";
import React, { Component } from "react";
import ModalCompo from "./Components/ModalCompo";
import SnackbarComp from "./Components/SnackbarComp";
import { AlertColor, Container } from "@mui/material";
import Transactions from "./Components/Transactions";

interface State {
  amount: number;
  money: number | string;
  openModalAddMoney: boolean;
  openSnackbar: boolean;
  message: string;
  type: AlertColor;
  transaction: Transaction[];
  openEditModal: boolean;
  isAddButton: boolean;
  reasonFor: string;
}

export interface Transaction {
  id: string | number;
  transactionMoney: string | number;
  name: string;
  isCredited: boolean;
}
interface Props {}
export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      amount: 0,
      money: "",
      openModalAddMoney: false,
      openSnackbar: false,
      message: "",
      type: "success",
      transaction: [],
      openEditModal: false,
      isAddButton: false,
      reasonFor: "",
    };
  }

  handleCloseModal = () =>
    this.setState({
      openModalAddMoney: false,
    });

  handleCloseSnackbar = () =>
    this.setState({
      openSnackbar: false,
    });

  handleOpenModal = () =>
    this.setState({
      openModalAddMoney: true,
      openEditModal: false,
    });
  handleSubmitAmount = () => {
    this.setState({
      amount: this.state.amount + Number(this.state.money),
      openModalAddMoney: false,

      transaction: [
        ...this.state.transaction,
        {
          id: Date.now(),
          isCredited: true,
          name: "salary",
          transactionMoney: this.state.money,
        },
      ],
      isAddButton: true,
      money: "",
    });
  };

  handleChangeMoney = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) {
      this.setState({
        openSnackbar: true,
        message: "only add the numbers",
        type: "error",
      });
      return false;
    }
    this.setState({
      money: e.target.value,
    });
  };
  handleChangeReasonFor = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      reasonFor: e.target.value,
    });
  };

  handleDebitedTransaction = () => {
    this.setState({
      openModalAddMoney: true,
      openEditModal: true,
    });
  };

  handleSubmitOnTransactionDebit = () => {
    if (this.state.amount < this.state.money) {
      this.setState({
        openSnackbar: true,
        message: "amount should be available to transact",
        type: "error",
      });

      return false;
    }

    this.setState({
      openModalAddMoney: false,
      amount: this.state.amount - Number(this.state.money),
      transaction: [
        ...this.state.transaction,
        {
          id: Date.now(),
          isCredited: false,
          name: this.state.reasonFor,
          transactionMoney: this.state.money,
        },
      ],
      isAddButton: true,
      money: "",
      reasonFor: "",
    });
  };
  render() {
    return (
      <Container maxWidth="xl">
        <Header
          openModal={this.handleOpenModal}
          isAddButton={this.state.isAddButton}
          amount={this.state.amount}
          handleDebitedTransactions={this.handleDebitedTransaction}
        />
        <ModalCompo
          open={this.state.openModalAddMoney}
          money={this.state.money}
          handleonChangeMoney={this.handleChangeMoney}
          handleClose={this.handleCloseModal}
          handleSubmitAmount={this.handleSubmitAmount}
          openEditModal={this.state.openEditModal}
          handleChangeReasonFor={this.handleChangeReasonFor}
          reasonFor={this.state.reasonFor}
          handleSubmitOnTransactionDebit={this.handleSubmitOnTransactionDebit}
        />
        <SnackbarComp
          message={this.state.message}
          open={this.state.openSnackbar}
          type={this.state.type}
          handleCloseSnackbar={this.handleCloseSnackbar}
        />

        <Transactions transactions={this.state.transaction} />
      </Container>
    );
  }
}
