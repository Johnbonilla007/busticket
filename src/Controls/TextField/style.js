
import { makeStyles, withStyles } from '@material-ui/core/styles';

export const useTextFieldStyles = t => {
const useStyle = makeStyles((theme) => ({
                root: {
                  display: 'flex',
                  flexWrap: 'wrap',

                  '& .MuiTextField-root': {

                    '& .MuiFormLabel-root': {
                      color:  t === 'oscuro' ? 'white' : 'black',
                    },

                    '& .MuiInput-root': {
                      color: t === 'oscuro' ? 'white' : 'black',
                    },

                    '& .MuiInput-underline:before': {
                      borderColor: t === 'oscuro' ? 'white' : 'black',
                    },
                  },

                  // '& label.Mui-focused': {
                  //   color: 'green',
                  // },
                  // '& .MuiInput-underline:after': {
                  //   borderBottomColor: 'green',
                  // },
                  // '& .MuiOutlinedInput-root': {
                    // '& fieldset': {
                    //   borderColor: 'red',
                    // },
                    
                    // '&:hover fieldset': {
                    //   borderColor: 'yellow',
                    // },

                    // '&.Mui-focused fieldset': {
                    //   borderColor: 'green',
                    // },
                  // },
                },
                margin: {
                  margin: theme.spacing(1),
                },
                withoutLabel: {
                  marginTop: theme.spacing(3),
                },
                textField: {
                  width: '100%',
                },
              }));

  return useStyle();
}


export const useTextFieldSimpleStyles = (style) => {

  const useStyle = makeStyles((theme) => ({
                  root: {
                    display: 'flex',
                    flexWrap: 'wrap',
  
                    '& .MuiTextField-root': {
                      // background: style.backgroundInput || 'black',
                      backgroundColor: '#ffffff',
  
                      '& .MuiFormLabel-root': {
                        color:  style.colorLabel || 'black',
                      },
  
                      '& .MuiInput-root': {
                        color: style.color || 'black',
                      },
  
                      '& .MuiInput-underline:before': {
                        borderColor: style.border || 'black',
                      },
                    },
  
                    // '& label.Mui-focused': {
                    //   color: 'green',
                    // },
                    // '& .MuiInput-underline:after': {
                    //   borderBottomColor: 'green',
                    // },
                    // '& .MuiOutlinedInput-root': {
                      // '& fieldset': {
                      //   borderColor: 'red',
                      // },
                      
                      // '&:hover fieldset': {
                      //   borderColor: 'yellow',
                      // },
  
                      // '&.Mui-focused fieldset': {
                      //   borderColor: 'green',
                      // },
                    // },
                  },
                  margin: {
                    margin: theme.spacing(1),
                  },
                  withoutLabel: {
                    marginTop: theme.spacing(3),
                  },
                  textField: {
                    width: '100%',
                    background: style.backgroundColor,
                  },
                }));
  
    return useStyle();
  }