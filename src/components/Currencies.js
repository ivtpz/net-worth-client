import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import * as CurrencyActionCreators from '../actions/currencyActions';

class Currencies extends PureComponent {
  componentDidMount() {
    this.props.getCurrencies();
  }

  render() {
    return (
      <div>
        <FormControl>
          <InputLabel htmlFor="currency">Currency</InputLabel>
          <Select 
            onChange={(e) => this.props.selectCurrency(e.target.value)} 
            value={this.props.selectedCurrency}
            inputProps={{ id: 'currency' }}
          >
            {(this.props.currencies || []).map(({ name, id }) =>
              <MenuItem value={id} key={id}>
                {name}
              </MenuItem>
            )}
          </Select>
        </FormControl>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.currency,
})

const mapDispatchToProps = dispatch => bindActionCreators(CurrencyActionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Currencies);
