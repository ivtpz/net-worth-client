import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import Input from '@material-ui/core/Input'
import debounce from 'lodash/debounce';
import { editLine, calculate } from '../actions/netWorthActions';

const addCommas = number => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

class CurrencyCell extends PureComponent {
  constructor() {
    super();
    this.debouncedRecalculate = debounce(() => this.props.recalculate(), 1000)
  }

  render() {
    return (
      <div style={{ ...styles.container, ...styles.flexItem }}>
        {this.props.isEditable || this.props.value ? <div style={styles.symbol}>{this.props.symbol}</div> : <></>}
        {this.props.isEditable ?
          <Input 
            value={this.props.value} 
            onChange={(e) => {
              this.props.updateLine(e.target.value, this.props.id, this.props.propertyName);
              this.debouncedRecalculate()
            }}
            inputProps={{ type: 'number', step: '0.01' }}
          />
          : <div>{this.props.value ? addCommas(this.props.value.toFixed(2)) : ''}</div>
        }
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
  symbol: {
    marginRight: '7px'
  }
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  symbol: (state.currency.currencies[state.currency.selectedCurrency] || {}).symbol
})

const mapDispatchToProps = dispatch => ({
  updateLine: (value, lineId, propertyName) => dispatch(editLine(value, lineId, propertyName)),
  recalculate: () => dispatch(calculate())
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyCell);