import React, { Component } from 'react';
import AircraftRow from './row'
import {
  Card,
  Table,
  Button
} from 'react-bootstrap'
import { withTranslation } from 'react-i18next';

const planes = [{ "id": 3, "is_active": true, "created_at": "2019-07-22T06:21:54.863643Z", "updated_at": "2019-07-22T06:21:54.863643Z", "name": "Boeing 787 Dreamliner\n", "type": "Boeing", "cargo_max_width": 100, "cargo_max_length": 1000, "cargo_max_bulk": 1000, "cargo_max_container": 10, "package_type": "1", "is_deleted": false }, { "id": 4, "is_active": true, "created_at": "2019-07-22T06:24:09.657836Z", "updated_at": "2019-07-22T06:24:09.657836Z", "name": "Airbus A320\n", "type": "Airbus", "cargo_max_width": 100, "cargo_max_length": 1000, "cargo_max_bulk": 1000, "cargo_max_container": 10, "package_type": "3", "is_deleted": false }, { "id": 5, "is_active": true, "created_at": "2019-08-01T10:32:11.442462Z", "updated_at": "2019-08-01T10:32:11.442462Z", "name": "Airbus A321-231", "type": "A321", "cargo_max_width": 0, "cargo_max_length": 0, "cargo_max_bulk": 0, "cargo_max_container": 0, "package_type": "1", "is_deleted": false }, { "id": 8, "is_active": true, "created_at": "2019-08-01T10:34:16.590896Z", "updated_at": "2019-08-01T10:34:16.590896Z", "name": "Airbus A320-214\n", "type": "A320", "cargo_max_width": 0, "cargo_max_length": 0, "cargo_max_bulk": 0, "cargo_max_container": 0, "package_type": "1", "is_deleted": false }]

class Aircraft extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: planes
    }
  }
  async componentDidMount() {

  }

  render() {
    const { data } = this.state
    const { t, i18n } = this.props
    return (
      <div className="animated fadeIn">
        <Card>
          <div className="card-header">
            {t('aircraft:table_name')}
            <div className="card-header-actions">
              <Button color="primary" size="sm">{t('add_new')}</Button>
            </div>
          </div>
          <div>
            <Table responsive striped>
              <thead>
                <tr style={{ backgroundColor: "lightgray" }}>
                  <th>{t('aircraft:name')}</th>
                  <th>{t('aircraft:code')}</th>
                  <th>{t('aircraft:type')}</th>
                  <th>{t('aircraft:cargo_max_width')}</th>
                  <th>{t('aircraft:cargo_max_container')}</th>
                  <th>{t('aircraft:package_type')}</th>
                  <th className="text-right" > </th>
                </tr>
              </thead>
              <tbody>
                {
                  data.length > 0 ?
                    data.map((v, index) =>
                      <AircraftRow
                        key={index}
                        item={v}
                        {...this.props}
                      />
                    ) : <tr><td style={{ textAlign: "center" }} colSpan="5">Không có dữ liệu</td></tr>
                }
              </tbody>
            </Table>
          </div>
        </Card>
      </div>
    );
  }
}
const AircraftPage = withTranslation()(Aircraft);

export default AircraftPage
