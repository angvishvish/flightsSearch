import React, { PureComponent } from 'react';
import Select from 'react-select';

class SelectField extends PureComponent {
  handleChange = (selectedOption) => {
    this.props.onChange(selectedOption);
  };

  render() {
    const {
      value, name, placeholder, options, disabled, onInputChange,
    } = this.props;
    return (
      <Select
        name={name}
        value={value}
        onChange={this.handleChange}
        options={options}
        clearable={false}
        className="form__form-group-select"
        placeholder={placeholder}
        onInputChange={onInputChange}
      />
    );
  }
}

const customSelect = props => (
  <div className="form__form-group-input-wrap">
    <SelectField
      {...props.input}
      options={props.options}
      placeholder={props.placeholder}
      onInputChange={props.onInputChange}
    />
    {props.meta.touched && props.meta.error && <span className="form__form-group-error">{props.meta.error}</span>}
  </div>
);

export default customSelect;
