import React, { Component } from "react";
import * as peopleApi from "./api/people";

class Page extends Component {
  state = {
    isLoaded: false,
    page: 0,
    count: 0,
    people: []
  };

  componentDidMount() {
    const { category, id } = this.props.match.params;
    this.loadPeople(category, id);
  }

  loadPeople = async (category, id) => {
    const data = await peopleApi.getById({ category, id });

    this.setState({
      people: data,
      isLoaded: true
    });
  };

  render() {
    const data = this.state.people;
    // console.log(data);
    if (data) {
      return (
        <table className="table">
          <tbody>
            {Object.keys(data).map(key => {
              if (
                data[key].length !== 0 &&
                !data[key].includes("2014") &&
                !data[key].includes("https") &&
                !data[key][0].includes("https")
              ) {
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
    } else {
      return <>Loading</>;
    }
  }
}

export default Page;
