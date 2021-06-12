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

export default function AddNewSubs() {
  const [open, setOpen] = React.useState(false);
  const [addedSubs, setSubs] = React.useState(false);
  const [inputVal, setInputVal] = React.useState<ISubs>({
    name: "",
    fee: 0,
    createdDate: moment(Date.now()).format("yyyy-MM-DD "),
    nextPaymentDate: Date,
    subscribed: true,
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
      if (name === "fee") {
        setInputVal((prevState) => ({
          ...prevState,
          [name]: parseInt(value),
        }));
      }
      if (name === "createdDate") {
        setInputVal((prevState) => ({
          ...prevState,
          [name]: moment(value).format("yyyy-MM-DD "),
        }));
      }
    },
    [setInputVal]
  );
  const dispatch = useDispatch();

  const handleSubmit = React.useCallback(() => {
    createSubscription(dispatch, inputVal);
    handleClose();
  }, [inputVal, dispatch]);

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add new Subs
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
            name="fee"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            id="date"
            label="CreatedDate"
            type="date"
            defaultValue={moment().format("yyyy-MM-DD ")}
            fullWidth
            name="createdDate"
            InputLabelProps={{
              shrink: true,
            }}
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
