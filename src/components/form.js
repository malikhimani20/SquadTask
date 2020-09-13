import React from 'react'
class ContactForm extends React.Component {
    constructor(props){
        super(props);
            this.state = {
                name:"",
                email:"",
                phone:"",
            }
        
    }
    render(){
        return (
            <div class="">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Get Started with SquadVoice</h5>
                        </div>
                        <div class="modal-body">
                            <p><b>Plan Selected:</b>{this.props.leads}</p>
                            <form>
                                <div class="form-group">
                                    <label for="inputAddress">Name</label>
                                    <input onChange={(e)=>{this.setState({name:e.target.value})}} value={this.state.name} type="text" class="form-control" id="inputAddress" placeholder="" />
                                </div>
                                <div class="form-row">
    
                                    <div class="form-group col-md-6">
                                        <label for="inputEmail4">Email Address</label>
                                        <input onChange={(e)=>{this.setState({email:e.target.value})}} value={this.state.email} type="email" class="form-control" id="inputEmail4" placeholder="" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputPassword4">Phone No.</label>
                                        <input onChange={(e)=>{this.setState({phone:e.target.value})}} value={this.state.phone} type="number" class="form-control" id="inputPassword4" placeholder="" />
                                    </div>
                                </div>
    
    
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputState">Number of leads</label>
                                        <select id="inputState" class="form-control">
                                            <option selected>-</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputState">Total leads in your CRM</label>
                                        <select id="inputState" class="form-control">
                                            <option selected>-</option>
                                            <option>...</option>
                                        </select>
                                    </div>
    
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputState">Which CRM do you use</label>
                                        <select id="inputState" class="form-control">
                                            <option selected>-</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputState">No. of Agents</label>
                                        <select id="inputState" class="form-control">
                                            <option selected>-</option>
                                            <option>...</option>
                                        </select>
                                    </div>
    
                                </div>
    
                                <div>
                                    <label>What are your biggest lead sources?</label><br />
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="Zillow" />
                                        <label class="form-check-label" for="inlineCheckbox1">Zillow</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Realtor" />
                                        <label class="form-check-label" for="inlineCheckbox2">Realtor</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="Ylopo" />
                                        <label class="form-check-label" for="inlineCheckbox3">Ylopo</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="Others" />
                                        <label class="form-check-label" for="inlineCheckbox3">Others</label>
                                    </div>
                                </div>
                                <div>
                                    <label> How did you hear about us?</label><br />
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Google" />
                                        <label class="form-check-label" for="inlineRadio1">Google</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Facebook" />
                                        <label class="form-check-label" for="inlineRadio2">Facebook</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Email" />
                                        <label class="form-check-label" for="inlineRadio3">Email</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="Friends" />
                                        <label class="form-check-label" for="inlineRadio4">Friends</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="Real Closer" />
                                        <label class="form-check-label" for="inlineRadio5">Real CLoser</label>
                                    </div>
                                </div>
                                <button onClick ={()=>{
                                    const {name,email,phone} = this.state
                                    this.props.submitForm(name,phone,email);
                                }} type="button" class="btn btn-warning">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactForm