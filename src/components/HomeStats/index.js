import {Component} from 'react'

import './index.css'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
]

class HomeStats extends Component {
  //   state = {confirm: 0, active: 0, recover: 0, decease: 0}
  state = {stats: {}}

  componentDidMount() {
    this.getStatsValue()
  }

  getStatsValue = async () => {
    const dataUrl = 'https://apis.ccbp.in/covid19-state-wise-data'
    const response = await fetch(dataUrl)
    const data = await response.json()
    if (response.ok) {
      this.setState({stats: data})
    }
  }

  confirmCard = () => (
    <div className="stats-card" data-testid="countryWideConfirmedCases">
      <p className="confirm-text">Confirmed</p>
      <img
        src="https://res.cloudinary.com/dbj5bk2gm/image/upload/v1694706180/check-mark_1_qgweay.svg"
        alt="country wide confirmed cases pic"
        className="confirm-logo"
      />
      <p className="confirm-number">0</p>
    </div>
  )

  activeCard = () => (
    <div className="stats-card" data-testid="countryWideActiveCases">
      <p className="active-text">Active</p>
      <img
        src="https://res.cloudinary.com/dbj5bk2gm/image/upload/v1694706180/protection_1_zr1mmz.svg"
        alt="country wide active cases pic"
        className="active-logo"
      />
      <p className="active-number">0</p>
    </div>
  )

  recoverCard = () => (
    <div className="stats-card" data-testid="countryWideRecoveredCases">
      <p className="recover-text">Active</p>
      <img
        src="https://res.cloudinary.com/dbj5bk2gm/image/upload/v1694706180/recovered_1_a1plmu.svg"
        alt="country wide recovered cases pic"
        className="recover-logo"
      />
      <p className="recover-number">0</p>
    </div>
  )

  deceaseCard = () => (
    <div className="stats-card" data-testid="countryWideDeceasedCases">
      <p className="decease-text">Active</p>
      <img
        src="https://res.cloudinary.com/dbj5bk2gm/image/upload/v1694706179/breathing_1_gblta7.svg"
        alt="country wide deceased cases pic"
        className="decease-logo"
      />
      <p className="decease-number">0</p>
    </div>
  )

  convertObjectsDataIntoListItemsUsingForInMethod() {
    const resultList = []
    const {stats} = this.state
    const keyNames = Object.keys(stats)

    keyNames.forEach(keyName => {
      if (stats[keyName]) {
        const {total} = stats[keyName]
        const confirmed = total.confirmed ? total.confirmed : 0
        const deceased = total.deceased ? total.deceased : 0
        const recovered = total.recovered ? total.recovered : 0
        const tested = total.tested ? total.tested : 0
        const population = stats[keyName].meta.population
          ? stats[keyName].meta.population
          : 0
        resultList.push({
          stateCode: keyName,
          name: statesList.find(state => state.state_code === keyName)
            .state_name,
          confirmed,
          deceased,
          recovered,
          tested,
          population,
          active: confirmed - (deceased + recovered),
        })
      }
    })
    return resultList
  }

  render() {
    const {stats} = this.state
    console.log(stats)
    const listFormattedDataUsingForInMethod = this.convertObjectsDataIntoListItemsUsingForInMethod()
    console.log(
      listFormattedDataUsingForInMethod[0],
      'First State Data Using ForIn Method',
    )
    return (
      <>
        {this.confirmCard()}
        {this.activeCard()}
        {this.recoverCard()}
        {this.deceaseCard()}
      </>
    )
  }
}

export default HomeStats
