import React from "react";
import "./App.css";
import { LineChart } from "./components/chart/chart.component";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h4>Demography</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="card">
              <div className="row align-items-center">
                <div className="col-lg-2 col-md-3">
                  <div className="icon">
                    <i className="fa fa-users" aria-hidden="true"></i>
                  </div>
                  <br />
                  <div className="title-text">
                    <h5>
                      Population&nbsp;&nbsp;
                      <span className="change-percentage">+5%</span>
                    </h5>
                  </div>
                  <br />
                  <br />
                  <div className="title-count">
                    <h1>50.4</h1>
                    <h1>Million</h1>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3">
                  <p>
                    According to 2019 census data, Angola had a population of
                    28,789,034 inhabitants, making it the number in terms of
                    population.
                  </p>
                  <p>
                    During the last five reported years, the population has
                    changed by 1 million in from 49 million in 2013 to 50.4 in
                    2018.
                  </p>
                </div>
                <div className="col-lg-7 col-md-6">
                  <div className="chart-header">
                    <span>Population</span>
                    <span>2020</span>
                  </div>
                  <div className="chart-area">
                    <LineChart />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="chart-footer">
                    <span>*Source:&nbsp; World Bank</span>
                    <span>...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
