import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Common/Header/Header';

import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Container,
    Row,
    Col,
  } from "reactstrap";
import SetNavBar from '../Common/Header/Navbar/Navbar';
import { BookActions } from '../../Redux/actions/BookActions';

function AddBooks(){

    const [title,setTitle]=useState("");
    const [author,setAuthor]=useState("");
    const [category,setCategory]=useState("");
    const [booktype,setBooktype]=useState("");
    const [bookdescription,setBookdescription]=useState("");
   const [bookimage,setBookimage]=useState("");


    var uimage;

    function handleImageChange(event) {
      uimage=document.getElementById("output");
      uimage.src=URL.createObjectURL(event.target.files[0]);
      console.log(uimage.src);
     
      console.log( setBookimage(uimage.src));
      debugger;
      // setImage(uimage);
    };

    const {BookArr}=useSelector(state=>state.BookReducers);
    const {userInfo}=useSelector(state=>state.Login);

debugger;
   
  
    const dispatch=useDispatch();

    const handleSubmit = e => {
      e.preventDefault();
  debugger;
      var data = {
        title,
        author,
        category,
        booktype,
        bookdescription,
        createdBy:userInfo._id,
      };
      dispatch(BookActions.CreateBookActions(data));
      debugger;
    };

    // useEffect(()=>{
    //   dispatch(BookActions.CreateBookActions(data))
    //     debugger;
    // },[dispatch]);
  
    //return component 
    // return <div className='holder'>
    //          <Header/>
    //          <div className='container'>
             
    //          <Form className='m-5'>
    //             <Row className="mb-3">
    //                 <Form.Group as={Col} controlId="formGridEmail">
    //                     <Form.Label>Title</Form.Label>
    //                     <Form.Control size='lg' type="text" placeholder="Enter Book Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
    //                 </Form.Group>

    //                 <Form.Group as={Col} controlId="formGridPassword">
    //                      <Form.Label>Author</Form.Label>
    //                      <Form.Control size='lg' type="text" placeholder="Book Author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
    //                 </Form.Group>
    //             </Row>

    //             <Row className='mb-3'>
    //                 <Form.Group as={Col} controlId="formGridState">
    //                     <Form.Label>Category</Form.Label>
    //                     <Form.Select size='lg' defaultValue="Select Book Category" value={category} 
    //     onChange={(e) => setCategory(e.target.value)} >
    //                         <option value='Fiction'>Fiction</option>
    //                         <option value='Drama'>Drama</option>
    //                     </Form.Select>
    //                 </Form.Group>

    //                 <Form.Group as={Col} controlId="formGridState">
    //                     <Form.Label>Book Type</Form.Label>
    //                     <Form.Select size='lg' defaultValue="Select Profession" value={booktype} 
    //     onChange={(e) => setBooktype(e.target.value)} >
    //                         <option value='Public'>Public</option>
    //                         <option value='Private'>Private</option>
    //                     </Form.Select>
    //                 </Form.Group>
    //             </Row>

    //             <Row className='mb-3'>
    //                 <Form.Group  className="mb-3">
    //                     <Form.Label>Book Image</Form.Label>
    //                     <Form.Control onChange={handleImageChange} size='lg' type="file"  accept='image/*' id='image' />
    //                     <img className='mb-2' style={{width:'auto',marginTop:20}} id="output" width={150} height={150} src={uimage} />
    //                 </Form.Group>
    //             </Row>
    //         <Row>
    //              <Button style={{alignSelf:'center',width:100,justifyContent:'center'}} size='lg' 
    //             className='btn btn-success text-center' type="button" onClick={handleSubmit}>
    //                 Submit
    //             </Button>
    
    //         </Row>
    //             <Button color="primary" style={{ display: 'none' }}>Edit</Button>
    //         </Form>
    //        </div> 
          
    //       {/* this is footer div area ... so style it  */}
    //        <div style={{backgroundColor:'greenyellow', height:90,justifyItems:'center',alignContent:'center',alignItems:'center'}} className='footer'>
    //         <h1 style={{alignSelf:'center',marginTop:30,paddingTop:20}} className='text-center'> Footer Here</h1>
    //        </div>
    //        </div>
    return (<>
        <SetNavBar/>
        <Container className="mt-4">
          <Row>
            <Col sm="6" className="text-black">
              <div className="text-center">
                <i style={{ fontSize: "66px" }} className="bi bi-book"></i>
                <h3 className="fw-bold my-3 pb-3 " style={{ letterSpacing: "1px" }}>
                  ADD BOOK
                </h3>
              </div>
              <Form className="mx-5" method='POST' onSubmit={handleSubmit} style={{fontSize:"16px"}}>
                <FormGroup>
                  <Label htmlFor="fullname">Book Title</Label>
                  <Input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) =>
                      setTitle(e.target.value)
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="author">Author</Label>
                  <Input
                    type="text"
                    name='author'
                    id="author"
                    value={author}
                    onChange={(e) =>
                      setAuthor( e.target.value )
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="category">Category</Label>
                  <Input
                    type="select"
                   
                    id="category"
                    value={category}
                    onChange={(e) =>
                      setCategory(e.target.value )
                    }
                  >
                    <option>Select Category</option>
                    <option value="Drama">Drama</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Naval">Naval</option>
                  </Input>
                </FormGroup>
                
                <FormGroup>
                <Label htmlFor="gender">Book Type</Label>
                  <Input
                    type="select"
                    
                    id="booktype"
                    value={booktype}
                    onChange={(e) =>
                      setBooktype(e.target.value )
                    }
                  >
                    <option>Select Book-Type</option>
                    <option value="Public">Public</option>
                    <option value="Private">Private</option>
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="bookdescription">Book Type</Label>

                <input name="bookdescription" cols="65" rows="5" type='text'
                id='bookdescription'
                value={bookdescription}
                 onChange={(e) =>
                    setBookdescription(e.target.value )
                  }
                ></input>
                </FormGroup>
                <FormGroup>
        <Label for="image" >Image</Label><br />
        <Input type="file" accept="image/*" name="image" id="image" onChange={handleImageChange} />
        <img id="output"  height="150" src={uimage} style={{width:"100px",marginLeft:"35%"}}/>
      </FormGroup>
             
                <div className="pt-1 mb-4">
                  <Button color="info" className="btn-lg w-100" >
                    Add book
                  </Button>
    </div>
    </Form>
    </Col>
    <Col sm="6" className="text-black">
              <img
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGlicmFyeXxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt="Login image"
                className="w-100 vh-100 rounded-3"
                style={{ objectFit: "cover", objectPosition: "left" }}
              />
    </Col>
    </Row>
    </Container>
    </>
      )
           
}

export default AddBooks;