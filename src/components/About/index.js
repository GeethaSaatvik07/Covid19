import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'

const pageStatus = {
  initial: 'INITIAL',
  loading: 'LOADING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class About extends Component {
  state = {questions: [], status: pageStatus.initial}

  componentDidMount() {
    this.getQuestions()
  }

  getQuestions = async () => {
    this.setState({status: pageStatus.loading})
    const questionUrl = 'https://apis.ccbp.in/covid19-faqs'
    const response = await fetch(questionUrl)
    const data = await response.json()
    if (response.ok) {
      this.setState({questions: data.faq, status: pageStatus.success})
    } else {
      this.setState({status: pageStatus.failure})
    }
  }

  renderLoading = () => (
    <div className="loading-time" data-testid="aboutRouteLoader">
      <Loader type="Dna" color="#007bff" height="80" width="80" />
    </div>
  )

  renderFailure = () => (
    <div className="loading-time">
      Data Fetching Error, Please Give us Sometime!
    </div>
  )

  renderAboutPage = () => {
    const {status} = this.state
    switch (status) {
      case pageStatus.loading:
        return this.renderLoading()
      case pageStatus.failure:
        return this.renderFailure()
      case pageStatus.success:
        return this.renderSuccess()
      default:
        return null
    }
  }

  renderSuccess = () => {
    const {questions} = this.state
    return (
      <>
        {questions.map(eachFaq => (
          <div className="faq" key={eachFaq.qNo}>
            <p className="question">{eachFaq.question}</p>
            <p className="answer">{eachFaq.answer}</p>
          </div>
        ))}
      </>
    )
  }

  render() {
    const {questions} = this.state
    console.log(questions)
    return (
      <div className="about">
        <h1 className="about-heading">About</h1>
        <p className="about-update">Last update on march 28th 2021.</p>
        <p className="about-ready">
          COVID-19 vaccines be ready for distribution
        </p>
        {/* <p className="question">
          What are your sources? How is the data gathered for this project?
        </p> */}
        {/* {questions.map(eachFaq => (
          <div className="faq" key={eachFaq.qNo}>
            <p className="question">{eachFaq.question}</p>
            <p className="answer">{eachFaq.answer}</p>
          </div>
        ))} */}
        {this.renderAboutPage()}
      </div>
    )
  }
}

export default About
