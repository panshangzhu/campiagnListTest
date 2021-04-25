import isEqual from 'lodash/isEqual';
import get from 'lodash/get';
import set from 'lodash/set';
import cloneDeep from 'lodash/cloneDeep';

export default class BaseModel {

  errors = {};
  validating = false; // True when model is being sent for validation

  static createEmpty() {
    return new this();
  }

  /**
   * Create a new customer from API returned values
   * @param {object} newValues
   * @param {array} errors
   * @returns {*}
   */
  static create(newValues, errors = []) {
    throw new Error('You have to implement the static method create!');
  }

  /**
   * Set an internal field
   * @param field
   * @param value
   * @returns {BaseModel} Chaining return of this
   */
  set(field, value) {
    // Using lodash/set allow to set nested values (ex. field = "classValue.nestedValue")
    set(this, field, value);
    return this;
  }

  get(field) {
    // Using lodash/get allow to get nested values (ex. field = "classValue.nestedValue")
    return get(this, field);
  }

  /**
   * Clone our self to a new object
   * @returns {BaseModel} Cloned self
   */
  clone() {
    // Moved to lodash cloneDeep as it is way more reliable at cloning nested values
    return this.constructor.createEmpty().inject(cloneDeep(this.toJsonValues()));
    //    return this.constructor.createEmpty().inject(this.toJsonValues());
  }
/**
   * Strip out class functions and structure, to keep only variable values in form of a json object
   * @returns {{}} Json object
   */
 toJsonValues() {
  return {
    ...this,
    errors: {
      ...this.errors,
    },
  };
}

  /**
   * Compare our self with another instance of the same model
   * @param {BaseModel} other
   * @returns {boolean} True if we are equal to other
   */
  isEqualTo(other) {
    return isEqual(this.toJsonValues(), other.toJsonValues());
  }

  /**
   * Inject values from JSON to internal vars.
   * If these values need processing (API conversion), it must already be done at this point
   * @param newValues
   * @returns {BaseModel} Chaining return of this
   */

  inject(newValues) {
    // Failsafe in case newValues is anything but an iterable object
    try {
      // Inject all those new values in the object vars
      Object.entries(newValues).forEach((value) => {
        // Only inject values that we should have (already declared)
        if (this.hasOwnProperty(value[0])) {
          this.set(value[0], value[1]);
        }
      });
    }
    catch (error) {}

    return this;
  }

}