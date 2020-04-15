import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '97%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Combobox = ({selectedKey, label, options, onChange}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(selectedKey);

  const handleChange = (event) => {
    setValue(event.target.value);

    onChange(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={value}
          onChange={handleChange}
        >
        {options.map(option => <MenuItem value={option.key}>{option.text}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  );
}

export default Combobox;