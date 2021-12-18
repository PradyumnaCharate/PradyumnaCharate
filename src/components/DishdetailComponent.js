import React,{Component} from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle,Breadcrumb,BreadcrumbItem,Modal,ModalBody,Button,ModalHeader,Label ,Row,Col} from 'reactstrap';
import { Link } from "react-router-dom";
import { Control,LocalForm,Errors} from "react-redux-form";
import { Loading } from './LoadingComponent';
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

    function ConvertDateToCommentDateFormat(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
      }

   function RenderDish({dish}){
     if (dish != null) {
            return(
              <FadeTransform   in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(-50%)'
            }}>
                  <Card>
                      <CardImg width="100%" src={baseUrl+dish.image} alt={dish.name}/>
                      <CardBody>
                          <CardTitle>{dish.name}</CardTitle>
                          <CardText>{dish.description}</CardText>
                      </CardBody>

                  </Card>
                </FadeTransform>
            );

        }
      else{
            return(
                <div></div>
            );
        }
    }
    function RenderComments({comments}){
        if (comments == null || comments.length === 0) {
            return (
              <div></div>
            );
          }
      
          const renderedComments = comments.map((comment) => {
            return (
              <Fade in>
                <li>
                  <p>{comment.comment}</p>
                  <p>-- {comment.author}, {ConvertDateToCommentDateFormat(comment.date)} </p>
                </li>
              </Fade>
            );
          });
      
          return (
            //when you have list of items you can stagger the things
            <div>
              <h4>Comments</h4>
              <ul className="list-unstyled">
            
                <Stagger in>
               
                      { renderedComments }
                </Stagger>
              </ul>
            </div>
          );
        }
        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);
        class CommentForm  extends Component{
          
          constructor(props){
            super(props);
            this.toggleModal = this.toggleModal.bind(this);
            this.state = {
              isModalOpen:false
            };
          
          }
          toggleModal(){
            this.setState({
              isModalOpen:!this.state.isModalOpen
    
            });
          }
          handleSubmit(values){
            this.toggleModal();
            this.props.postComment(this.props.dishId,values.rating,values.name,values.comment)
    }
          render(){
            return(
              <div>
                 <Button outline onClick={this.toggleModal}>
                        <span className="fa fa-pencil fa-lg "> Submit Comment</span>
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggleModal={this.toggleModal}>
                <ModalHeader isOpen={this.state.isModalOpen} toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                  <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Col md={{size: 4}}> 
                            <Label htmlFor="rating">Rating</Label>
                        </Col>
                    </Row>
                    <Row className="form-group">
                      <Col> 
                        <Control.select model=".rating" id="rating" name="rating"
                          className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Control.select>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col md={{size: 4}}> 
                            <Label htmlFor="name">Your Name</Label>
                        </Col>
                    </Row>
                    <Row className="form-group">
                      <Col> 
                        <Control.text model=".name" id="name" name="name"
                          className="form-control" validators={
                            {
                              required,minLength:minLength(3),maxLength:maxLength(20)
                            }
                          }>
                       
                          </Control.text>
                          <Errors className="text-danger" model=".name" show="touched" messages={{
                            required:"This Field is Required,",
                            minLength: 'Must be greater than 2 numbers ',
                            maxLength: 'Must be 15 numbers or less'
                          }}> 
                          </Errors>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col md={{size: 4}}> 
                            <Label htmlFor="comment">Comment</Label>
                        </Col>
                    </Row>
                    <Row className="form-group">
                      <Col> 
                        <Control.textarea model=".comment" id="comment" name="comment"
                          className="form-control" rows="10">
                           
                          </Control.textarea>
                        </Col>
                    </Row>
                    <br></br>
                    <Row className="form-group">
                      <Col>
                        <Button type="submit" color="primary">Submit
                        </Button>
                      </Col>
                    </Row>
                  </LocalForm>
                </ModalBody>

      


                </Modal>

              </div>
             

            );

          }
        }
      
        const DishDetail=(props) => {

        if (props.isLoading) {
          return(
              <div className="container">
                  <div className="row">            
                      <Loading />
                  </div>
              </div>
          );
        }
        else if (props.errMess) {
          return(
              <div className="container">
                  <div className="row">            
                      <h4>{props.errMess}</h4>
                  </div>
              </div>
          );
      }
        else if (props.dish != null) {
            return (
            <div className="container">
              <div className="row">
              <Breadcrumb>
                      <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem> 
                      <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                      <div className="col-12">
                          <h3>{props.dish.name}</h3>
                          <hr/>
                      </div>
                </Breadcrumb>

              </div>
                <div className="row">
                  <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                  </div>
                  <div className="col-12 col-md-5 m-1">
                      <RenderComments comments={props.comments} />
                      <CommentForm postComment={props.postComment}
                      dishId={props.dish.id}/>
                      
                    </div>
              </div>

            </div>
            );
          }
          else {
            return (
              <div></div>
            );
          }
        }

       

      
      

      
export default DishDetail;