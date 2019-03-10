import React from "react";
import { NavLink } from "react-router-dom";
// import queryString from "query-string";

import * as peopleApi from "../api/people";
import Pagination from "../Common/Pagination";

class PeoplePage extends React.Component {
  state = {
    config: {
      name: {
        title: ["name", "title"], // в таблице колонка будет так называться
        isSortable: true, // Поиск будет проверять эту и последнюю колонки
        isSearchable: true
      },
      age: {
        title: [
          "birth_year",
          "diameter",
          "episode_id",
          "average_height",
          "skin_colors",
          "passengers"
        ],
        isSortable: true // по этой колонке можно сортировать
      },
      snippet: {
        // Только для тех ключей которые есть в columnConfig будут колонки в таблице
        title: ["gender", "terrain", "opening_crawl", "manufacturer"],
        isSearchable: true // В этой колонке тоже будет происходить поиск query
      }
    },
    columns: {
      people: ["name", "birth_year", "gender"]
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
    console.log(this.props.match);
    if (category !== this.state.category) {
      this.setState({ page, category }, this.loadPeople);

      return;
    }

    if (page === this.state.page) {
      return;
    }

    this.setState({ page, category }, this.loadPeople);
  }

  loadPeople = async () => {
    const { page, category } = this.state;
    const { count, results: people } = await peopleApi.getAll({
      category,
      page
    });

    this.setState({
      people,
      count,
      isLoaded: true
    });
  };

  render() {
    const { people, isLoaded, count, page, category } = this.state;
    return (
      <div className="PeoplePage">
        <h1>People page</h1>

        {isLoaded ? (
          <>
            <Pagination count={count} page={page} />
            <ul>
              {people.map(person => (
                <li key={person.name || person.title}>
                  <NavLink to={`./${category}/${person.url.match(/\d+/g)[0]}`}>
                    {person.name || person.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default PeoplePage;
