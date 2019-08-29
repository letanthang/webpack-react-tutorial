import React, { Component } from 'react';

class AircraftRow extends Component {
  render() {
    const { item } = this.props
    return (
      <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.type}</td>
        <td>{item.cargo_max_width}</td>
        <td>{item.cargo_max_container}</td>
        <td className="text-right">{item.package_type}</td>
      </tr>
    );
  }
}

export default AircraftRow;
