import { isArray, isString, isNumber } from 'lodash';
import { utils } from '../utils';

const urlBase = 'http://localhost:3004';

export class restClient {
  static httpGet = url => {

    return fetch(`${urlBase}/${url}`).then(response => response.json())
                        .then(data => data);

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
    return fetch(`${urlBase}/${url}`, {
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
