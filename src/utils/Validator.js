export default class Validator {
  /**
   * Checks whether an email is valid.
   * @param {String} email 
   */
  validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
  }

  /**
   * Checks whether a string is empty, null or undefined.
   */
  isEmpty = (input) => {
    return input === undefined || input === '' || input === null
  }
}