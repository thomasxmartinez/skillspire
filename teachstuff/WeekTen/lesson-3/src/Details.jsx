import React, { Component } from 'react';
import axios from 'axios';

class Details extends Component {
  state = {
    apiData: { varieties: '' }
  };
  componentDidMount() {
    axios
      .get(
        `http://pokeapi.co/api/v2/generation/3/
${this.props.id.name}`
      )
      .then((response: { data: { varieties: string } }) => {
        this.setState({ apiData: response.data });
      });
  }
  props: {
    name: Name
  };
  render() {
    const { name, names, color, egg_groups, pal_park_encounters } = this.props.name;
    let varietiesComponent;
    if (this.state.apiData.varieties) {
      varietiesComponent = <h3>{this.state.apiData.varieties}</h3>;
    } else {
      return <h1>NOOOO</h1>;
    }
    return (
      <div className="details">
        <section>
          <h1>{name}</h1>
          <h2>({color})</h2>
          {varietiesComponent}
          {egg_groups}/>
          <p>{names}</p>
        </section>
        <div>
          {pal_park_encounters}
          />
        </div>
      </div>
    );
  }
}

export default Details;
