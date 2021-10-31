import React,{ Component } from "react";
import { Media } from "reactstrap";

class Menu extends Component{
    constructor(props){
        super(props);
        //State strores properties related to component that we can use of in code
        this.state={
            dishes:[
                {
                    id: 0,
                    name:'Uthappizza',
                    image: 'assets/images/uthappizza.png',
                    category: 'mains',
                    label:'Hot',
                    price:'4.99',
                    description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        
                },
                {
                    id: 1,
                    name:'Zucchipakoda',
                    image: 'assets/images/zucchipakoda.png',
                    category: 'appetizer',
                    label:'',
                    price:'1.99',
                    description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        
                },
                {
                    id: 2,
                    name:'Vadonut',
                    image: 'assets/images/vadonut.png',
                    category: 'appetizer',
                    label:'New',
                    price:'1.99',
                    description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                       
                },
                {
                    id: 3,
                    name:'ElaiCheese Cake',
                    image: 'assets/images/elaicheesecake.png',
                    category: 'dessert',
                    label:'',
                    price:'2.99',
                    description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        
                }
            ],
        }
    }
    //We should implement render method to return corresponding view for this component
  
    render(){
    //The map() method creates a new array with the results of calling a function for every array element.
    //The map() method calls the provided function once for each element in an array, in order.
        const menu=this.state.dishes.map((dish) => {
            //for every dish in dishes we r returning layout for dish
            return(
                //whenever you construuct a list of items in react every item require key attribute to be specified. 
                //so that it unquuely identify each item by its id and whenever we make changes to UI of that particular 
                //item then it updates only that by key. 
                
                //mt-5 means top margin of 5; //tag="li" means each element will act as list ; ml-5 means left margin ;
                //Media left middle is reactstrap implementation of bootstrap media which will take media to ledt middle;
                <div key={dish.id} className="col-12 mt-5">
                    <Media tag="list" className='row'>
                        <Media left middle className="col-2"> 
                            <Media object src={dish.image} alt={dish.name} />
                        </Media>
                        <Media body className="ml-5 col-10" >
                            <Media heading>{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>
                    </Media>
                    
                </div>
            );
        });
        return(
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>

                </div>
            </div>

        );
    }
}
export default Menu;