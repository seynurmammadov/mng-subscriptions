import React from "react";
import "./style.scss";
import { Container, Row, Col } from "reactstrap";
import { Box, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getCardsList } from "../../redux/actions/Cards";
import { ICards } from "../../redux/interface/cards";

interface ICard {
  cards: { data: { list: ICards[] } };
}
function CardsList() {
  const dispatch = useDispatch();

  const { data: cards } = useSelector((state: ICard) => state.cards);

  React.useEffect(() => {
    dispatch(getCardsList());
  }, []);
  return (
    <div style={{ minHeight: "100vh", marginLeft: "5%", marginTop: "7%" }}>
      <Row container spacing={2}>
        <Box textAlign="center">
          <Typography variant="h2" onClick={() => console.log(cards.list)}>
            Cards
          </Typography>
        </Box>
        {cards?.list?.map((item) => (
          <Col md="4">
            <div className="card mb-5">
              <div
                className="card-content"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1586020435958-8298e2cb5f64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=300')",
                }}
              >
                <h1>{item.name}</h1> <br />
                <p>{item.cardNumber}</p>
                <div className="card-cover"></div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CardsList;
