import React from "react";
import { NavLink } from "react-router-dom";
// import queryString from "query-string";

import * as peopleApi from "../api/people";
import Pagination from "../Common/Pagination";

class PeoplePage extends React.Component {
  state = {
    columns: {
      people: ["name", "height", "birth_year"],
      films: ["title", "episode_id", "release_date"],
      planets: ["name", "diameter", "terrain"],
      species: ["name", "average_height"],
      starships: ["name", "cost_in_credits", "model"],
      vehicles: ["name", "model", "cost_in_credits"]
    },

    isLoaded: false,
    page: 0,
    count: 0,
    people: [],
    category: "",
    search: ""
  };

  componentDidMount() {
    this.updatePageFromURL();
  }

  componentDidUpdate() {
    this.updatePageFromURL();
  }

  updatePageFromURL() {
    const { location } = this.props;
    const urlParams = new URLSearchParams(location.search);
    const page = +urlParams.get("page") || 1;

    const category = this.props.match.params.category;

    const search = document.location.search.includes("search")
      ? document.location.search.substring(8)
      : "";

    if (search !== this.state.search) {
      this.setState({ page, category, search }, this.loadPeople);

      return;
    }

    if (category !== this.state.category) {
      this.setState({ page, category, search }, this.loadPeople);

      return;
    }

    if (page === this.state.page) {
      return;
    }

    this.setState({ page, category, search }, this.loadPeople);
  }

  loadPeople = async () => {
    const { search, page, category } = this.state;

    const { count, results: people } = await peopleApi.getAll({
      category,
      page,
      search
    });

    this.setState({
      people,
      count,
      isLoaded: true
    });
  };

  render() {
    const { people, isLoaded, count, page, category, columns } = this.state;
    const swData = people.map(item => (
      <tr key={item.name}>
        {columns[category].map(prop => {
          const index = item.url.match(/\d+/g)[0];
          return (
            <td key={item[prop]}>
              {prop === columns[category][0] ? (
                <NavLink to={`/${category}/${index}`}>{item[prop]}</NavLink>
              ) : (
                item[prop]
              )}
            </td>
          );
        })}
      </tr>
    ));
    return (
      <div className="PeoplePage">
        <h2>{category} page</h2>

        {isLoaded ? (
          <>
            <Pagination count={count} page={page} />
            <table key={category} className="table">
              <thead>
                <tr className="thead-dark">
                  {columns[category].map(key => (
                    <th>{key.replace("_", " ")}</th>
                  ))}
                </tr>
              </thead>
              {people.map(person => (
                <tbody>{swData}</tbody>
              ))}
            </table>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default PeoplePage;
