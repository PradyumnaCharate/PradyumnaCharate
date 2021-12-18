import React,{ Component } from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import  DishDetail  from "./DishdetailComponent";
import Footer from './FooterComponent';
import { Switch,Redirect,Route,withRouter } from 'react-router';//If we are using router then withRouter is reqquired to integrate react with redux
import { connect, Connect } from 'react-redux';//to connect comonents to state from store
import Contact from "./ContactComponent"
import Home from './HomeComponent';
import About from "./AboutusComponent";
import { postComment,fetchDishes,fetchComments,fetchPromos,fetchLeaders,postFeedback } from '../Redux/ActionCreators';//To modify comments state
import { actions } from 'react-redux-form';
import { TransitionGroup,CSSTransition } from "react-transition-group";

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

}//Recieve Dispatch function (from store)as one parameters 
const mapDispatchToProps=(dispatch)=>({
  postComment:(dishId,rating,author,comment)=>dispatch(postComment(dishId,rating,author,comment)),
  fetchDishes: () => { dispatch(fetchDishes())},
  fetchPromos: () => { dispatch(fetchPromos())},
  fetchComments: () => { dispatch(fetchComments())},
  fetchLeaders: () => { dispatch(fetchLeaders())},
  postFeedback:(values)=>dispatch(postFeedback(values)),
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}//form will be names aas feedback


})
class Main extends Component {
  constructor(props) {
    super(props);
    
  }
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders()
  }
  
 
  //filter method will return array of elements for which given condition is true
  render(){
    const HomePage=()=>{
      return(
        <Home 
        dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
        dishesLoading={this.props.dishes.isLoading}
        dishesErrMess={this.props.dishes.errMess}
        promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
        promosLoading={this.props.promotions.isLoading}
        promosErrMess={this.props.promotions.errMess}
        leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
        leadersLoading={this.props.leaders.isLoading}
        leadersErrMess={this.props.leaders.errMess}
    />
        )
    }
    const DishWithId =({match})=>{
      return( 
        <DishDetail dish={this.props.dishes.dishes.filter((dish)=>dish.id==parseInt(match.params.dishId,10))[0]}
        isLoading={this.props.dishes.isLoading}
        errMess={this.props.dishes.errMess}
        comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        errMess={this.props.comments.errMess}
        postComment={this.props.postComment} />
      
      );
        
    }
    //
    //exact path means nothing will follow menu we want exact menu link

    return (
      //Wherever you want to apply annimation surround that by transition-group
      <div>
        <Header/>
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
              <Route path="/home" component={HomePage}/>
              <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/>}/>  
              <Route path="/menu/:dishId" component={DishWithId}/>
              <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
              <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders.leaders}/>}/> 
              <Redirect to="/home"/>         
            </Switch>
        </CSSTransition>
        </TransitionGroup>
        <Footer/> 
      </div>
    );
  }
}
//filter method is for arrays in js.It checks if given condition is true for each element in array and returns array of elements.
//In our case dish id is unique so it will exactly return 1 element so we have used [0] to aceesss first and only element in array.


//to connect state with component and also with router
export default withRouter((connect(mapStateToProps,mapDispatchToProps)(Main)));
