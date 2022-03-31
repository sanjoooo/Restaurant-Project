import React, { Component } from "react";
import axios from "axios";
class Admin extends Component {
  constructor() {
    super();
    this.state = {
      menus: { mname: "", description: "", price: "" },
      editId: "",
      showMessage: "",
      arrMenus: [],
    };
  }
  componentDidMount() {
    this.loadData();
  }
  onChangeHandler = (e) => {
    let { name, value } = e.target;
    let { menus } = this.state;
    this.setState({ menus: { ...menus, [name]: value } });
  };
  onEdit = (menu) => {
    let { menus } = this.state;
    menus.mname = menu.mname;
    menus.description = menu.description;
    menus.price = menu.price;
    this.setState({ editId: menu._id, menus });
  };
  loadData = () => {
    axios.get("http://localhost:8181/menunew").then((response) => {
      this.setState({ arrMenus: response.data });
    });
  };
  onDelete = (mid) => {
    axios
      .delete("http://localhost:8181/menunew/deleteMenu/" + mid)
      .then((resp) => {
        console.log("Delete ", resp);
        this.loadData();
      });
  };
//   onSubmitt = (e) => {
//     e.preventDefault();
//     const URL = "http://localhost:8181/menunew/addMenu";
//     axios.post(URL, this.state.menus).then((response) => {
//       console.log(response);
//     });
//   };
  onSubmitt = (e) => {
    e.preventDefault();
    const URL = "http://localhost:8181/menunew/addMenu";
    axios.post(URL, this.state.menus).then((response) => {
      console.log(response);
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { menus, editId } = this.state;
    const URL = "http://localhost:8181/menunew/updateMenu/" + editId;
    axios.put(URL, this.state.menus).then((response) => {
      console.log(response);
      this.loadData();
    });
  };
  render() {
    const { menus, showMessage, arrMenus } = this.state;
    return (
      <>
        <div>
          <table>
            <tbody>
              {arrMenus.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td>{item.mname}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td>
                      <button
                        className="btn btn-info"
                        onClick={() => this.onEdit(item)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => this.onDelete(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="text-left">
          <span className="alert-success">{showMessage}</span>
          <form onSubmit={this.onSubmit}>
            <h5>Add Menu</h5>
            <div className="form-group">
              <label>Menu Name</label>
              <input
                type="text"
                className="form-control"
                name="mname"
                value={menus.mname}
                onChange={this.onChangeHandler}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                className="form-control"
                name="description"
                value={menus.description}
                onChange={this.onChangeHandler}
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type="text"
                className="form-control"
                name="price"
                value={menus.price}
                onChange={this.onChangeHandler}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-info" type="submit">
                Update
              </button>
            </div>
          </form>
        </div>

        <div>
          <span className="alert-success">{showMessage}</span>
          <form onSubmit={this.onSubmitt}>
            <h5>Add Menu</h5>
            <div className="form-group">
              <label>Menu Name</label>
              <input
                type="text"
                className="form-control"
                name="mname"
                value={menus.pname}
                onChange={this.onChangeHandler}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                className="form-control"
                name="description"
                value={menus.description}
                onChange={this.onChangeHandler}
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type="text"
                className="form-control"
                name="price"
                value={menus.price}
                onChange={this.onChangeHandler}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-success" type="submit">
                AddMenu
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Admin;
