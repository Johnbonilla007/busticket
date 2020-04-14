import React, {useState} from 'react';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { useTextFieldStyles } from './style';

const TextFieldControl = ({typeField, initialValue, prefix, label, onChange, onFocus, maxLength, theme }) => {
  const classes = useTextFieldStyles(theme);
  
  const [value, setValue] = useState(initialValue);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    if(!onChange) return;
    
    setValue(event.target.value);
    onChange(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const getField = () => {
    switch(typeField){
        case 'simple':
        return <TextField 
                    label={label} 
                    className={clsx(classes.margin, classes.textField)} 
                    onChange={handleChange}
                    value={value}
                />;
        break;

        case 'number':
            return <TextField 
                        label={label} 
                        type="Number"
                        className={clsx(classes.margin, classes.textField)} 
                        onChange={handleChange}
                        value={value}
                    />;
            break;

        case 'prefix':
            return <TextField
                        label={label}
                        id="standard-start-adornment"
                        value={value}
                        onChange={handleChange}
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                            [prefix.position === 'start' ? 'startAdornment' : 'endAdornment']: 
                                <InputAdornment position={prefix.position}>{prefix.text}</InputAdornment>,
                        }}
                    />

        case 'password':
            return <FormControl className={clsx(classes.margin, classes.textField)}>
                        <InputLabel htmlFor="standard-adornment-password">{label}</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            value={value}
                            onChange={handleChange}
                            endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                        />
                    </FormControl>

        default:
            return <TextField 
                        label={label} 
                        onChange={handleChange} 
                        onFocus={onFocus}
                        className={clsx(classes.margin, classes.textField)} 
                        inputProps={{ maxLength }}
                        value={value}
                    />;
    }
  }

  return (
    <div className={classes.root}>
          {getField()}
    </div>
  );
}


export default TextFieldControl;