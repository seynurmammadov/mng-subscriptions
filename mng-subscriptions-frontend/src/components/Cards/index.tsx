import React from "react";
import "./style.scss";
import { Container, Row, Col } from "reactstrap";
import { Box, Typography } from "@material-ui/core";
function CardsList() {
  return (
    <div style={{ minHeight: "100vh", marginLeft: "5%", marginTop: "7%" }}>
      <Row container spacing={2}>
        <Box textAlign="center">
          <Typography variant="h2">Cards</Typography>
        </Box>
        <Col md="4">
          <div className="card mb-5">
            <div
              className="card-content"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1586020435958-8298e2cb5f64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=300')",
              }}
            >
              <h1>CARD</h1>
              <p>By Nathaniel Redmon</p>
              <div className="card-cover"></div>
            </div>
          </div>
        </Col>
        <Col md="4">
          <div className="card mb-5">
            <div
              className="card-content"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1586020435958-8298e2cb5f64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=300')",
              }}
            >
              <h1>CARD</h1>
              <p>By Nathaniel Redmon</p>
              <div className="card-cover"></div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CardsList;
