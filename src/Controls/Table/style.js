import { lighten, makeStyles } from '@material-ui/core/styles';
import { width } from '@material-ui/system';

const useTableStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      display: 'grid',
      gridTemplateRows: 'calc(100% - 40px) 40px',

      '& .MuiTableCell-stickyHeader': {
        backgroundColor: '#3f51b5',
        color: 'white',
      },

      '& .MuiFormControlLabel-root': {
        // color: 'white'
      },

    },

    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
      display: 'grid',
      gridTemplateRows: 'calc(100% - 60px) 60px',
    },

    table: {
      minWidth: 750,
    },

    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'auto',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  }));

  const useToolbarStyles = makeStyles(theme => ({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: '1 1 100%',
    },
  }));

export {
    useTableStyles,
    useToolbarStyles
}