import React, { Component } from 'react';
import AircraftRow from './Row'
import {
  Card,
  Table,
  Button
} from 'react-bootstrap'
import { withTranslation } from 'react-i18next';

const planes = [
  { index: 0, "id": 2, "airline": "VietJet", "cargo_type": "Hang thuong", airway: "SGN->HAN", airgroup: "1", level1: 400, level2: 300, level3: 200 },
  { index: 1, "id": 5, "airline": "Vietnam", "cargo_type": "Hang to", airway: "SGN->DAN", airgroup: "2", level1: 400, level2: 300, level3: 0 },
  { index: 2, "id": 3, "airline": "JetStar", "cargo_type": "Hang khung", airway: "SGN->DAN", airgroup: "2", level1: 400, level2: 0, level3: 0 },
  { index: 3, "id": 6, "airline": "JetStar", "cargo_type": "Hang khung", airway: "SGN->HPH", airgroup: "2", level1: 400, level2: 0, level3: 0 },
]

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
    const { t } = this.props
    return (
      <div className="animated fadeIn">
        <Card>
          <div className="card-header">
            {t('priceset:table_name')}
            <div className="card-header-actions">
              <Button color="primary" size="sm">{t('add_new')}</Button>
            </div>
          </div>
          <div>
            <Table responsive striped>
              <thead>
                <tr style={{ backgroundColor: "lightgray" }}>
                  <th width="4%">#</th>
                  <th width="12%">{t('pricesetedit:airline')}</th>
                  <th width="12%">{t('pricesetedit:airway')}</th>
                  <th width="12%">{t('pricesetedit:airgroup')}</th>
                  <th width="12%">{t('pricesetedit:cargo_type')}</th>
                  <th width="12%">{t('pricesetedit:level1')}</th>
                  <th width="12%">{t('pricesetedit:level2')}</th>
                  <th width="12%">{t('pricesetedit:level3')}</th>
                  <th width="24%" className="text-right">{t('priceset:action')}</th>
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
