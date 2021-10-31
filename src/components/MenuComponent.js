import React,{ Component } from "react";
import { Media } from "reactstrap";
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

    class Menu extends Component{
    constructor(props){
        super(props);
        //State strores properties related to component that we can use of in code
        this.state={
            //Initialluy selectedDish is NULL but afterwards if we click on some card then that dish will get selected.
            selectedDish:null
        }
    }
    //change state of component when clicked on one of dish
    onDishSelect(dish){
        this.setState({ selectedDish: dish});
    }
    renderDish(dish){
        if (dish != null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>

                </Card>
            );

        }
        else{
            return(
                <div></div>
            );
        }
    }
    //We should implement render method to return corresponding view for this component
  
    render(){
    //The map() method creates a new array with the results of calling a function for every array element.
    //The map() method calls the provided function once for each element in an array, in order.
    //props because it is children of app component and with props it can acess state of app
        const menu=this.props.dishes.map((dish) => {
            //for every dish in dishes we r returning layout for dish
            return(
                //whenever you construuct a list of items in react every item require key attribute to be specified. 
                //so that it unquuely identify each item by its id and whenever we make changes to UI of that particular 
                //item then it updates only that by key. 
                
                //mt-5 means top margin of 5; //tag="li" means each element will act as list ; ml-5 means left margin ;
                //Media left middle is reactstrap implementation of bootstrap media which will take media to ledt middle;
                //m-1 is 1 margin to all sides
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=>this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                    
                </div>
            );
        });
        return(
            <div className="container">
                <div className="row">
                        {menu}
                 </div>
                 <div className="row">
                     {this.renderDish(this.state.selectedDish)}
                 </div>
            </div>

        );
    }
}
export default Menu;