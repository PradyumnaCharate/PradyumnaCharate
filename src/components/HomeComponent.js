import { React } from "react";
import { Card, CardImg, CardImgOverlay,
    CardTitle,CardSubtitle,CardText ,CardBody, NavItem} from 'reactstrap';

    //Observe question mark on line 13..We have used js in jsx it is allowed...It means if item designation is not null then render it otherwise render the null
function RenderCard({item}){
    return(
        <Card>
            <CardImg height="350" src={item.image} alt={item.name}/>
            <CardBody>
                <CardTitle className="h4">{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>:null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>

    );
}

function Home(props) {
    return(
        <div className="container" id="featured">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader}/>
                </div>
            </div>
        </div>
    )

}
export default Home;   