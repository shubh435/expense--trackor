import {
  Box,
  Button,
  FormControl,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { Component } from "react";
import CloseIcon from "@material-ui/icons/Close";
interface Props {
  open: boolean;
  handleClose: () => void;
  money: number | string;
  handleonChangeMoney: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitAmount: () => void;
  openEditModal: boolean;
  handleChangeReasonFor: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reasonFor: string;
  handleSubmitOnTransactionDebit: () => void;
}
interface State {}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: 400, sm: 400 },
  bgcolor: "#fff",
  border: "1px solid #ccc",
  boxShadow: 24,
  p: 4,
};

export default class ModalCompo extends Component<Props, State> {
  render() {
    return (
      <Modal
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ positon: "relative", top: 0, right: 0, width: "100%" }}>
            <Button
              sx={{
                position: "absolute",
                top: "-10px",
                right: "-10px",
                borderRadius: "50%",
                minWidth: "30px",
                minHeight: "30px",
                textAlign: "center",
                border: "2px",
              }}
              onClick={this.props.handleClose}
              color="error"
              variant="outlined"
            >
              <CloseIcon style={{ fontSize: "25px" }} />
            </Button>
          </Box>

          <Box>
            <Typography variant="h4" align="center" sx={{ mb: 5 }}>
              {this.props.openEditModal && "New Transaction"}
            </Typography>
            <FormControl sx={{ m: 1, width: "90%" }}>
              <label
                style={{
                  textAlign: "left",
                  fontSize: "18px",
                  fontWeight: "bold",
                  lineHeight: "2",
                }}
                htmlFor="salary"
              >
                Enter your amount here
              </label>
              <TextField
                placeholder="Enter  your amount here"
                id="salary"
                required
                value={this.props.money}
                onChange={this.props.handleonChangeMoney}
              />
            </FormControl>
            {this.props.openEditModal && (
              <FormControl sx={{ m: 1, width: "90%" }}>
                <label
                  style={{
                    textAlign: "left",
                    fontSize: "18px",
                    fontWeight: "bold",
                    lineHeight: "2",
                  }}
                  htmlFor="reason"
                >
                  Enter your transaction name
                </label>
                <TextField
                  placeholder="Enter  your reason for transaction "
                  id="reason"
                  required
                  value={this.props.reasonFor}
                  onChange={this.props.handleChangeReasonFor}
                />
              </FormControl>
            )}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                mt: "20px",
              }}
            >
              {this.props.openEditModal ? (
                <Button
                  color="success"
                  variant="contained"
                  sx={{ width: "40%" }}
                  disabled={
                    this.props.money === "" || this.props.reasonFor === ""
                  }
                  onClick={this.props.handleSubmitOnTransactionDebit}
                >
                  paid
                </Button>
              ) : (
                <Button
                  color="success"
                  variant="contained"
                  sx={{ width: "40%" }}
                  disabled={this.props.money === ""}
                  onClick={this.props.handleSubmitAmount}
                >
                  Submit
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Modal>
    );
  }
}
