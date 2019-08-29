import React, { Component } from 'react';
import RowEdit from './RowEdit'

class Row extends Component {
  constructor() {
    super()
    this.state = { edit: false }
  }
  onEdit = () => {
    this.setState({ edit: !this.state.edit })
  }
  render() {
    if (this.state.edit) {
      return <RowEdit {...this.props} onEdit={this.onEdit} />
    }

    const { item, t } = this.props
    return (
      <tr>
        <td>{item.index}</td>
        <td>{item.airline}</td>
        <td>{item.airway}</td>
        <td>{item.airgroup}</td>
        <td>{item.cargo_type}</td>
        <td>{item.level1}</td>
        <td>{item.level2}</td>
        <td>{item.level3}</td>
        <td className="text-right">
          <button onClick={this.onEdit}>{t('priceset:edit')}</button>
          <button>{t('priceset:delete')}</button>
        </td>
      </tr>
    );
  }
}

export default Row;
