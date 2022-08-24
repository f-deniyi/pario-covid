import { useEffect } from 'react'
import Loader from './component/loader.js'
import Header from './component/header.js'
import covidImg from './asset/img/covid.png'
import { Row, Col, Table } from 'reactstrap'
import { getCovidStats } from './redux/actions'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
function App ({ getCovidStats, stats, loading }) {
  useEffect(() => {
    getCovidStats()
    console.log(stats, loading)
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    console.log(stats, loading)
    // eslint-disable-next-line
  }, [stats, loading])

  return (
    <div className='App'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <div className='main bg-white'>
            <div className=' text-dark text-center py-5'>
              <h1>Covid 19 Stats in Nigeria</h1>
            </div>
            <div>
              <Row className='px-md-5 px-2 g-2 row-eq-height'>
                <Col className='h-100'>
                  <div className='card h-100 bg-success px-1 py-4'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div>
                        <img
                          src={covidImg}
                          alt='covid'
                          height='70px'
                          width='70px'
                        />
                      </div>
                      <div>
                        <h3 className='text-white'>
                          {stats?.totalSamplesTested}
                        </h3>
                        <p className='text-white mb-0'>Total Samples Tested</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className='h-100'>
                  <div className='card h-100 bg-danger px-1 py-4'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div>
                        <img
                          src={covidImg}
                          alt='covid'
                          height='70px'
                          width='70px'
                        />
                      </div>
                      <div>
                        <h3 className='text-white'>
                          {stats?.totalConfirmedCases}
                        </h3>
                        <p className='text-white mb-0'>Total Confirmed Cases</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className='h-100'>
                  <div className='card h-100 bg-warning px-1 py-4'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div>
                        <img
                          src={covidImg}
                          alt='covid'
                          height='70px'
                          width='70px'
                        />
                      </div>
                      <div>
                        <h3 className='text-white'>
                          {stats?.totalActiveCases}
                        </h3>
                        <p className='text-white mb-0'>Total Active Cases</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className='h-100'>
                  <div className='card h-100 bg-secondary px-1 py-4'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div>
                        <img
                          src={covidImg}
                          alt='covid'
                          height='70px'
                          width='70px'
                        />
                      </div>
                      <div>
                        <h3 className='text-white'>{stats?.discharged}</h3>
                        <p className='text-white mb-0'>Discharged</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className='h-100'>
                  <div className='card h-100 bg-dark px-1 py-4'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div>
                        <img
                          src={covidImg}
                          alt='covid'
                          height='70px'
                          width='70px'
                        />
                      </div>
                      <div>
                        <h3 className='text-white'>{stats?.death}</h3>
                        <p className='text-white mb-0'>Death</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className='px-md-5 px-2 my-4'>
              <Table striped>
                <thead className='bg-dark text-white py-2'>
                  <tr>
                    <th>State</th>
                    <th>Confirmed Cases</th>
                    <th>Cases On Admission</th>
                    <th>Discharged</th>
                    <th>Death</th>
                  </tr>
                </thead>
                <tbody>
                  {stats?.states.map(el => (
                    <tr>
                      <th scope='row'>{el.state}</th>
                      <td>{el.confirmedCases}</td>
                      <td>{el.casesOnAdmission}</td>
                      <td>{el.discharged}</td>
                      <td>{el.death}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
const mapStateToProps = ({ covid }) => {
  const { stats, loading } = covid
  return { stats, loading }
}
export default connect(mapStateToProps, { getCovidStats })(App)
