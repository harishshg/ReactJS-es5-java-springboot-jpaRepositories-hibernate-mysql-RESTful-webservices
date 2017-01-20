
var Patient = React.createClass({

	getInitialState: function () {
		return {editing: false};
	},
	save: function () {
		var pt={};
		pt.id=this.props.patient.id;
		pt.name=this.refs.patientName.value;
		pt.age=this.refs.patientAge.value;
		pt.desease=this.refs.patientDesease.value;
		this.props.updatePatientDetails(pt);
		this.setState({editing:false});
	},
	changeMode: function () {
		this.setState({editing:true});
	},
	renderNormal: function () {
		return (
      <tr onClick={this.changeMode}>
        <td>{this.props.patient.name}</td>
        <td>{this.props.patient.age}</td>
        <td>{this.props.patient.desease}</td>
      </tr>);
	},
	
	renderForm: function () {
		return (
      <tr >
        <td><input ref="patientName" class="input-sm" id="inputsm" type="text" defaultValue={this.props.patient.name}/> </td>
        <td><input ref="patientAge" class="input-sm" id="inputsm" type="text" defaultValue={this.props.patient.age}/> </td>
        <td><input ref="patientDesease" class="input-sm" id="inputsm" type="text" defaultValue={this.props.patient.desease}/></td>
        <td><button onClick={this.save} className="button-primary">Save</button></td>
      </tr>);
	},
  render: function() {
  if(this.state.editing){
    return this.renderForm();
    }else{
    return this.renderNormal();
    }
  }
});

var PatientGrid = React.createClass({

loadPatientsFromServer: function () {
    var self = this;
    $.ajax({
      url: "http://localhost:8080/patients",
      success: function (data) {
      self.setState({patients: data});
    },
      error: function(xhr, ajaxOptions, thrownError) {
        toastr.error(xhr.responseJSON.message);
      }
    });
  },
 
  getInitialState: function () {
    return {patients: []};
  },
 
  componentDidMount: function () {
    this.loadPatientsFromServer();
  },
  
  updatePatient: function (p) {
  	 var self = this;
    $.ajax({
      url: "http://localhost:8080/patient",
      type: 'POST',
      data: JSON.stringify(p),
      contentType : 'application/json',
      success: function (data) {
      self.loadPatientsFromServer();
    },
      error: function(xhr, ajaxOptions, thrownError) {
        toastr.error(xhr.responseJSON.message);
      }
    });
  },
  eachPatient: function (p,i) {
  	return(
  			<Patient key={i} index={i} updatePatientDetails={this.updatePatient}  patient={p}>
  			</Patient>
  			);
  },
  
  render: function() {
    return (
    	
	      		<div className="container">
	  				<table className="table table-striped">
	    				<thead>
	      					<tr>
	        					<th>Name</th>
	        					<th>Age</th>
	        					<th>Desease</th>
	      					</tr>
	    				</thead>
	    				<tbody>{this.state.patients.map(this.eachPatient)}</tbody>
	  				</table>
				</div>
			
	);
  }
});
 

 
ReactDOM.render(
  <PatientGrid />, document.getElementById('root')
);

