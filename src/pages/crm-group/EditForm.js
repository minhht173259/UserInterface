import React, { useState } from "react";
import "./AddForm.module.css";
import { Button, Modal } from "react-bootstrap";
import "./styles.scss";
import { element } from "prop-types";
import { Notification2 } from "../../components/Notification/Notification.js";
import { toast } from "react-toastify";
function EditForm(props) {
  const [groupId, setGroupId] = useState(props.info.groupId);
  const [groupName, setGroupName] = useState(props.info.groupName);
  const [groupDescription, setGroupDescription] = useState(
    props.info.groupDescription
  );
  const [groupNumCustomer, setGroupNumCustomer] = useState(props.info.groupNumCustomer);
  return (
    <>
      <div>
        <Modal.Header closeButton>
          <Modal.Title style={{ margin: "auto" }}>
            Sửa nhóm khách hàng
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="container">
            <form action="action_page.php">
              <label for="fname">Mã nhóm khách hàng</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder=""
                value={groupId}
                onChange={(e) => {
                  setGroupId(e.target.value);
                }}
              />

              <label for="lname">Tên nhóm khách hàng</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder=""
                value={groupName}
                onChange={(e) => {
                  setGroupName(e.target.value);
                }}
              />

              <label for="lname">Mô tả nhóm khách hàng</label>
              <input
                type="text"
                placeholder=""
                value={groupDescription}
                onChange={(e) => {
                  setGroupDescription(e.target.value);
                }}
              />
              <label for="lname">Số lượng khách hàng</label>
              <input
                type="text"
                placeholder=""
                value={groupNumCustomer}
                onChange={(e) => {
                  setGroupNumCustomer(e.target.value);
                }}
              />
            </form>
          </div>
        </Modal.Body>
      </div>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Đóng
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            var mes = "";
            if (groupId == "") {
              mes += " Không được bỏ trống nhóm khách hàng.";
            }
            if (groupName == "") {
              mes += " Không được bỏ trống tên khách hàng";
            }
            if (groupDescription == "") {
              mes += " Không được bỏ trống mô tả.";
            }
            if (mes == "") {
              mes = "Sửa thành công";
              props.handleSubmit({
                groupId: groupId,
                groupName: groupName,
                groupDescription: groupDescription,
                groupNumCustomer : groupNumCustomer
              });
            } else {
              mes = "Sửa thất bại " + mes;
            }

            const notificationTypes = ["success", "error"];
            const getRandomNotification = () => {
              if (mes == "Sửa thành công") {
                return notificationTypes[0];
              }
              return notificationTypes[1];
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

export default EditForm;
