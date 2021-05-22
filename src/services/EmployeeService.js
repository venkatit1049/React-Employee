import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "https://60939fb7a7e53a001795130e.mockapi.io/api/get/employee";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    
    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    // useEffect(() => {
    //     setAppState({ loading: true });
    //     const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
    //     axios.get(apiUrl).then((repos) => {
    //       const allRepos = repos.data;
    //       setAppState({ loading: false, repos: allRepos });
    //     });
    //   }, [setAppState]);


    // axios.get(apiUrl).then((repos) => {
    //     const allRepos = repos.data;
    //     setAppState({ loading: false, repos: allRepos });
    //   });
}

export default new EmployeeService()