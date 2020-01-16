import React, { Component } from "react";
import { Table } from "reactstrap";
import NewMemberModal from "./NewMemberModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class MemberList extends Component {
  render() {
    const members = this.props.members;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Почта</th>
            <th>Описание</th>
            <th>Телефон</th>
            <th>Дата регистрации</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!members || members.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            members.map(member => (
              <tr key={member.pk}>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.document}</td>
                <td>{member.phone}</td>
                <td>{member.registrationDate}</td>
                <td align="center">
                  <NewMemberModal
                    create={false}
                    member={member}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={member.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default MemberList;