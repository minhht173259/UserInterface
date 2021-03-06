import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './style/style.css';
import {
  Col,
  Row,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
} from 'reactstrap';
import Widget from '../../components/Widget/Widget.js';
import 'font-awesome/css/font-awesome.min.css';

import cloudIcon from '../../assets/tables/cloudIcon.svg';
import funnelIcon from '../../assets/tables/funnelIcon.svg';
import optionsIcon from '../../assets/tables/optionsIcon.svg';
import printerIcon from '../../assets/tables/printerIcon.svg';
import searchIcon from '../../assets/tables/searchIcon.svg';

import s from './Tables.module.scss';
import mock from './mock.js';
import { Modal } from 'react-bootstrap';
import { Notification2 } from '../../components/Notification/Notification.js';
import { toast } from 'react-toastify';
import './styles.scss';
import classNames from 'classnames';
import SelectCrm from './components/SelectCrm.js';
import { Select } from 'antd';
import AddForm from './AddForm.js';
import { customers, data, changeData } from './data/customer.js';
import { element } from 'prop-types';
import EditForm from './EditForm';
const CrmCustomers = function () {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [firstTable, setFirstTable] = useState(data);
  const [secondTable] = useState(mock.secondTable);
  const [transactions, setTransactions] = useState(mock.transactionsWidget);
  const [tasks, setTasks] = useState(mock.tasksWidget);
  const [firstTableCurrentPage, setFirstTableCurrentPage] = useState(0);
  const [secondTableCurrentPage, setSecondTableCurrentPage] = useState(0);
  const [tableDropdownOpen, setTableMenuOpen] = useState(false);

  const [openExport, setOpenExport] = useState(false);
  const [openAddForm, setOpenAddForm] = useState(false);

  const pageSize = 10;
  const firstTablePagesCount = Math.ceil(firstTable.length / pageSize);

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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showPopupElment, setShowPopupElment] = useState(false);
  const handleShowPopup = () => setShowPopupElment(true);

  const submitForm = (info) => {
    var newFirstTable = [...firstTable];
    newFirstTable.push({
      id: 'checkbox113',
      code: 'KH00' + (newFirstTable.length + 1),
      name: info[0],
      type: info[1],
      email: info[2],
      phone: info[3],
      assignee: info[4],
      status: customers.status[0],
    });
    setFirstTable(newFirstTable);
    changeData(newFirstTable);
  };

  const deleteCustom = (index) => {
    var newTable = [...firstTable];
    var elementDeleted = newTable.splice(index, 1);
    for (var i = 0; i < newTable.length; i++) {
      newTable[i].cusId = 'KH00' + (i + 1);
    }
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
      success: '???? x??a ' + elementDeleted[0].name,
      error: 'Th??m th???t b???i',
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

  const [filter, setFilter] = useState({
    name: '',
    status: 'Tr???ng th??i',
    type: 'Lo???i',
    assignee: 'Ng?????i qu???n l??',
  });

  const [changeIndex, setChangeIndex] = useState(-1);
  const handleChangeSubmit = (e) => {
    var newFirstTable = [...firstTable];
    firstTable[changeIndex] = {
      id: 'checkbox113',
      code: newFirstTable[changeIndex].id,
      name: e[0],
      status: e[5],
      type: e[1],
      email: e[2],
      phone: e[3],
      assignee: e[4],
    };
  };

  const [showChangeElment, setShowChangeElment] = useState(false);
  const handleShowChange = () => setShowChangeElment(true);
  const handleCloseChange = () => setShowChangeElment(false);
  const [deleteIndex, setDeleteIndex] = useState(-1);
  return (
    <div>
      {/* <AddForm open={openAddForm} onClose={() => setOpenAddForm(false)} /> */}
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
          <h4> Xu???t b??o c??o th??nh c??ng ??? ?????a ch??? email 'abc@gamil.com' </h4>
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
          }}>B???n c?? th???c s??? mu???n x??a</h4>
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
                deleteCustom(deleteIndex);
                setShowPopupElment(false)
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </Modal>
      <Row>
        <Col>
          <Row className='header__container'>
            <div className='headline-1'>Qu???n l?? th??ng tin kh??ch h??ng</div>
            <div>
              <button
                color='primary'
                className={classNames('button_add')}
                onClick={() => handleShow()}
              >
                Th??m m???i kh??ch h??ng
              </button>
              <button
                color='primary'
                className={classNames('button_export')}
                onClick={() => setOpenExport(true)}
              >
                Xu???t b??o c??o
              </button>
            </div>
          </Row>
          {/* Filter */}
          <Row className='filter__root'>
            <div className='filter__container'>
              <img src={searchIcon} alt='Search' className='icon_search' />
              <input
                type='text'
                placeholder='T??n kh??ch h??ng v?? d???: Ho??ng'
                value={filter.name}
                style={{ paddingLeft: '40px' }}
                onChange={(e) => {
                  var newFilter = { ...filter };
                  newFilter.name = e.target.value;
                  setFilter(newFilter);
                }}
              ></input>
              <button type='button' className={classNames('button_search')}>
                T??m ki???m
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
                <option value={'Tr???ng th??i'}>{'Tr???ng th??i'}</option>
                {customers.status.map((element, index) => {
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
                value={filter.type}
                onChange={(e) => {
                  var newFilter = { ...filter };
                  newFilter.type = e.target.value;
                  setFilter(newFilter);
                }}
              >
                <option value={'Lo???i'}>{'Lo???i'}</option>
                {customers.types.map((element, index) => {
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
                value={filter.assignee}
                onChange={(e) => {
                  var newFilter = { ...filter };
                  newFilter.assignee = e.target.value;
                  setFilter(newFilter);
                }}
              >
                <option value={'Ng?????i qu???n l??'}>{'Ng?????i qu???n l??'}</option>
                {customers.assignees.map((element, index) => {
                  return <option value={element}>{element}</option>;
                })}
              </select>

              {/* <SelectCrm title={"Tr???ng th??i kh??ch h??ng"} />
              <SelectCrm title={"Ng?????i qu???n l??"} />
              <SelectCrm title={"Nh??m kh??ch h??ng"} /> */}
            </div>
          </Row>
          <Row className='mb-4'>
            <Col>
              <Widget>
                <div className={s.tableTitle}>
                  <div></div>
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
                        <th className='w-5'>M?? kh??ch h??ng</th>
                        <th className='w-20'>T??n kh??ch h??ng</th>
                        <th className='w-10'>Tr???ng th??i kh??ch h??ng</th>
                        <th className='w-10'>Lo???i kh??ch h??ng</th>
                        <th className='w-20'>Email</th>
                        <th className='w-10'>S??? ??i???n tho???i</th>
                        <th className='w-20'>Ng?????i qu???n l??</th>
                        <th className='w-10'>H??nh ?????ng</th>
                      </tr>
                    </thead>
                    <tbody>
                      {firstTable
                        .slice(
                          firstTableCurrentPage * pageSize,
                          (firstTableCurrentPage + 1) * pageSize
                        )
                        .map((item, index) => {
                          if (filter.name != '') {
                            var perfectName = filter.name
                              .trim()
                              .replace(/\s+/g, ' ')
                              .toLowerCase()
                              .normalize('NFD')
                              .replace(/[\u0300-\u036f]/g, '');

                            var perfectItem = item.name
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
                          if (filter.status != 'Tr???ng th??i') {
                            if (item.status != filter.status) {
                              return;
                            }
                          }
                          if (filter.type != 'Lo???i') {
                            if (item.type != filter.type) {
                              return;
                            }
                          }
                          if (filter.assignee != 'Ng?????i qu???n l??') {
                            if (item.assignee != filter.assignee) {
                              console.log(item.manager);
                              console.log(filter.assignee);

                              return;
                            }
                          }
                          return (
                            <tr key={uuidv4()}>
                              <td>{item.code}</td>
                              <td>{item.name}</td>
                              <td>{item.status}</td>
                              <td>{item.type}</td>
                              <td>{item.email}</td>
                              <td>{item.phone}</td>
                              <td>{item.assignee}</td>

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

export default CrmCustomers;
