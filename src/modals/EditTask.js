import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const getInitialState = () => {
  const value = "priority";
  return value;
};

const EditTaskPopup = ({ modal, toggle, updateTask, taskObj }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [description1, setDescription1] = useState("");
  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue(e.target.value);

   if (name === "taskName") {
      setTaskName(value);
    } else if (name === "description1") {
      setDescription1(value);
      setValue(value);
    } else {
      setDescription(value);
      setValue(value);
    }
  };

  useEffect(() => {
    setTaskName(taskObj.Name);
    setDescription1(taskObj.Description1);
    setDescription(taskObj.Description);
    setValue(taskObj.value);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["Name"] = taskName;
    tempObj["Description1"] = description1;
    tempObj["Description"] = description;
    taskObj["Priority Level"] = value;
    setTaskName("");
    setDescription1("");
   
    if(taskName==''){
      document.getElementById('taskname_msg').innerText='* Taskname is required';
          document.getElementById('taskname_msg').style.color="red";
    }
    else if(value==''){
         document.getElementById('level');
    }
    else{
      updateTask(tempObj);
    }
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Task</ModalHeader>
      <ModalBody>
      <div className="form-group">
            <label for="validationCustom01" class="form-label">
              Task Name</label>
            <input type="text"
              id="validationCustom01"
              value={taskName}
              className="form-control"
              onChange={handleChange}
              placeholder="Title goes here..."
              name="taskName"/>
              <p><small id='taskname_msg'></small></p>
          </div>
          <div className="form-group">
            <label for="">Description</label>
            <textarea
              rows="5"
              className="form-control"
              placeholder="Description goes here..."
              value={description1}
              onChange={handleChange}
              name="description1"
            ></textarea>
          </div>
          <br/>
          <div className="form-control">
            <label for="level">Priority</label>
            <div
              rows="5"
              className="form-control1"
              value={description}
              onChange={handleChange}
              name="description"
            ></div>
            <select
              onChange={handleChange}
              value={value}
              name="prior"
              id="level"
              className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <option value="priority"aria-labelledby="level" selected>Priority level</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <br/>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          Update
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTaskPopup;
