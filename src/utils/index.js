import isArray from 'lodash';

export class utils {


  static descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  static getComparator = (order, orderBy) => {
    return order === 'desc'
      ? (a, b) => utils.descendingComparator(a, b, orderBy)
      : (a, b) => -utils.descendingComparator(a, b, orderBy);
  }
  
  static stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  }

    static copyOf = items => {
    if (items === undefined || items === null) {
      return {};
    }

    const copy = JSON.parse(JSON.stringify(items));

    return copy;
  };

  static evaluateObject = obj => {
    const result = !!(obj && Object.keys(obj).length);
    return result;
  };

  static evaluateArray = array => {
    if (!array || !isArray(array)) {
      return false;
    }

    const result = !!(array && array.length);
    return result;
  };

}