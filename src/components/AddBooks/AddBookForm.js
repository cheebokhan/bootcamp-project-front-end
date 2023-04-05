import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import bootstrap from 'bootstrap';
import CreateBookActions from '../../Redux/actions/BookActions';
import UserHeader from '../Userpages/UserHeader/UserHeader';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


const AddBook = () => {
  const [title,setTitle]=useState();
  const [author,setAuthor]=useState();
  const [category,setCategory]=useState();
  const [profession,setProfession]=useState();
   
  var uimage;

  function handleImageChange(event) {
    uimage=document.getElementById("output");
    uimage.src=URL.createObjectURL(event.target.files[0]);
    // setImage(uimage);
  };


  const dispatch=useDispatch();
  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      title,
      author,
      category,
      profession,
    };
    dispatch(CreateBookActions(data));
  };


 
  
  return (<>
    <UserHeader/>
    <br/><br/>
    <div className='row'>
      <div className='col-sm-3'>

      </div>
      <div className='col-sm-6'>
      <Form onSubmit={handleSubmit} style={{fontSize:"16px"}} >
      <FormGroup>
        <Label for="Title">Title</Label>
        <Input type="text" name="Title" id="Title" value={title} onChange={(e) => setTitle(e.target.value)}
         placeholder="Title" />
      </FormGroup>
      <FormGroup>
        <Label for="author">Author</Label>
        <Input type="text" name="author" id="author" value={author} onChange={(e) => setAuthor(e.target.value)}
         placeholder="Author" />
      </FormGroup>
      <FormGroup>
        <Label for="category" >category</Label>
        <Input type="text" name="category" id="category" value={category} 
        onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
      </FormGroup>
      <FormGroup>
      <Label for="profession" >Profession</Label><br/>
                 <select  value={profession}
                          onChange={e => setProfession(e.target.value)}
                          className='custom-select'>

                          <option defaultValue='Professor'>
                            Professor
                          </option>
                          <option value='Student'>Student</option>
                         
                        </select>
       
      </FormGroup>
      <FormGroup>
        <Label for="image" >Image</Label><br />
        <Input type="file" accept="image/*" name="image" id="image" onChange={handleImageChange} />
        <img id="output" width="150" src={uimage} />
      </FormGroup>
      <Button type="submit" color="primary">Submit</Button>{' '}
      <Button color="primary" style={{ display: 'none' }}>Edit</Button>
    </Form>
</div>
<div className='col-sm-3'>

</div>

    </div>

    </>
  );
};

export default AddBook;