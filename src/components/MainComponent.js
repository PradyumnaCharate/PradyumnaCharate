import React,{ Component } from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import  DishDetail  from "./DishdetailComponent";
import Footer from './FooterComponent';
import { Switch,Redirect,Route,withRouter } from 'react-router';//If we are using router then withRouter is reqquired to integrate react with redux
import { connect, Connect } from 'react-redux';//to connect comonents to state from store
import Contact from "./ContactComponent"
import Home from './HomeComponent';
import About from "./AboutusComponent"

//state is argument here.This will map redux stores state into props to available to components
//At the end we will connect this component to redux store
//Now these states will come as prps to main function..previously we were directyly using state here so now instead of this.state we will change it to this.props
const mapStateToProps=state=>{
  return{
    dishes:state.dishes,
    comments:state.comments,
    promotions:state.promotions,
    leaders:state.leaders
  }

}
class Main extends Component {
  constructor(props) {
    super(props);
    
  }
 
  //filter method will return array of elements for which given condition is true
  render(){
    const HomePage=()=>{
      return(
        <Home dish={this.props.dishes.filter((dish)=>dish.featured)[0]} 
        promotion={this.props.promotions.filter((promotion)=>promotion.featured)[0]} 
        leader={this.props.leaders.filter((leader)=>leader.featured)[0]}/>
        )
    }
    const DishWithId =({match})=>{
      return( 
        <DishDetail dish={this.props.dishes.filter((dish)=>dish.id==parseInt(match.params.dishId,10))[0]}
        comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      
      );
        
    }
    //
    //exact path means nothing will follow menu we want exact menu link

    return (
     
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/>}/>  
          <Route path="/menu/:dishId"component component={DishWithId}/>
          <Route exact path="/contactus" component={Contact}/>
          <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders}/>}/> 
          <Redirect to="/home"/>         
        </Switch>
        <Footer/> 
      </div>
    );
  }
}
//filter method is for arrays in js.It checks if given condition is true for each element in array and returns array of elements.
//In our case dish id is unique so it will exactly return 1 element so we have used [0] to aceesss first and only element in array.


//to connect state with component and also with router
export default withRouter((connect(mapStateToProps)(Main)));
