import React, { useState } from "react";
import "./AddForm.module.css";
import { Button, Modal } from "react-bootstrap";
import { element } from "prop-types";
import { Notification2 } from "../../components/Notification/Notification.js";
import { toast } from "react-toastify";
import { cares, data } from "./data/care";
import {
  Col,
  Row,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  ButtonDropdown,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Label,
  Badge,
} from "reactstrap";
function AddForm(props) {
  const [activityName, setActivityName] = useState("Hoạt đông 1");
  const [careTypes, setCareTypes] = useState(["Gửi email", "Gọi điện tư vấn"]);
  const [careType, setCareType] = useState("Gửi email");
  const [priorities, setPriorities] = useState(["Ưu tiên thấp", "Ưu tiên cao"]);
  const [priority, setPriority] = useState("Ưu tiên thấp");
  const [employee, setEmployee] = useState("Hoàng Trọng Minh")
  const [employeeList, setEmployeeList] = useState([
    "Hoàng Trọng Minh",
    "Nguyễn Văn Quân",
    "Lê Xuân Vinh",
    "Nguyễn Văn Đạt"
    ]);
  const [status, setStatus] = useState([
    "Đang thực hiện"
    ]);
  const [customerName, setCustomerName] = useState("");
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  return (
    <>
      <div>
        <Modal.Header closeButton>
          <Modal.Title style={{ margin: "auto" }}>Thêm hoạt động chăm sóc</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="container">
            <form action="action_page.php">
              <label for="lname" value={activityName}>
                Tên hoạt động
              </label>
              <input
                type="text"
                id="activityName"
                name="activityName"
                value={activityName}
                onChange={(e) => {
                    setActivityName(e.target.value);
                }}
              />
              <label for="lname">Loại hình chăm sóc</label>
              <select
                name="careType"
                id="careType"
                value={careType}
                onChange={(e) => {
                  setCareType(e.target.value);
                }}
              >
                {careTypes.map((element, index) => {
                  return <option value={element}>{element}</option>;
                })}
              </select>

              <label for="lname">Tên khách hàng</label>

              <input
                type="text"
                value={customerName}
                onChange={(e) => {
                    setCustomerName(e.target.value);
                }}
              />

              <label for="lname">Mức độ ưu tiên</label>

              <select
                name="priority"
                id="priority"
                value={priority}
                onChange={(e) => {
                  setPriority(e.target.value);
                }}
              >
                {priorities.map((element, index) => {
                  return <option value={element}>{element}</option>;
                })}
              </select>
              <label for="lname">Người quản lý</label>
              <select
                name="employee"
                id="employee"
                value={employee}
                onChange={(e) => {
                  setEmployee(e.target.value);
                }}
              >
                {employeeList.map((element, index) => {
                  return <option value={element}>{element}</option>;
                })}
              </select>

              <label for="lname">Ngày bắt đầu</label> <br></br>
              <input
                type="date"
                value={startDate}
                onChange={(e) => {
                    setStartDate(e.target.value);
                }}
              /><br></br>
            <label for="lname">Ngày kết thúc</label> <br></br>
            <input
                type="date"
                value={endDate}
                onChange={(e) => {
                    setEndDate(e.target.value);
                }}
              />
            </form>
          </div>
        </Modal.Body>
      </div>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            props.handleClose();
          }}
        >
          Đóng
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            var mes = "Thêm thành công";
            if (activityName == "") {
              mes = "Tên hoạt động không được bỏ trống.";
            }
            if (customerName == "") {
              mes = "Tên khách hàng không đc bỏ trống.";
            }

            const notificationTypes = ["success", "error"];
            const getRandomNotification = () => {
              if (mes != "Thêm thành công") {
                mes = "Thêm thất bại " + mes;
                return notificationTypes[1];
              }
              props.submitForm([activityName, careType, customerName, priority, employee, status[0]]);

              return notificationTypes[0];
            };

            let notificationName = getRandomNotification();
            let msg = { success: mes, error: mes };
            toast(
              <Notification2
                type={notificationName}
                withIcon
                msg={msg[notificationName]}
              />,
              {
                autoClose: 4000,
                closeButton: false,
                hideProgressBar: true,
              }
            );
            if (notificationName == "success") props.handleClose();
          }}
        >
          Lưu
        </Button>
      </Modal.Footer>
    </>
  );
}

function getFormattedDate(date) {
    var year = date.getFullYear();
  
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
  
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return year + '-' + month + '-' + day;
  }

export default AddForm;
