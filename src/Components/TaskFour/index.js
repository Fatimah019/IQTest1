import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchCovidCasesInNigeria } from "../../ReduxSetup/Actions/covid";
import PropTypes from "prop-types";

class TaskFour extends React.Component {
  componentDidMount() {
    this.props.fetchCovidCasesInNigeria(this.state);
  }
  render() {
    return (
      <div className="task-four">
        <header className="flex space-around align-center">
          <h3>COVID CASES IN NIGERIA</h3>
          <div className="flex">
            <h4>
              Confirmed Cases: {this.props.covidcases.totalConfirmedCases}
            </h4>
          </div>
        </header>
        <div className="container-fluid cases-summary-general">
          <div className="justify-content-center text-center cases-summary">
            <p>Discharged Cases</p>
            <div className="text-center discharged">
              <p>{this.props.covidcases.discharged}</p>
            </div>
          </div>
          <div className="justify-content-center text-center cases-summary">
            <p>Death Cases</p>
            <div className="text-center death">
              <p>{this.props.covidcases.death}</p>
            </div>
          </div>
          <div className="justify-content-center text-center cases-summary">
            <p>Active Cases</p>
            <div className="text-center activecase">
              <p>{this.props.covidcases.totalActiveCases}</p>
            </div>
          </div>
          <div className="justify-content-center text-center cases-summary">
            <p>Sample Cases</p>
            <div className="text-center sample">
              <p>{this.props.covidcases.totalSamplesTested}</p>
            </div>
          </div>
        </div>

        {/* break down of cases in each states */}
        <div className="container-fluid">
          <h3>Breakdown of cases in each state</h3>
        </div>
        {this.props.covidcases.length === 0 ? (
          <div className="flex align-center justify-content-center">
            <p>"Loading...."</p>
          </div>
        ) : (
          <div>
            {this.props.covidcases.states.map((cases) => {
              return (
                <div className="container-fluid">
                  <h3>{cases.state}</h3>
                  <div className="flex space-between align-center cases-summary-general">
                    <div className="text-center cases-summary-2 align-center">
                      <p>Discharged</p>
                      <div className="text-center">
                        <p>{cases.discharged}</p>
                      </div>
                    </div>
                    <div className="text-center cases-summary-2 align-center">
                      <p className="no-text-wrap">Death Cases</p>
                      <div className="text-center">
                        <p>{cases.death}</p>
                      </div>
                    </div>
                    <div className="text-center cases-summary-2 align-center">
                      <p className="no-text-wrap">Confirmed Cases</p>
                      <div className="text-center">
                        <p>{cases.confirmedCases}</p>
                      </div>
                    </div>
                    <div className="text-center cases-summary-2 align-center">
                      <p className="no-text-wrap">On Admission</p>
                      <div className="text-center">
                        <p>{cases.casesOnAdmission}</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

TaskFour.propTypes = {
  fetchCovidCasesInNigeria: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  covidcases: state.covid.covidcases,
});

export default connect(mapStateToProps, { fetchCovidCasesInNigeria })(
  withRouter(TaskFour)
);
