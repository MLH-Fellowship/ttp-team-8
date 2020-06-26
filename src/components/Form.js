import React, { Component } from "react"
// import WForm from 'react-bootstrap/Form'
// import Row from 'react-bootstrap/Form'
// import Col from 'react-bootstrap/Form'

class Form extends Component {
  formStyle={
    textAlign: "center"
  }
  render() {
    return (
      // <WForm onSubmit={this.props.getWeather}>
      //   <Row>
      //     <Col>
      //      <input type="text" name="city" placeholder="city..." />
      //       {/* <WForm.Control type="text" name="city" placeholder="city..."  /> */}
      //     </Col>
      //     <Col>
      //       <input type="text" name="country" placeholder="country..." />
      //       {/* <Form.Control placeholder="Last name" /> */}
      //     </Col>
      //   </Row>
      //   <button> Get Weather </button>
      // </WForm>
      <form onSubmit={this.props.getWeather} style={this.formStyle}>
        {/* <Row> */}
          {/* <Col> */}
            <input type="text" name="city" placeholder="city..." />
          {/* </Col> */}
          {/* <Col> */}
            <input type="text" name="country" placeholder="country..." />
          {/* </Col> */}
        {/* </Row> */}
        <button> Get Weather </button>
      </form>
    );
  }
}
export default Form;
