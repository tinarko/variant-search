import React from 'react';
import SearchResultsTable from './SearchResultsTable';
import Input from '../core/Input';
import Button, { BUTTON_TYPES } from '../core/Button';
import COLORS from '../../constants/colors';

import * as services from '../../services';
import AutoSearchOptions from './AutoSearchOptions/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      variants: [],
      searchString: '',
      autoSearchOptions: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
  }

  async handleChange(event) {
    const searchString = event.target.value;
    const autoSearchOptions =
      searchString.length >= 2
        ? await services.getAutoSearchOptions(searchString)
        : [];

    this.setState({ searchString, autoSearchOptions });
  }

  async handleClick() {
    const searchString = this.state.searchString;
    const variants = await services.getVariants(searchString);

    this.setState({ variants });
  }

  handleOptionClick(option) {
    return () => {
      this.setState({ searchString: option, autoSearchOptions: [] });
    };
  }

  render() {
    const searchString = this.state.searchString;
    const variants = this.state.variants;
    const autoSearchOptions = this.state.autoSearchOptions;

    return (
      <div style={styles.wrapper}>
        <div style={styles.text}>Please search for a genomic variant, any genomic variant</div>
        <div style={styles.searchBar}>
          <div className="autocomplete" style={styles.input}>
            <Input
              type="search"
              onChange={this.handleChange}
              value={searchString}
              autoComplete="off"
              placeholder="Gene name"
            />
            <AutoSearchOptions
              options={autoSearchOptions}
              onClick={this.handleOptionClick}
            />
          </div>
          <div style={styles.button}>
            <Button
              type={BUTTON_TYPES.SECONDARY}
              label="Search"
              onClick={this.handleClick}
            />
          </div>
        </div>
        <div style={styles.table}>
          <SearchResultsTable data={variants} />
        </div>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    padding: 20
  },
  text: {
    paddingBottom: 10,
    fontSize: '1.17rem',
    color: COLORS.SEAFOAM,
    fontWeight: 'bold'
  },
  searchBar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  input: {
    width: '100%'
  },
  button: {
    paddingLeft: 20,
    height: '100%'
  },
  table: {
    display: 'flex',
    width: '100%',
    paddingTop: 20
  }
};

export default App;
