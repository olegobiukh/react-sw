import React, { Component } from "react";
import { getAll } from "../api/api";

class Page extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    const { api, id } = this.props.match.params;

    getAll(`${api}/${id}`).then(data => {
      this.setState({ data });
    });
  }

  render() {
    const data = this.state.data;
    return (
      <table className="table">
        <tbody>
          {Object.keys(data).map(key => {
            if (data[key].length !== 0) {
              return (
                <tr key={key}>
                  <td>
                    <b>{key}:</b>
                  </td>
                  <td>{data[key]}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    );
  }
}

export default Page;
