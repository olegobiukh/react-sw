import React, { Component } from "react";

import debounce from "lodash/debounce";

import { getAll } from "../api";
import { config } from "../config";
import Datatable from "./Datatable";
import Pagination from "./components/Pagination";

class Catalog extends Component {
  state = {
    data: null,
    api: "",
    page: 0,
    count: 0,
    location: "",
    query: "",
    inputValue: ""
  };

  componentDidMount() {
    this.updatePageFromURL();
  }

  componentDidUpdate() {
    this.updatePageFromURL();
  }

  updatePageFromURL = () => {
    const { api } = this.props.match.params;
    const { location } = this.props;
    const params = new URLSearchParams(location.search);
    const page = +params.get("page") || 1;
    const query = params.get("search") || "";

    if (!query) {
      window.history.replaceState({}, "", location.pathname);
    }

    if (
      api === this.state.api &&
      page === this.state.page &&
      query === this.state.query
    ) {
      return;
    }

    this.setState({ api, page, location, query }, this.loadData);
  };

  loadData = async () => {
    const { api, page, query } = this.state;
    const { count, results: data } = await getAll({ api, page, query });

    this.setState({
      data,
      count
    });
  };

  setParams({ query }) {
    const searchParams = new URLSearchParams();
    searchParams.set("search", query || "");
    return searchParams.toString();
  }

  updateInputValue = event => {
    this.setState({
      inputValue: event.target.value
    });

    this.updateQuery(event.target.value);
  };

  updateQuery = debounce(query => {
    const url = this.setParams({ query });
    this.props.history.push(`?${url}`);

    this.setState({
      query
    });
  }, 1000);

  render() {
    const { api, page, count, location, query } = this.state;
    const data = this.state.data || [];
    return api ? (
      <>
        <form autocomplete="off">
          <label for="search" class="Search">
            <input
              value={this.state.inputValue}
              onChange={this.updateInputValue}
              type="text"
              id="search"
              placeholder="&nbsp;"
            />
            <span class="label">Search ...</span>
            <span class="border" />
          </label>
        </form>
        <Pagination
          location={location}
          count={count}
          page={page}
          query={query}
        />
        <Datatable api={api} data={data} config={config} />
      </>
    ) : (
      <div className="loading" />
    );
  }
}

export default Catalog;
