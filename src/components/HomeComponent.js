import { React } from "react";
import { Card, CardImg, CardImgOverlay,
    CardTitle,CardSubtitle,CardText ,CardBody, NavItem} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform } from "react-animation-components";

    //Observe question mark on line 13..We have used js in jsx it is allowed...It means if item designation is not null then render it otherwise render the null
function RenderCard({item,isLoading, errMess}){
    if (isLoading) {
        return(
                <Loading />
        );
    }
    else if (errMess) {
        return(
                <h4>{errMess}</h4>
        );
    }
    else 
        return(
            //
            <FadeTransform   in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(-50%)'
            }}>
                <Card>
                    <CardImg height="350" src={baseUrl+item.image} alt={item.name}/>
                    <CardBody>
                        <CardTitle className="h4">{item.name}</CardTitle>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>:null}
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>

        );
}

function Home(props) {
    return(
        <div className="container" id="featured">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess}  />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} isLoading={props.promosLoading} errMess={props.commentsErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} isLoading={props.leadersLoading} errMess={props.leadersErrMess}/>
                </div>
            </div>
        </div>
    )

}
export default Home;   