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
import { editSubscription } from "../../../redux/actions/Subscription";
import { useDispatch } from "react-redux";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { ISubscriptions } from "../Subscriptions/index";

const EditSubs: React.FC<{ row: ISubscriptions }> = ({ row }) => {
  const [open, setOpen] = React.useState(false);
  const [inputVal, setInputVal] = React.useState<ISubs>({
    name: row.name,
    fee: row.fee,
    createdDate: row.createdDate,
    nextPaymentDate: Date,
    subscribed: row.subscribed,
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
          [name]: moment(value).format("yyyy-MM-DD "),
        }));
      }
    },
    [setInputVal]
  );
  const dispatch = useDispatch();

  const handleSubmit = React.useCallback(() => {
    editSubscription(dispatch, inputVal, row.id);
    handleClose();
  }, [inputVal, dispatch]);

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        <EditOutlinedIcon />
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
            defaultValue={row.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="fee"
            label="Fee"
            type="fee"
            name="fee"
            fullWidth
            defaultValue={row.fee}
            onChange={handleChange}
          />
          <TextField
            id="date"
            label="CreatedDate"
            type="date"
            defaultValue={row.createdDate}
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
};
export default EditSubs;
