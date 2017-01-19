
var Patient = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.patient.name}</td>
        <td>{this.props.patient.age}</td>
        <td>{this.props.patient.desease}</td>
      </tr>);
  }
});

var PatientGrid = React.createClass({

loadPatientsFromServer: function () {
    var self = this;
    $.ajax({
      url: "http://localhost:8080/patients"
    }).then(function (data) {
      self.setState({patients: data});
    });
  },
 
  getInitialState: function () {
    return {patients: []};
  },
 
  componentDidMount: function () {
    this.loadPatientsFromServer();
  },
  
  render: function() {
    var rows = [];
    this.state.patients.forEach(function(patient) {
      rows.push(<Patient patient={patient} />);
    });
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
	    				<tbody>{rows}</tbody>
	  				</table>
				</div>
			
	);
  }
});
 

 
ReactDOM.render(
  <PatientGrid />, document.getElementById('root')
);

