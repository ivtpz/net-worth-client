import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import Input from '@material-ui/core/Input'
import debounce from 'lodash/debounce';
import { editLine, calculate } from '../actions/netWorthActions';
import './animate.css';
import { getProjection } from '../actions/projectionActions';

class RateCell extends PureComponent {
  constructor() {
    super();
    this.debouncedRecalculate = debounce(() => this.props.recalculate(), 700)
  }

  render() {
    return (
      <div style={{ ...styles.container, ...styles.flexItem }}>
        <Input 
          style={styles.input}
          value={(this.props.value * 100)} 
          onChange={(e) => {
            this.props.updateLine((parseFloat(e.target.value) || 0) / 100, this.props.id, this.props.propertyName, 'interestRate');
            this.debouncedRecalculate()
          }}
          inputProps={{ type: 'number', step: '0.01' }}
        />
        <div style={styles.symbol}>%</div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  flexItem: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '150px'
  },
  input: {
    width: '50px'
  },
  symbol: {
    marginLeft: '7px'
  }
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  symbol: (state.currency.currencies[state.currency.selectedCurrency] || {}).symbol
})

const mapDispatchToProps = dispatch => ({
  updateLine: (value, lineId, propertyName, field) => dispatch(editLine(value, lineId, propertyName, field)),
  recalculate: () => {
    dispatch(getProjection());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RateCell);