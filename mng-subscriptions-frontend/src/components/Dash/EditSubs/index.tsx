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
import { createSubscription } from "../../../redux/actions/Subscription";
import { useDispatch } from "react-redux";

export default function EditSubs() {
  const [open, setOpen] = React.useState(false);
  const [inputVal, setInputVal] = React.useState<ISubs>({
    name: "",
    fee: 0,
    createdDate: Date,
    nextPaymentDate: Date,
    isSubscribed: true,
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
      if (name === "createdDate" || name === "nextPaymentDate") {
        setInputVal((prevState) => ({
          ...prevState,
          [name]: moment(value).format("MMM Do YY"),
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
            defaultValue="2017-05-24"
            fullWidth
            name="createdDate"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
          />
          <TextField
            id="date"
            label="nextPaymentDate"
            type="date"
            defaultValue="2017-05-24"
            fullWidth
            name="nextPaymentDate"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
          />
          <FormControl style={{ width: "100%" }}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              style={{ width: "100%" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ width: "100%" }}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              style={{ width: "100%" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
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
