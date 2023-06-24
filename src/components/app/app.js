import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

// import {Component} from 'react';
// class WhoAmI extends  Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             years: 27, 
//             position: ''
//         }
//     }

//     nextYear = () => {
//         this.setState(state => ({
//             years: state.years + 1
//         }))
//     }

//     commitInputChanges = (e, color) => {
//         console.log(color);
//         this.setState({
//             position: e.target.value
//         })
//     }
// 
//     render() {
//         const {name, surname, link} = this.props;
//         const {position, years} = this.state;
//         return (
//             <div>
//                 <button onClick={this.nextYear}>+++</button>
//                 <h1>My name is {name}, surname - {surname},
//                     age - {years}, 
//                     position - {position}
//                 </h1>
//                 <a href={link}>My profile</a>
//                 <form>
//                     <span>Введите должность</span>
//                     <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')}/>
//                 </form>
//             </div>
//         )
//     }
// }


function App() {
    const data = [
        {name: 'John', salary: '800', increase: false, id: 1},
        {name: 'George', salary: '1500', increase: true, id: 2},
        {name: 'Endy', salary: '844550', increase: true, id: 3},
    ]

    return (
        <div className="app"> 
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>

            {/* <WhoAmI name='dss' surname ='miller' link='dsds'/> */}
        </div>
    );
}

export default App;