import React from 'react';
import './App.css';
import './vendor/bootstrap.min.css'
import pricingData from './data'
import PriceCard from './components/priceCard'
import Modal from 'react-bootstrap/Modal'
import ContactForm from './components/form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 2,
      showModal: false,
      leads:0
    }
    this.showModal = this.showModal.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }
  changePricing(index) {
    this.setState({ currentIndex: index });
  }
  showModal(leads) {
    this.setState({showModal:true,leads});

  }
  submitForm(name,email,phone){
    this.setState({showModal:false},()=>{
      alert(`email: ${email}, name:${name}, phone: ${phone}`)
    });

  }
  render() {
    return (
      <div className="App">
        <div className="container mt-5">
          <div className="row text-center">
            <div className="col-12 text-centers">
              <div class="btn-group" role="group" aria-label="Basic example">
                <button onClick={() => { this.changePricing(0) }} type="button" class={`btn btn-lg ${this.state.currentIndex == 0 ? 'btn-dark' : 'btn-outline-dark'}`}>$100K - $200K</button>
                <button onClick={() => { this.changePricing(1) }} type="button" class={`btn btn-lg ${this.state.currentIndex == 1 ? 'btn-dark' : 'btn-outline-dark'}`}>$200K - $300K</button>
                <button onClick={() => { this.changePricing(2) }} type="button" class={`btn btn-lg ${this.state.currentIndex == 2 ? 'btn-dark' : 'btn-outline-dark'}`}>$300K - $400K</button>
                <button onClick={() => { this.changePricing(3) }} type="button" class={`btn btn-lg ${this.state.currentIndex == 3 ? 'btn-dark' : 'btn-outline-dark'}`}>$400K - $500K</button>
                <button onClick={() => { this.changePricing(4) }} type="button" class={`btn btn-lg ${this.state.currentIndex == 4 ? 'btn-dark' : 'btn-outline-dark'}`}>$500K+</button>
              </div>

            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-3 col-6 mb-2">
              <PriceCard
                leads={20}
                perLead={pricingData[this.state.currentIndex][0][0]}
                perMonth={pricingData[this.state.currentIndex][0][2]}
                totalPackage={pricingData[this.state.currentIndex][0][3]}
                showModal={this.showModal}
                

              />
            </div>
            <div className="col-lg-3 col-6 mb-2">
              <PriceCard
                leads={40}
                perLead={pricingData[this.state.currentIndex][1][0]}
                perMonth={pricingData[this.state.currentIndex][1][2]}
                totalPackage={pricingData[this.state.currentIndex][1][3]}
                showModal={this.showModal}

              />
            </div>

            <div className="col-lg-3 col-6 mb-2">
              <PriceCard
                leads={80}
                perLead={pricingData[this.state.currentIndex][2][0]}
                perMonth={pricingData[this.state.currentIndex][2][2]}
                totalPackage={pricingData[this.state.currentIndex][2][3]}
                showModal={this.showModal}

              />
            </div>

            <div className="col-lg-3 col-6 mb-2">
              <div style={{ minHeight: 488 }} className="card">
                <div className="card-header text-center bg-dark text-white">
                  <p>Enterprise</p>
                </div>
                <div className="card-body text-center">
                  <h1 className="display-5"> Want more than 80 qualified leads each month ?</h1>
                </div>
                <div className="card-footer bg-outline-dark text-white">
                  <button className="btn w-100 btn-outline-danger text-danger"> Start Trial</button>
                </div>
              </div>
            </div>

          </div>
          < Modal size="md" centered={true} show={this.state.showModal} onHide={() => { this.setState({ showModal: false }) }}>
            <Modal.Body className="bg-black" >
              <ContactForm 
                leads = {this.state.leads}
                submitForm = {this.submitForm}

                  />
            </Modal.Body>
          </Modal>
        </div>

      </div>

    );
  }
}

export default App;
