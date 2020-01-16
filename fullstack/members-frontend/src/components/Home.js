import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import MemberList from "./MemberList";
import NewMemberModal from "./NewMemberModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    members: []
  };

  componentDidMount() {
    this.resetState();
  }

  getMembers = () => {
    axios.get(API_URL).then(res => this.setState({ members: res.data }));
  };

  resetState = () => {
    this.getMembers();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <MemberList
              members={this.state.members}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewMemberModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;