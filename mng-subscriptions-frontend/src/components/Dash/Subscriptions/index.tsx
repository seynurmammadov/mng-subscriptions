import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "../Title/index";
import { useSelector } from "react-redux";
import "./style.scss";
import moment from "moment";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
// import Title from "../";

// Generate Order Data

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

interface ISubscriptions {
  id?: number;
  createdDate: Date;
  fee: number;
  isSubscribed: boolean;
  name: string;
  nextPaymentDate: string;
}

interface ISubState {
  subs: { data: { list: ISubscriptions[] } };
}

export default function Orders() {
  const { list: subscriptions } = useSelector(
    (state: ISubState) => state.subs.data
  );
  return (
    <React.Fragment>
      <Title>Subscriptions</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Created Date</TableCell>
            <TableCell onClick={() => console.log(subscriptions)}>
              Fee
            </TableCell>
            <TableCell>Is Subscribed</TableCell>
            <TableCell align="right">Next Payment Date</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subscriptions?.map((row, idx) => (
            <TableRow key={row.id}>
              <TableCell>{idx + 1}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                {moment(row.createdDate).format("MMM Do YY")}
              </TableCell>
              <TableCell>{row.fee}</TableCell>
              <TableCell>
                {row.isSubscribed ? (
                  <span style={{ background: "green" }} className="isSubs">
                    {" "}
                    Actived
                  </span>
                ) : (
                  <span style={{ background: "red" }} className="isSubs">
                    Deactived
                  </span>
                )}
              </TableCell>
              <TableCell align="right">{row.nextPaymentDate}</TableCell>
              <TableCell align="right">
                <span className="actionSubs">
                  <EditOutlinedIcon />
                </span>
                <span className="actionSubs">
                  <DeleteForeverIcon />
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
