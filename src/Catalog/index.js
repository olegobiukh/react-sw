import React, { Component } from "react";

import { getAll } from "../api";
import config from "../config";
import Datatable from "./Datatable";

class Catalog extends Component {
  state = {
    data: [],
    config,
    api: ""
  };

  componentDidMount() {
    this.updatePageFromURL();
  }

  componentDidUpdate() {
    this.updatePageFromURL();
  }

  updatePageFromURL = () => {
    const { api } = this.props.match.params;

    if (api === this.state.api) {
      return;
    }

    getAll(api).then(data => {
      this.setState({ data, api });
    });
  };

  render() {
    const { api } = this.state;

    const data = this.state.data.results || [];

    return <Datatable api={api} data={data} config={config} />;
  }
}

export default Catalog;
