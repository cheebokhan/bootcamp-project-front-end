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
import { useNavigate } from 'react-router-dom';

const AddBooks=(props)=>{

    const [title,setTitle]=useState("");
    const [author,setAuthor]=useState("");
    const [category,setCategory]=useState("");
    const [booktype,setBooktype]=useState("");
    const [bookdescription,setBookdescription]=useState("");
   const [bookimage,setBookimage]=useState("");

  const navigate=useNavigate();
    var uimage;

    function handleImageChange(event) {
      uimage=document.getElementById("output");
      uimage.src=URL.createObjectURL(event.target.files[0]);
      console.log(uimage.src);
     
    };

    const {BookArr}=useSelector(state=>state.BookReducers);
    const {userInfo}=useSelector(state=>state.Login);

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
        bookimage:bookimage.myFile,
        createdBy:userInfo._id,
      };
      const success= dispatch(BookActions.CreateBookActions(data));
      if (!success) {
        alert('Failed to add book');
        return;
      }
  
      navigate('/');
      debugger;
    };

    //convert book image into base 64
    const convertToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    };

    //set the image in form and then passs the selected image to convertToBase64 method
    const handleFileUpload = async (e) => {
      uimage=document.getElementById("output");
      uimage.src=URL.createObjectURL(e.target.files[0]);
      const file = e.target.files[0];
      const base64 = await convertToBase64(file);
      setBookimage({ ...bookimage, myFile: base64 });
    };
    
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
                  <Label htmlFor="bookdescription">Book Description</Label>

                <textarea name="bookdescription" cols="58" rows="5" type='text'
                id='bookdescription'
                value={bookdescription}
                 onChange={(e) =>
                    setBookdescription(e.target.value )
                  }
                ></textarea>
                </FormGroup>
                <FormGroup>
        <Label for="image" >Image</Label><br />
        <Input type="file" accept="image/*" name="image" id="image" onChange={handleFileUpload} />
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