import isArray from 'lodash';

export class utils {
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