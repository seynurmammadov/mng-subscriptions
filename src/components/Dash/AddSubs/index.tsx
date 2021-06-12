import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
/*
name: string;
  fee?: number;
  createdDate: Date;
  nextPaymentDate: Date;
  isSubscribed: boolean;
  category?: ICategory;
  mUser?: IUser;
  card?: ICards;
*/

export default function AddNewSubs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          />
          <TextField
            autoFocus
            margin="dense"
            id="fee"
            label="Fee"
            type="fee"
            fullWidth
          />
          <TextField
            id="date"
            label="CreatedAt"
            type="date"
            defaultValue="2017-05-24"
            fullWidth
            name="CreatedAt"
            InputLabelProps={{
              shrink: true,
            }}
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
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
