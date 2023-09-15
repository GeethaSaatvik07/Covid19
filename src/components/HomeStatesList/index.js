import {Component} from 'react'
import {FcGenericSortingAsc, FcGenericSortingDesc} from 'react-icons/fc'

import './index.css'

class HomeStatesList extends Component {
  //   state = {allStateDetails: []}

  componentDidMount() {
    this.getAllStateDetails()
  }

  getAllStateDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/covid19-state-wise-data')
    const data = await response.json()
    // console.log(data)
  }

  render() {
    return (
      <div className="state-table">
        <div className="table-headings-bar">
          <div className="states-asc-desc">
            <p className="table-headings">States/UT</p>
            <button type="button" className="asc-desc-button">
              <FcGenericSortingAsc className="asc-icon" />
            </button>
            <button type="button" className="asc-desc-button">
              <FcGenericSortingDesc className="desc-icon" />
            </button>
          </div>
          <div className="remaining-headings">
            <p className="table-headings">Confirmed</p>
            <p className="table-headings">Active</p>
            <p className="table-headings">Recovered</p>
            <p className="table-headings">Deceased</p>
            <p className="table-headings">Population</p>
          </div>
        </div>
        <hr className="state-table-hr" />
      </div>
    )
  }
}

export default HomeStatesList
