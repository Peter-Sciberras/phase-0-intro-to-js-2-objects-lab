// Write your solution in this file!
// Assign an employee variable to an Object containing name and streetAddress keys
const employee = {
    name: 'John Doe',
    streetAddress: '123 Main Street'
  };
  
  // Create updateEmployeeWithKeyAndValue() function
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  // Create destructivelyUpdateEmployeeWithKeyAndValue() function
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Create deleteFromEmployeeByKey() function
  function deleteFromEmployeeByKey(employee, key) {
    const {[key]: deletedKey, ...rest} = employee;
    return rest;
  }
  
  // Create destructivelyDeleteFromEmployeeByKey() function
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }