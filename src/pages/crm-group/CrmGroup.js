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
import Widget from '../../components/Widget/Widget.js';
import TaskContainer from './components/TaskContainer/TaskContainer.js';
import 'font-awesome/css/font-awesome.min.css';
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
import { Button, Modal } from 'react-bootstrap';
import AddForm from './AddForm.js';
import { Notification2 } from '../../components/Notification/Notification.js';
import { toast } from 'react-toastify';
import './styles.scss';
import classNames from 'classnames';
import SelectCrm from '../CRM-customer/components/SelectCrm.js';
import { data, changeData } from './data/data.js';
import EditForm from './EditForm.js';
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [deleteIndex, setDeleteIndex] = useState(-1);
  const [showPopupElment, setShowPopupElment] = useState(false);
  const handleShowPopup = () => setShowPopupElment(true);

  const handleSubmitAddForm = (newValue) => {
    var newFirstTable = [...firstTable];
    newValue.numberOfCustomer = 10;
    newValue.id = 'checkbox111';
    newValue.img = '';
    newFirstTable.push(newValue);
    setFirstTable(newFirstTable);
    changeData(newFirstTable);
  };

  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const [editIndex, setEditIndex] = useState(-1);
  const handleEditSubmit = (newValue) => {
    var newFirstTable = [...firstTable];
    newFirstTable[editIndex].groupId = newValue.groupId;
    newFirstTable[editIndex].groupName = newValue.groupName;
    newFirstTable[editIndex].groupDescription = newValue.groupDescription;
    newFirstTable[editIndex].groupNumCustomer = newValue.groupNumCustomer;
    setFirstTable(newFirstTable);
    changeData(newFirstTable);
  };

  const handleDeleteElement = (index) => {
    var newFirstTable = [...firstTable];
    newFirstTable.splice(index, 1);
    setFirstTable(newFirstTable);
    changeData(newFirstTable);
  };

  const [filter, setFilter] = useState({
    groupId: '',
  });
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <AddForm handleClose={handleClose} handleSubmit={handleSubmitAddForm} />
      </Modal>
      <Modal show={showEdit} onHide={handleCloseEdit}>
        <EditForm
          handleClose={handleCloseEdit}
          handleSubmit={handleEditSubmit}
          info={firstTable[editIndex]}
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
                handleDeleteElement(deleteIndex);
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
            <div className='headline-1'>Nh??m kh??ch h??ng</div>
            <div>
              <button
                color='primary'
                className={classNames('button_add')}
                onClick={() => setShow(true)}
              >
                Th??m m???i nh??m kh??ch h??ng
              </button>
            </div>
          </Row>
          {/* Filter */}
          <Row className='filter__root'>
            <div className='filter__container'>
              <img src={searchIcon} alt='Search' className='icon_search' />
              <input
                type='text'
                placeholder='T??m ki???m theo m?? nh??m kh??ch h??ng v?? d???: NKH01'
                value={filter.groupId}
                style={{ paddingLeft: '40px' }}
                onChange={(e) => {
                  setFilter({
                    groupId: e.target.value,
                  });
                }}
              ></input>
              <button type='button' className={classNames('button_search')}>
                T??m ki???m
              </button>
            </div>
            {/* <div className='filter__options'>
              <SelectCrm title={'Tr???ng th??i kh??ch h??ng'} />
              <SelectCrm title={'Ng?????i qu???n l??'} />
              <SelectCrm title={'Nh??m kh??ch h??ng'} />
            </div> */}
          </Row>
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
                        <th className='w-24'>M?? nh??m kh??ch h??ng</th>
                        <th className='w-24'>T??n nh??m kh??ch h??ng</th>
                        <th className='w-24'>M?? t??? nh??m kh??ch h??ng</th>
                        <th className='w-24'>S??? l?????ng KH</th>
                        <th className='w-24'>H??nh ?????ng</th>
                      </tr>
                    </thead>
                    <tbody>
                      {firstTable
                        .slice(
                          firstTableCurrentPage * pageSize,
                          (firstTableCurrentPage + 1) * pageSize
                        )
                        .map((item, index) => {
                          var perfectGroupIdFilter = filter.groupId
                            .trim()
                            .replace(/\s+/g, ' ')
                            .toLowerCase()
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, '');
                          var perfectItemGroupId = item.groupId
                            .trim()
                            .replace(/\s+/g, ' ')
                            .toLowerCase()
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, '');
                          if (
                            perfectItemGroupId.search(perfectGroupIdFilter) ==
                            -1
                          ) {
                            return;
                          }
                          return (
                            <tr key={uuidv4()}>
                              <td>{item.groupId}</td>
                              <td>{item.groupName}</td>
                              <td>{item.groupDescription}</td>
                              <td>{item.groupNumCustomer}</td>
                              <td>
                                <i
                                  className={classNames(
                                    'fa fa-edit',
                                    'edit__hover'
                                  )}
                                  style={{ marginRight: '10px' }}
                                  onClick={() => {
                                    setEditIndex(
                                      index + firstTableCurrentPage * pageSize
                                    );
                                    handleShowEdit();
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
                                    setShowPopupElment(true)
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

export default CrmCare;
