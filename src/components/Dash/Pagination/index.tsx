import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllSubs,
  getPaginateSubs,
} from "../../../redux/actions/Subscription";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        marginTop: theme.spacing(2),
      },
    },
  })
);

interface ISubscriptions {
  id?: number;
  createdDate: Date;
  fee: number;
  isSubscribed: boolean;
  name: string;
  nextPaymentDate: string;
}

interface ISubState {
  subs: { data: ISubscriptions[] };
}

export default function PaginationSubs() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const [subsAll, setAllSubs] = React.useState<any>();
  const handlePagination = React.useCallback(
    (e: any) => {
      let currentPage = e.target.textContent;

      if (currentPage) {
        dispatch(getPaginateSubs(Number(currentPage), 10));
        console.log(subsAll);
      } else {
        console.log("target", e.currentTarget);
      }
    },
    [subsAll]
  );

  React.useEffect(() => {
    getAllSubs(setAllSubs);
  }, []);
  return (
    <div className={classes.root}>
      <Pagination
        count={Math.ceil(subsAll?.length / 10)}
        color="primary"
        onClick={handlePagination}
      />
    </div>
  );
}
