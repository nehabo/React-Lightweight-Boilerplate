import React from 'react';
import TokenInput from 'react-tokeninput';
import { Option } from 'react-tokeninput';
import _ from 'lodash';
import stubdata from './stubdata';
import Cart from './cart';
import Options from './options';
require('./styles.css');
const img = require('./spinner.gif');

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      loading: false,
      selected: [],
      options: stubdata,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleChange(value) {
    this.setState({
      selected: value
    });
  }

  handleRemove(value) {
    const selectedOptions = _.uniq(_.without(this.state.selected,value));
    this.handleChange(selectedOptions);
  }

  handleSelect(item) {
    if (typeof item == 'string') {
      return;
    }
    const selected = _.uniq(this.state.selected.concat([item]));
    this.setState({
      selected: selected,
      selectedToken: null,
    });

    this.handleChange(selected);
  }

  handleInput(userInput) {
    this.setState({
      input: userInput,
      loading: true,
      options: []
    });
    setTimeout(() => {
      this.filterTags(this.state.input)
      this.setState({
        loading: false
      });
    }, 500);
  }

  filterTags(userInput) {
    if (userInput === '')
      return this.setState({options: []});
    const filter = new RegExp('^'+userInput, 'i');
    const filteredNames = _.filter(stubdata, (state) =>
      filter.test(state.name)  // || filter.test(state.id);
    ).filter((state) =>
        _.map(this.state.selected, value => value.name)
        .indexOf(state.name) === -1)
    this.setState({
      options: filteredNames
    });
  }

  renderComboboxOptions() {
    return _.map(this.state.options, name =>
      (
        <Option
          key={name.id}
          value={name}
        >{name.name}</Option>
      )
    );
  }

  render() {
    const options = this.state.options.length ?
      this.renderComboboxOptions() : [];


    const loadingComponent = (
      <img src={img} />
    )

    return (
      <div>
        <h1>Bill your Medical Reports</h1>

        <TokenInput
            isLoading={this.state.loading}
            loadingComponent={loadingComponent}
            menuContent={options}
            onChange={this.handleChange}
            onInput={this.handleInput}
            onSelect={this.handleSelect}
            onRemove={this.handleRemove}
            selected={this.state.selected}
            placeholder='Enter tokens here'
          />
        <Options handleSelect={this.handleSelect} options={this.state.options || []} />
        <Cart selected={this.state.selected} />
      </div>
    );
  }}

export default Search;
