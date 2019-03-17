import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { getOne, getByUrl } from "../api";
import { dataDisplayNot, dataDisplayOut } from "../config";

class Page extends Component {
  state = {
    configCategories: null,
    data: null,
    api: "",
    id: "",
    content: null
  };

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    const { id, api } = this.props.match.params;

    if (this.state.id === id && this.state.api === api) {
      return;
    }

    this.loadData();
  }

  async loadData() {
    const { api, id } = this.props.match.params;

    const data = await getOne(api, id);

    const films =
      data.hasOwnProperty("films") &&
      (await Promise.all(data.films.map(itemUrl => getByUrl(itemUrl))));

    const species =
      data.hasOwnProperty("species") &&
      (await Promise.all(data.species.map(itemUrl => getByUrl(itemUrl))));

    const vehicles =
      data.hasOwnProperty("vehicles") &&
      (await Promise.all(data.vehicles.map(itemUrl => getByUrl(itemUrl))));

    const starships =
      data.hasOwnProperty("starships") &&
      (await Promise.all(data.starships.map(itemUrl => getByUrl(itemUrl))));

    const characters =
      data.hasOwnProperty("characters") &&
      (await Promise.all(data.characters.map(itemUrl => getByUrl(itemUrl))));

    const people =
      data.hasOwnProperty("people") &&
      (await Promise.all(data.people.map(itemUrl => getByUrl(itemUrl))));

    const residents =
      data.hasOwnProperty("residents") &&
      (await Promise.all(data.residents.map(itemUrl => getByUrl(itemUrl))));

    const planets =
      data.hasOwnProperty("planets") &&
      (await Promise.all(data.planets.map(itemUrl => getByUrl(itemUrl))));

    this.setState({
      id,
      api,
      data: {
        ...data,
        films: films || [],
        species: species || [],
        vehicles: vehicles || [],
        starships: starships || [],
        characters: characters || [],
        planets: planets || [],
        people: people || [],
        residents: residents || []
      }
    });
  }
  handleBigImgError = event => {
    event.target.onError = null;
    event.target.src =
      "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
    event.target.height = "400";
    event.target.width = "100";
  };

  handleImgError = event => {
    event.target.onError = null;
    event.target.src =
      "https://starwars-visualguide.com/assets/img/placeholder-small.jpg";
  };

  render() {
    const data = this.state.data;
    const { api, id } = this.state;

    return (
      <div>
        <div className="Page">
          <div className="Page__img-big">
            <img
              src={`https://starwars-visualguide.com/assets/img/${
                api !== "people" ? api : "characters"
              }/${id}.jpg`}
              alt="star wars"
              onError={this.handleBigImgError.bind(this)}
            />
          </div>

          <div className="Page__data">
            {data ? (
              Object.keys(data).map((key, order) => {
                if (
                  !dataDisplayNot.includes(key) &&
                  !dataDisplayOut.includes(key) &&
                  data[key] !== "unknown"
                ) {
                  if (key === "name" || key === "title") {
                    return <h1 key={order}>{data[key]}</h1>;
                  } else {
                    return (
                      <p key={key}>
                        <span
                          className={key === "opening_crawl" ? "Page__key" : ""}
                        >
                          {key}:
                        </span>
                        {data[key]}
                      </p>
                    );
                  }
                }
              })
            ) : (
              <div className="loading" />
            )}
          </div>
        </div>
        <div className="grid">
          {data &&
            dataDisplayOut.map((category, clue) => {
              return (
                data.hasOwnProperty(category) &&
                data[category].length !== 0 && (
                  <div key={clue} className="Page-Category">
                    <div className="Page-Category__title">
                      <strong>Related {category}</strong>
                    </div>
                    {data[category].map((item, i) => {
                      const index = item.url
                        ? item.url.match(/\d+/g)[0]
                        : item.match(/\d+/g)[0];

                      return (
                        <div key={i} className="Page-Category__box">
                          <img
                            className="Page-Category__image"
                            src={`https://starwars-visualguide.com/assets/img/${
                              /(people|pilots|residents)/gi.test(category)
                                ? "characters"
                                : category
                            }/${index}.jpg`}
                            alt="Star Wars"
                            onError={this.handleImgError.bind(this)}
                          />
                          <p>
                            <NavLink
                              to={`/${
                                /(characters|people|pilots|residents)/gi.test(
                                  category
                                )
                                  ? "people"
                                  : category
                              }/${index}`}
                            >
                              {item.name || item.title}
                            </NavLink>
                          </p>
                        </div>
                      );
                    })}
                  </div>
                )
              );
            })}
        </div>
      </div>
    );
  }
}

export default Page;
