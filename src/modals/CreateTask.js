import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const getInitialState = () => {
  const value = "priority";
  return value;
};

const CreateTaskPopup = ({ modal, toggle, save }) => {
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

  const handleSave = (e) => {
    e.preventDefault();
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Description1"] = description1;
    taskObj["Description"] = description;
    taskObj["Priority Level"] = value;
    setTaskName("");
    setDescription1("");
    save(taskObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>
        <form
          class="needs-validation"
          method="POST"
          action="index.html"
          novalidate
        >
          <div className="form-group">
            <label for="validationCustom01" class="form-label">
              Task Name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom01"
              value={taskName}
              onChange={handleChange}
              placeholder="Title goes here..."
              name="taskName"
              required
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              rows="5"
              className="form-control"
              placeholder="Description goes here..."
              value={description1}
              required
              onChange={handleChange}
              name="description1"
            ></textarea>
          </div>
          <div className="form-group">
            <label>Priority</label>
            <div
              rows="5"
              className="form-control1 h-0"
              value={description}
              onChange={handleChange}
              name="description"
            ></div>
          </div>

          <div class="btn-group">
            <select
              onChange={handleChange}
              value={value}
              name="prior"
              id="level"
              required
            >
              <option value="priority">Priority level</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <br />
        </form>
      </ModalBody>
      <ModalFooter>
        <Button
          id="submitbutton"
          type="submit"
          color="success"
          onClick={handleSave}
        >
          Create
        </Button>{" "}
        <Button color="danger" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
export default CreateTaskPopup;
