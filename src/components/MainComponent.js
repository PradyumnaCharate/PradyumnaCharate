import React,{ Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import  DishDetail  from "./DishdetailComponent";


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
         //Initialluy selectedDish is NULL but afterwards if we click on some card then that dish will get selected.
      selectedDish:null
    };
  }
      //change state of component when clicked on one of dish
  onDishSelect(dishId){
    this.setState({ selectedDish: dishId});
}
  render(){
    return (
        //So here we have two components Navbar and menu and they are in App component and this App component is used in index.js. 
        //So App component is paerent of menu component.
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}
        onClick={(dishId)=>this.onDishSelect(dishId)}/>
        <DishDetail dish={this.state.dishes.filter((dish)=>dish.id==this.state.selectedDish)[0]} />   
      </div>
    );
  }
}
//filter method is for arrays in js.It checks if given condition is true for each element in array and returns array of elements.
//In our case dish id is unique so it will exactly return 1 element so we have used [0] to aceesss first and only element in array.

export default Main;
