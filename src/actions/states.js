export const REQUEST_DEPARTMENTS = 'REQUEST_DEPARTMENTS';
export const SUCCEEDED_DEPARTMENTS = 'SUCCEEDED_DEPARTMENTS';

export const requestDepartments = state => ({type: REQUEST_DEPARTMENTS, state});

export const succeededDepartments = departments => ({type: SUCCEEDED_DEPARTMENTS, departments});
