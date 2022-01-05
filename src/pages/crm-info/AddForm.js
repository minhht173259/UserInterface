import React, { useState } from "react";
import "./AddForm.module.css";
import { Button, Modal } from "react-bootstrap";

function AddForm() {
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>Thêm khách hàng</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="container">
          <form action="action_page.php">
            <label for="fname">Tên khách hàng</label>
            <input type="text" id="fname" name="firstname" placeholder="" />

            <label for="lname">Loại khách hàng</label>
            <select name="customerType" id="customerTypes">
              <option value="Thân quen">Thân quen</option>
              <option value="Vip">Vip</option>
              <option value="Vip pro max">Tiềm năng</option>
              <option value="Bình thường">Bình thường</option>
              <option value="Đen">Đen</option>
            </select>

            <label for="lname">Người quản lý</label>
            <select name="managerInput" id="customerManagers">
              <option value="volvo">Hoàng Trọng Minh</option>
              <option value="saab">Nguyễn Văn Đạt</option>
              <option value="mercedes">Nguyễn Văn Quân</option>
              <option value="audi">Lê Xuân Vinh</option>
            </select>
            <label for="lname">Số điện thoại</label>

            <input type="text" placeholder="" />
          </form>
        </div>
      </Modal.Body>
    </div>
  );
}

export default AddForm;
