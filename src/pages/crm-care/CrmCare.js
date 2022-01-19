import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
} from 'reactstrap';
import { Button, Modal } from 'react-bootstrap';
import Widget from '../../components/Widget/Widget.js';
import TaskContainer from './components/TaskContainer/TaskContainer.js';

// import BootstrapTable from "react-bootstrap-table-next";
// import paginationFactory from 'react-bootstrap-table2-paginator';
// import MUIDataTable from "mui-datatables";

import cloudIcon from '../../assets/tables/cloudIcon.svg';
import funnelIcon from '../../assets/tables/funnelIcon.svg';
import optionsIcon from '../../assets/tables/optionsIcon.svg';
import printerIcon from '../../assets/tables/printerIcon.svg';
import searchIcon from '../../assets/tables/searchIcon.svg';
import moreIcon from '../../assets/tables/moreIcon.svg';
import s from './Tables.module.scss';
import mock from './mock.js';
import AddForm from './AddForm.js';
import EditForm from './EditForm';
import Notification, {
  Notification2,
} from '../../components/Notification/Notification.js';
import { toast } from 'react-toastify';
import './styles.scss';
import classNames from 'classnames';
import SelectCrm from '../CRM-customer/components/SelectCrm.js';
import { cares, data, changeData } from './data/care';

