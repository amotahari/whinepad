/* @flow */

import React, {Component} from 'react';

type Props = {
  id?: string,
  defaultValue?: string,
  options: Array<string>,
};

type State = {
  value: string,
};

class Suggest extends Component<Props, State> {

  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = {value: props.defaultValue || ''};
  }

  getValue(): string {
    return this.state.value;
  }

  render() {
    const randomId: string = Math.random().toString(16).substring(2);
    return (
      <div>
        <input
          list={randomId}
          defaultValue={this.props.defaultValue}
          onChange={e => this.setState({value: e.target.value})}
          id={this.props.id} />
        <datalist id={randomId}>{
          this.props.options.map((item: string, idx: number) =>
            <option value={item} key={idx} />
          )
        }</datalist>
      </div>
    );
  }
}

export default Suggest
