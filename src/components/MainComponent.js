import React,{ Component } from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import  DishDetail  from "./DishdetailComponent";
import Footer from './FooterComponent';
import { Switch,Redirect,Route } from 'react-router';
import Contact from "./ContactComponent"
import Home from './HomeComponent';
import {LEADERS} from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import { COMMENTS } from "../shared/comments";
import About from "./AboutusComponent"


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments:COMMENTS,
      promotions:PROMOTIONS,
      leaders:LEADERS
    };
  }
 
  //filter method will return array of elements for which given condition is true
  render(){
    const HomePage=()=>{
      return(
        <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]} 
        promotion={this.state.promotions.filter((promotion)=>promotion.featured)[0]} 
        leader={this.state.leaders.filter((leader)=>leader.featured)[0]}/>
        )
    }
    const DishWithId =({match})=>{
      return( 
        <DishDetail dish={this.state.dishes.filter((dish)=>dish.id==parseInt(match.params.dishId,10))[0]}
        comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      
      );
        
    }
    //
    //exact path means nothing will follow menu we want exact menu link

    return (
     
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>}/>  
          <Route path="/menu/:dishId"component component={DishWithId}/>
          <Route exact path="/contactus" component={Contact}/>
          <Route exact path="/aboutus" component={() => <About leaders={this.state.leaders}/>}/> 
          <Redirect to="/home"/>         
        </Switch>
        <Footer/> 
      </div>
    );
  }
}
//filter method is for arrays in js.It checks if given condition is true for each element in array and returns array of elements.
//In our case dish id is unique so it will exactly return 1 element so we have used [0] to aceesss first and only element in array.

export default Main;
