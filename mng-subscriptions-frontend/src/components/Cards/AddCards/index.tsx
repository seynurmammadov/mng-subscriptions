import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { ISubs } from "../../../redux/interface/subscriptions";
import moment from "moment";
import { create } from "domain";
import { subscriptionService } from "../../../Api/Service/Subs";
import {
  createSubscription,
  getAllSubs,
} from "../../../redux/actions/Subscription";
import { useDispatch } from "react-redux";
import { boolean } from "yup";
import { ICards } from "../../../redux/interface/cards";
import { createCard } from "../../../redux/actions/Cards";

export default function AddNewCards() {
  const [open, setOpen] = React.useState(false);
  const [inputVal, setInputVal] = React.useState<ICards>({
    name: "",
    cardNumber: 0,
    expValidation: "",
    CVV: 0,
    balance: 1000,
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = React.useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputVal((prevState) => ({
        ...prevState,
        [name]: value,
      }));
      if (name === "cardNumber") {
        setInputVal((prevState) => ({
          ...prevState,
          [name]: parseInt(value),
        }));
      }
    },
    [setInputVal]
  );
  const dispatch = useDispatch();

  const handleSubmit = React.useCallback(() => {
    dispatch(createCard(inputVal));
    handleClose();
  }, [inputVal, dispatch]);

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add new Cards
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            name="name"
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="fee"
            label="Fee"
            type="fee"
            name="cardNumber"
            fullWidth
            required
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="fee"
            label="CVV"
            type="fee"
            name="CVV"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="name"
            label="Exp Val"
            type="text"
            fullWidth
            name="expValidation"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
