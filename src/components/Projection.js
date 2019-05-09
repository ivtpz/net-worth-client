import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProjectionActionCreators from '../actions/projectionActions';


class Projection extends Component {
  componentDidMount() {
    this.props.getProjection()
  }  

  render() {
    return (
      <div style={styles.container}>
        <h3>Projection</h3>
        <LineChart 
          width={1100} 
          height={300} 
          data={this.props.chartData || []}
          margin={{ top: 50, right: 20, bottom: 5, left: 200 }}
        >
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  }
}

const mapStateToProps = (state) => ({
  ...state.projection
});

const mapDispatchToProps = dispatch => bindActionCreators(ProjectionActionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Projection);
