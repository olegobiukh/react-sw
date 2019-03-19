import React, { Component } from "react";

import { getOne, getByUrl } from "../api";
import { dataDisplayNot, dataDisplayOut } from "../config";
import PageCategories from "./components/PageCategories";
import Main from "./components/Main";

class Page extends Component {
  state = {
    configCategories: null,
    data: null,
    api: "",
    id: ""
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

    const pilots =
      data.hasOwnProperty("pilots") &&
      (await Promise.all(data.pilots.map(itemUrl => getByUrl(itemUrl))));

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
        residents: residents || [],
        pilots: pilots || []
      }
    });
  }

  render() {
    const data = this.state.data;
    const { api, id } = this.state;

    return (
      <div>
        <Main
          api={api}
          id={id}
          data={data}
          dataDisplayNot={dataDisplayNot}
          dataDisplayOut={dataDisplayOut}
        />
        <PageCategories data={data} dataDisplayOut={dataDisplayOut} />
      </div>
    );
  }
}

export default Page;
