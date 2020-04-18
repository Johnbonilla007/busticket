import { isArray, isString, isNumber } from 'lodash';
import { utils } from '../utils';

// const urlBase = 'http://localhost:3004';
const urlBase = 'http://localhost:54661/api/v1';

const objectParametize = (obj, q, parent) => {
  const str = [];
  const delimeter = '&';
  let objKey;
  const a = Object.keys(obj);
  a.forEach(key => {
    switch (typeof obj[key]) {
      case 'object':
        if (obj[key]) {
          if (isArray(obj[key])) {
            obj[key].forEach(arrObject => {
              if (parent) {
                objKey = `${parent}.${key}`;
              } else {
                objKey = key;
              }
              if (isString(arrObject) || isNumber(arrObject)) {
                if (parent) {
                  str[str.length] = `${parent}.${key}=${arrObject}`;
                }
                str[str.length] = `${key}=${arrObject}`;
              } else if (!isString(arrObject)) {
                str[str.length] = objectParametize(arrObject, false, objKey);
              }
            });
          } else if (isArray(obj[key])) {
            str[str.length] = `${parent}.${key}=${obj[key]}`;
          } else {
            if (parent) {
              objKey = `${parent}.${key}`;
            } else {
              objKey = key;
            }
            str[str.length] = objectParametize(obj[key], false, objKey);
          }
        }
        break;
      default: {
        if (obj[key]) {
          if (parent) {
            str[str.length] = `${parent}.${key}=${obj[key]}`;
          } else {
            str[str.length] = `${key}=${obj[key]}`;
          }
        }
      }
    }
  });

  return (q === true ? '?' : '') + str.join(delimeter);
};


export class restClient {
  static httpGet = (url, params) => {

    let query = '';
    if(utils.evaluateObject(params)){
      query = `&${objectParametize(params, false)}`;
    }

    let urlParam = `${urlBase}/${url}?format=json${query}`;
    
    return fetch(urlParam).then(response => {
      return response.json();
    })
    .then(data => data)
    .catch(error => {

      return error;
    } );

  }

  static httpPost = (url, param) => {

    return fetch(`${urlBase}/${url}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(param)
      }).then(response => response.json())
        .then(data => data);
  }

  static httpPut = (url, param) => {
    return fetch(`${urlBase}/${url}/${param.id}`, {
                                        method: 'PUT',
                                        headers: {
                                          'Accept': 'application/json',
                                          'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify(param)
                                      }).then(() => 'success')
                                        .catch(e => e);
  }

  static httpDelete = (url, id) => {
    return fetch(`${urlBase}/${url}/${id}`, {method: 'DELETE'})
                          .then(() => 'success')
                          .catch(e => e);
  } 

  static httpLoginAcces = async (url, {userName, password}) => {
    const response = await restClient.httpGet(url);
    
    const userBusticket = response.find(user => user.userName === userName && 
                                                user.password === password);

    if(utils.evaluateObject(userBusticket)){
      return userBusticket;
    }

    return null;
  }
}
