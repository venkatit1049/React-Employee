import React, { Component } from 'react'
//import classnames from 'classnames';
// you should import `lodash` as a whole module
import lodash from 'lodash';
import axios from 'axios';

//const ITEMS_API_URL = 'https://example.com/api/items';
const DEBOUNCE_DELAY = 500;

// the exported component can be either a function or a class
class ListCountryComponent extends Component {

  constructor(props) {
        super(props)

        this.state = {
               countries: [],
               filter: "",
               ITEMS_API_URL:"",
               classNameVal:"menu"        }
         //this.onSort = this.onSort.bind(this);
         this.handleChange = this.handleChange.bind(this);
         this.ITEMS_API_URL = "https://60939fb7a7e53a001795130e.mockapi.io/api/get/employee";
         
     
    //   this.setState({classNameVal: 'map'});

  }
     

  getEmployees(){
    return axios.get(this.ITEMS_API_URL);
  }

  componentDidMount(){
    
     this.getEmployees().then((res) => {
          this.setState({ countries: res.data});
      });
  }

     handleChange = event => {
        this.setState({ filter: event.target.value });
        this.setState({ classNameVal: ' menu-active' });
         

      };


      onSelectCountry(event,country) {
       alert("Selected: "+country);
      }
 render() {

        const { filter, countries } = this.state;
        const lowercasedFilter = filter.toLowerCase();
        const filteredData = countries.filter(item => {
          return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(lowercasedFilter)
          );
          
        });

       // let className = 'menu';
        //if (this.props.isActive) {
        //  className += ' menu-active';
        // }

  return (
    <div className="wrapper">
      <div className="control">{this.state.classNameVal}
        <input type="text"  className={this.state.classNameVal} value={filter} onChange={this.handleChange} />
      </div>
      <div className="list is-hoverable" />


    <div className="list">
    <a className="list-item"></a>
    {
        filteredData.map(
            country => 
            <div  key = {country.id}>      
                <a className="list-item" onClick={(e) => this.onSelectCountry(e, country.name)}>{ country.name} </a>                  
            </div>
        )
            }
    </div>
                          
</div>
  );
 }
}


export default ListCountryComponent
