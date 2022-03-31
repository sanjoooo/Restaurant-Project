import React, { Component } from "react";
import axios from "axios";
class Users extends Component {
  constructor() {
    super();
    this.state = { menu: [] };
  }
  componentDidMount() {
    axios.get("http://localhost:8181/menunew").then((response) => {
      this.setState({ menu: response.data });
    });
  }
  render() {
    let { menu } = this.state;
    return (
      <>
        <table className="card">
          <tbody>
            <tr>
              <th>Menu Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
            {menu.map((item, idx) => {
              return (
                <tr key={idx}>
                  <td>{item.mname}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}
export default Users;
