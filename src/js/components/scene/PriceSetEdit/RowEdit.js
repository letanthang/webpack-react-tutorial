import React, { Component } from 'react';

class RowEdit extends Component {
  constructor(props) {
    super(props)
    this.state = { item: props.item }
  }
  onInputChange = (text, field) => {
    this.setState({ item: { ...item, [field]: text } })
  }
  render() {
    console.log(this.state)
    const { item } = this.state
    const { t, onEdit } = this.props
    return (
      <tr>
        <td></td>
        <td><input type="text" className="form-control" onChange={(e) => this.onInputChange(e.target.value, "airline")} value={item.airline} required /></td>
        <td><input type="text" className="form-control" onChange={(e) => this.onInputChange(e.target.value, "airway")} value={item.airway} required /></td>
        <td><input type="text" className="form-control" onChange={(e) => this.onInputChange(e.target.value, "airgroup")} value={item.airgroup} required /></td>
        <td><input type="text" className="form-control" onChange={(e) => this.onInputChange(e.target.value, "cargo_type")} value={item.cargo_type} required /></td>
        <td><input type="text" className="form-control" onChange={(e) => this.onInputChange(e.target.value, "level1")} value={item.level1} required /></td>
        <td><input type="text" className="form-control" onChange={(e) => this.onInputChange(e.target.value, "level2")} value={item.level2} required /></td>
        <td><input type="text" className="form-control" onChange={(e) => this.onInputChange(e.target.value, "level3")} value={item.level3} required /></td>
        <td className="text-right">
          <button>{t('priceset:save')}</button>
          <button onClick={onEdit}>{t('priceset:cancel')}</button>
        </td>
      </tr>
    );
  }
}

export default RowEdit;