const CrmCare = function () {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [firstTable, setFirstTable] = useState(data);
  const [secondTable] = useState(mock.secondTable);
  const [transactions, setTransactions] = useState(mock.transactionsWidget);
  const [tasks, setTasks] = useState(mock.tasksWidget);
  const [firstTableCurrentPage, setFirstTableCurrentPage] = useState(0);
  const [secondTableCurrentPage, setSecondTableCurrentPage] = useState(0);
  const [tableDropdownOpen, setTableMenuOpen] = useState(false);

  const pageSize = 10;
  const firstTablePagesCount = Math.ceil(firstTable.length / pageSize);

  const [openExport, setOpenExport] = useState(false);

  const setFirstTablePage = (e, index) => {
    e.preventDefault();
    setFirstTableCurrentPage(index);
  };

  const setSecondTablePage = (e, index) => {
    e.preventDefault();
    setSecondTableCurrentPage(index);
  };

  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const transactionMenuOpen = (id) => {
    setTransactions(
      transactions.map((transaction) => {
        if (transaction.id === id) {
          transaction.dropdownOpen = !transaction.dropdownOpen;
        }
        return transaction;
      })
    );
  };

  const tableMenuOpen = () => {
    setTableMenuOpen(!tableDropdownOpen);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      })
    );
  };

  const [filter, setFilter] = useState({
    activityName: '',
    priority: 'Độ ưu tiên',
    status: 'Trạng thái',
    careType: 'Loại hình chăm sóc',
    employee: 'Nhân viên quản lý',
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitForm = (info) => {
    var newFirstTable = [...firstTable];
    newFirstTable.push({
      id: 'checkbox111',
      activityName: info[0],
      careType: info[1],
      customerName: info[2],
      priority: info[3],
      employee: info[4],
      status: info[5],
      startDate: info[6],
      endDate: info[7],
    });
    setFirstTable(newFirstTable);
    changeData(newFirstTable);
  };

  const deleteCare = (index) => {
    var newTable = [...firstTable];
    var elementDeleted = newTable.splice(index, 1);
    setFirstTable(newTable);
    changeData(newTable);
    const notificationTypes = ['success'];
    const getRandomNotification = () => {
      return notificationTypes[
        Math.floor(Math.random() * notificationTypes.length)
      ];
    };
    let notificationName = getRandomNotification();
    let msg = {
      success: 'Đã xóa ' + elementDeleted[0].activityName,
      error: 'Thêm thất bại',
    };
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
  };

  const [changeIndex, setChangeIndex] = useState(-1);
  const [deleteIndex, setDeleteIndex] = useState(-1);
  const handleChangeSubmit = (e) => {
    firstTable[changeIndex] = {
      id: 'checkbox111',
      activityName: e[0],
      careType: e[1],
      customerName: e[2],
      priority: e[3],
      employee: e[4],
      status: e[5],
      startDate: e[6],
      endDate: e[7],
    };
  };

  const [showChangeElment, setShowChangeElment] = useState(false);
  const [showPopupElment, setShowPopupElment] = useState(false);
  const handleShowChange = () => setShowChangeElment(true);
  const handleShowPopup = () => setShowPopupElment(true);
  const handleCloseChange = () => setShowChangeElment(false);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <AddForm handleClose={handleClose} submitForm={submitForm} />
      </Modal>
      <Modal show={showChangeElment} onHide={handleCloseChange}>
        <EditForm
          handleClose={handleCloseChange}
          submitForm={handleChangeSubmit}
          info={firstTable[changeIndex]}
        />
      </Modal>
      {/* Modal Export */}
      <Modal show={openExport} onHide={() => setOpenExport(false)}>
        <div className='modal_export__container'>
          <img src='https://3.bp.blogspot.com/-LcEMnX2bshM/V8L36D14JLI/AAAAAAAAASc/1UWz_uWk6ek-ziP0xWvY_MuIucnhRTZaACEw/s1600/Bulletpoint_Bullet_Listicon_Shape_Bulletfont_Glyph_Typography_Bullet_Point_Customshape_Wingding_Custom_Tick_Accept_Check_Ok_Yes-512.png' />
          <h4> Xuất báo cáo thành công ở địa chỉ email 'abc@gamil.com' </h4>
          <button
            type='button'
            className={'button_search'}
            onClick={() => setOpenExport(false)}
          >
            Ok
          </button>
        </div>
      </Modal>
      <Modal show={showPopupElment} onHide={() => setShowPopupElment(false)}>
        <div className='modal_export__popup'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Error.svg/1200px-Error.svg.png' />
          <h4 style={{
            'marginTop':'16px'
          }}>Bạn có thực sự muốn xóa</h4>
          <div style={{
            'width': '70%',
            'display': 'flex',
            'justify-content': 'space-between',
            'marginBottom':'20px',
            'marginTop': '16px'
          }}>
            <button
              type='button'
              className={'cancelbtn'}
              onClick={() => setShowPopupElment(false)}
            >
              Cancel
            </button>
            <button
              type='button'
              className={'cancelbtn'}
              style={{
                'backgroundColor':'#e04d61'
              }}
              onClick={() => {
                deleteCare(deleteIndex);
                setShowPopupElment(false);}}
            >
              Yes
            </button>
          </div>
        </div>
      </Modal>
      <Row>
        <Col>
          <Row className='header__container'>
            <div className='headline-1'>Hoạt động chăm sóc khách hàng</div>
            <div>
              <button
                color='primary'
                className={classNames('button_add')}
                onClick={() => setShow(true)}
              >
                Thêm mới hoạt động
              </button>
              <button
                color='primary'
                className={classNames('button_export')}
                onClick={() => setOpenExport(true)}
              >
                Xuất báo cáo
              </button>
            </div>
          </Row>
          {/* Filter */}
          <Row className='filter__root'>
            <div className='filter__container'>
              <img src={searchIcon} alt='Search' className='icon_search' />
              <input
                type='text'
                style={{ paddingLeft: '40px' }}
                placeholder='Tên hoạt động ví dụ: Hoạt đông 1'
                value={filter.activityName}
                onChange={(e) => {
                  var newFilter = { ...filter };
                  newFilter.activityName = e.target.value;
                  setFilter(newFilter);
                }}
              ></input>
              <button type='button' className={classNames('button_search')}>
                Tìm kiếm
              </button>
            </div>
            <div className='filter__options' style={{ marginRight: '600px' }}>
              <select
                name='customerType'
                id='customerTypes'
                style={{
                  marginRight: '30px',
                  padding: '5px',
                  height: '45px',
                  width: 'fit-content',
                }}
                value={filter.status}
                onChange={(e) => {
                  var newFilter = { ...filter };
                  newFilter.status = e.target.value;
                  setFilter(newFilter);
                }}
              >
                <option value={'Trạng thái'}>{'Trạng thái'}</option>
                {cares.status.map((element, index) => {
                  return <option value={element}>{element}</option>;
                })}
              </select>
              <select
                name='customerType'
                id='customerTypes'
                style={{
                  marginRight: '30px',
                  padding: '5px',
                  height: '45px',
                  width: 'fit-content',
                }}
                value={filter.careType}
                onChange={(e) => {
                  var newFilter = { ...filter };
                  newFilter.careType = e.target.value;
                  setFilter(newFilter);
                }}
              >
                <option value={'Loại hình chăm sóc'}>
                  {'Loại hình chăm sóc'}
                </option>
                {cares.careType.map((element, index) => {
                  return <option value={element}>{element}</option>;
                })}
              </select>
              <select
                name='customerType'
                id='customerTypes'
                style={{
                  marginRight: '30px',
                  padding: '5px',
                  height: '45px',
                  width: 'fit-content',
                }}
                value={filter.employee}
                onChange={(e) => {
                  var newFilter = { ...filter };
                  newFilter.employee = e.target.value;
                  setFilter(newFilter);
                }}
              >
                <option value={'Nhân viên quản lý'}>
                  {'Nhân viên quản lý'}
                </option>
                {cares.employee.map((element, index) => {
                  return <option value={element}>{element}</option>;
                })}
              </select>

              <select
                name='customerType'
                id='customerTypes'
                style={{
                  marginRight: '30px',
                  padding: '5px',
                  height: '45px',
                  width: 'fit-content',
                }}
                value={filter.priority}
                onChange={(e) => {
                  var newFilter = { ...filter };
                  newFilter.priority = e.target.value;
                  setFilter(newFilter);
                }}
              >
                <option value={'Độ ưu tiên'}>{'Độ ưu tiên'}</option>
                {cares.priority.map((element, index) => {
                  return <option value={element}>{element}</option>;
                })}
              </select>

              {/* <SelectCrm title={"Trạng thái khách hàng"} />
              <SelectCrm title={"Người quản lý"} />
              <SelectCrm title={"Nhóm khách hàng"} /> */}
            </div>
          </Row>
          {/* <Row className="filter__root">
            <div className="filter__container">
              <img src={searchIcon} alt="Search" className="icon_search" />
              <input
                type="text"
                placeholder="Tìm kiếm theo Tên hoạt động"
              ></input>
              <button type="button" className={classNames("button_search")}>
                Tìm kiếm
              </button>
            </div>
            <div className="filter__options">
              <SelectCrm title={"Tháng"} />
              <SelectCrm title={"Trạng thái"} />
              <SelectCrm title={"Loại hình chăm sóc"} />
              <SelectCrm title={"Nhân viên phụ trách"} />
            </div>
          </Row> */}
          <Row className='mb-4'>
            <Col>
              <Widget>
                <div className={s.tableTitle}>
                  <div className='headline-2'></div>
                  <div className='d-flex'>
                    <a href='/#'>
                      <img src={searchIcon} alt='Search' />
                    </a>
                    <a href='/#'>
                      <img
                        className='d-none d-sm-block'
                        src={cloudIcon}
                        alt='Cloud'
                      />
                    </a>
                    <a href='/#'>
                      <img src={printerIcon} alt='Printer' />
                    </a>
                    <a href='/#'>
                      <img
                        className='d-none d-sm-block'
                        src={optionsIcon}
                        alt='Options'
                      />
                    </a>
                    <a href='/#'>
                      <img src={funnelIcon} alt='Funnel' />
                    </a>
                  </div>
                </div>
                <div className='widget-table-overflow'>
                  <Table
                    className={`table-striped table-borderless table-hover ${s.statesTable}`}
                    responsive
                  >
                    <thead>
                      <tr>
                        {/* <th className={s.checkboxCol}>
                        <div className="checkbox checkbox-primary">
                          <input
                            className="styled"
                            id="checkbox100"
                            type="checkbox"
                          />
                          <label for="checkbox100"/>
                        </div>
                      </th> */}
                        <th className='w-auto'>Tên hoạt động</th>
                        <th className='w-auto'>Loại hình chăm sóc</th>
                        <th className='w-auto'>Tên khách hàng</th>
                        <th className='w-auto'>Độ ưu tiên</th>
                        <th className='w-auto'>Nhân viên phụ trách</th>
                        <th className='w-auto'>Trạng thái</th>
                        <th className='w-auto'>Ngày bắt đầu</th>
                        <th className='w-auto'>Ngày kết thúc</th>
                        <th className='w-auto'>Hành động</th>
                      </tr>
                    </thead>
                    <tbody>
                      {firstTable
                        .slice(
                          firstTableCurrentPage * pageSize,
                          (firstTableCurrentPage + 1) * pageSize
                        )
                        .map((item, index) => {
                          if (filter.activityName != '') {
                            var perfectName = filter.activityName
                              .trim()
                              .replace(/\s+/g, ' ')
                              .toLowerCase()
                              .normalize('NFD')
                              .replace(/[\u0300-\u036f]/g, '');

                            var perfectItem = item.activityName
                              .trim()
                              .replace(/\s+/g, ' ')
                              .normalize('NFD')
                              .replace(/[\u0300-\u036f]/g, '');
                            perfectItem = perfectItem.toLocaleLowerCase();
                            if (perfectName.length > perfectItem.length) {
                              return;
                            }
                            // for (var i = 0; i < perfectName.length; i++) {
                            //   if (perfectName[i] != perfectItem[i]) {
                            //     return;
                            //   }
                            // }
                            if (perfectItem.search(perfectName) == -1) {
                              return;
                            }
                          }
                          if (filter.status != 'Trạng thái') {
                            if (item.status != filter.status) {
                              return;
                            }
                          }
                          if (filter.careType != 'Loại hình chăm sóc') {
                            if (item.careType != filter.careType) {
                              return;
                            }
                          }
                          if (filter.priority != 'Độ ưu tiên') {
                            if (item.priority != filter.priority) {
                              return;
                            }
                          }
                          if (filter.employee != 'Nhân viên quản lý') {
                            if (item.employee != filter.employee) {
                              console.log(item.employee);
                              console.log(filter.employee);
                              return;
                            }
                          }
                          return (
                            <tr key={uuidv4()}>
                              {/* <td>
                            <div className="checkbox checkbox-primary">
                              <input
                                id={item.id}
                                className="styled"
                                type="checkbox"
                              />
                              <Label for={item.id} />
                            </div>
                          </td> */}
                              {/* <td className="d-flex align-items-center"><img className={s.image} src={item.img} alt="User"/><span className="ml-3">{item.name}</span></td> */}
                              <td>{item.activityName}</td>
                              <td>{item.careType}</td>
                              <td>{item.customerName}</td>
                              <td>{item.priority}</td>
                              <td>{item.employee}</td>
                              <td>{item.status}</td>
                              <td>{item.startDate}</td>
                              <td>{item.endDate}</td>
                              <td>
                                <td>
                                  <i
                                    className={classNames(
                                      'fa fa-edit',
                                      'edit__hover'
                                    )}
                                    style={{ marginRight: '10px' }}
                                    onClick={() => {
                                      setChangeIndex(
                                        index + firstTableCurrentPage * pageSize
                                      );
                                      handleShowChange();
                                    }}
                                  ></i>
                                  <i
                                    className={classNames(
                                      'fa fa-trash hover-button',
                                      'delete__hover'
                                    )}
                                    onClick={() => {
                                      setDeleteIndex(
                                        index + firstTableCurrentPage * pageSize
                                      );
                                      handleShowPopup();
                                    }}
                                  ></i>
                                </td>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </Table>
                  <Pagination
                    className='pagination-borderless'
                    aria-label='Page navigation example'
                  >
                    <PaginationItem disabled={firstTableCurrentPage <= 0}>
                      <PaginationLink
                        onClick={(e) =>
                          setFirstTablePage(e, firstTableCurrentPage - 1)
                        }
                        previous
                        href='#top'
                      />
                    </PaginationItem>
                    {[...Array(firstTablePagesCount)].map((page, i) => (
                      <PaginationItem
                        active={i === firstTableCurrentPage}
                        key={i}
                      >
                        <PaginationLink
                          onClick={(e) => setFirstTablePage(e, i)}
                          href='#top'
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem
                      disabled={
                        firstTableCurrentPage >= firstTablePagesCount - 1
                      }
                    >
                      <PaginationLink
                        onClick={(e) =>
                          setFirstTablePage(e, firstTableCurrentPage + 1)
                        }
                        next
                        href='#top'
                      />
                    </PaginationItem>
                  </Pagination>
                </div>
              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CrmCare;
