import React, { useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Col,
  Row,
  Progress,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from 'reactstrap';
import Widget from '../../components/Widget/Widget.js';
import ApexActivityChart from './components/ActivityChart.js';

import meal1 from '../../assets/dashboard/meal-1.svg';
import meal2 from '../../assets/dashboard/meal-2.svg';
import meal3 from '../../assets/dashboard/meal-3.svg';
import upgradeImage from '../../assets/dashboard/upgradeImage.svg';
import heartRed from '../../assets/dashboard/heartRed.svg';
import heartTeal from '../../assets/dashboard/heartTeal.svg';
import heartViolet from '../../assets/dashboard/heartViolet.svg';
import heartYellow from '../../assets/dashboard/heartYellow.svg';
import gymIcon from '../../assets/dashboard/gymIcon.svg';
import therapyIcon from '../../assets/dashboard/therapyIcon.svg';
import user from '../../assets/user.svg';
import statsPie from '../../assets/dashboard/statsPie.svg';

import s from './Dashboard.module.scss';
import Title from 'antd/lib/skeleton/Title';
import classNames from 'classnames';
import RechartsPieCrm from './components/RechartsPieCrm.js';
import RechartsPie2 from './components/RechartsPie2.js';
import ApexLineChart from '../uielements/charts/components/ApexLineChart.js';
import ApexLineColumnChart from '../uielements/charts/components/ApexLineColumnChart.js';

const Dashboard = () => {
  const [checkboxes, setCheckboxes] = useState([true, false]);

  const [selectValue, setSelectValue] = useState('day');

  const toggleCheckbox = (id) => {
    setCheckboxes((checkboxes) =>
      checkboxes.map((checkbox, index) => (index === id ? !checkbox : checkbox))
    );
  };

  const meals = [meal1, meal2, meal3];

  const dataInfo = useMemo(() => {
    switch (selectValue) {
      case 'day': {
        return [
          {
            name: 'Số khách hàng quản lý',
            value: 10,
            color: '#00c0ef',
            icon: <i class='fa fa-users'></i>,
          },
          {
            name: 'Tổng số hoạt động',
            value: 12,
            color: '#f39c12',
            icon: <i class='fa fa-handshake-o'></i>,
          },
          {
            name: 'Số hoạt động hoàn thành',
            value: 8,
            color: '#28A745',
            icon: <i class='fa fa-check-circle-o'></i>,
          },
          {
            name: 'Số hoạt động đã quá hạn',
            value: 4,
            color: '#dd4b39',
            icon: <i class='fa fa-exclamation'></i>,
          },
        ];
      }
      case 'month': {
        return [
          {
            name: 'Số khách hàng quản lý',
            value: 40,
            color: '#00c0ef',
            icon: <i class='fa fa-users'></i>,
          },
          {
            name: 'Tổng số hoạt động',
            value: 50,
            color: '#f39c12',
            icon: <i class='fa fa-handshake-o'></i>,
          },
          {
            name: 'Số hoạt động hoàn thành',
            value: 30,
            color: '#28A745',
            icon: <i class='fa fa-check-circle-o'></i>,
          },
          {
            name: 'Số hoạt động đã quá hạn',
            value: 20,
            color: '#dd4b39',
            icon: <i class='fa fa-exclamation'></i>,
          },
        ];
      }
      case 'year': {
        return [
          {
            name: 'Số khách hàng quản lý',
            value: 200,
            color: '#00c0ef',
            icon: <i class='fa fa-users'></i>,
          },
          {
            name: 'Tổng số hoạt động',
            value: 250,
            color: '#f39c12',
            icon: <i class='fa fa-handshake-o'></i>,
          },
          {
            name: 'Số hoạt động hoàn thành',
            value: 200,
            color: '#28A745',
            icon: <i class='fa fa-check-circle-o'></i>,
          },
          {
            name: 'Số hoạt động đã quá hạn',
            value: 50,
            color: '#dd4b39',
            icon: <i class='fa fa-exclamation'></i>,
          },
        ];
      }
      default: {
        return [
          {
            name: 'Số khách hàng quản lý',
            value: 40,
            color: '#00c0ef',
            icon: <i class='fa fa-users'></i>,
          },
          {
            name: 'Tổng số hoạt động',
            value: 70,
            color: '#f39c12',
            icon: <i class='fa fa-handshake-o'></i>,
          },
          {
            name: 'Số hoạt động hoàn thành',
            value: 40,
            color: '#28A745',
            icon: <i class='fa fa-check-circle-o'></i>,
          },
          {
            name: 'Số hoạt động đã quá hạn',
            value: 30,
            color: '#dd4b39',
            icon: <i class='fa fa-exclamation'></i>,
          },
        ];
      }
    }
  }, [selectValue]);

  const dataInfoGroup = useMemo(() => {
    return [
      { name: 'Nhóm bán lẻ', value: 40, color: '#00c0ef' },
      { name: 'Khách VIP', value: 50, color: '#f39c12' },
    ];
  }, []);

  const OPTIONS = [
    {
      key: 'day',
      label: 'Ngày',
    },
    {
      key: 'month',
      label: 'Tháng',
    },
    {
      key: 'year',
      label: 'Năm',
    },
  ];

  return (
    <div>
      <Row>
        <Col className='pr-grid-col' xs={12} lg={12}>
          <Row>
            <div className='headline-1'>Bảng tin quản lý khách hàng</div>
          </Row>
          <Row className='gutter mb-4 mt-4'>
            <Col className='mb-4 mb-md-0' xs={12} md={6}>
              <Widget className=''>
                <div className='d-flex justify-content-between widget-p-md'>
                  <div className='headline-3 d-flex align-items-center'>
                    Thông tin
                  </div>
                  <select
                    name='customerType'
                    id='customerTypes'
                    className={s.select__crm}
                    value={selectValue}
                    onChange={(e) => {
                      // var newFilter = { ...filter };
                      // newFilter.status = e.target.value;
                      setSelectValue(e.target.value);
                    }}
                  >
                    {OPTIONS.map((element, index) => {
                      return (
                        <option value={element.key} key={index}>
                          {element.label}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className={s.info__container}>
                  {dataInfo.map((item, key) => (
                    <div className={s.info__item}>
                      <span
                        className={classNames(s.info__icon, {
                          [s.info__icon_1]: false,
                        })}
                        style={{ backgroundColor: item.color }}
                      >
                        {item.icon}
                      </span>
                      <div className={s.info__content}>
                        <span className={s.info__content_label}>
                          {item.name}
                        </span>
                        <span className={s.info__content_value}>
                          {item.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Widget>
            </Col>
            <Col xs={12} md={6}>
              <Widget className='widget-p-md'>
                <div className='d-flex justify-content-between'>
                  <div className='headline-3 d-flex align-items-center'>
                    Biểu đồ tổng quan
                  </div>
                  <UncontrolledDropdown>
                    <DropdownToggle caret>&nbsp; Weekly &nbsp;</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Daily</DropdownItem>
                      <DropdownItem>Weekly</DropdownItem>
                      <DropdownItem>Monthly</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
                <RechartsPieCrm className='pb-4' data={dataInfo} />
              </Widget>
            </Col>
          </Row>
          {/* <Row className='gutter mb-4'>
            <Col xs={12}>
              <Widget className='widget-p-none'>
                <div className='d-flex flex-wrap align-items-center justify-content-center'>
                  <div className='d-flex flex-column align-items-center col-12 col-xl-6 p-sm-4'>
                    <p className='headline-1'>Upgrade your plan</p>
                    <p className='body-3'>
                      So how did the classical Latin become so{' '}
                    </p>
                    <div className='d-flex justify-content-between my-4'>
                      <Button className='rounded-pill mr-3' color='primary'>
                        Go Premium
                      </Button>
                      <Button
                        className='rounded-pill body-3'
                        outline
                        color='dark'
                      >
                        Try for free
                      </Button>
                    </div>
                  </div>
                  <div className='d-flex justify-content-center col-12 col-xl-6'>
                    <img
                      className='p-1 img-fluid'
                      src={upgradeImage}
                      alt='...'
                    />
                  </div>
                </div>
              </Widget>
            </Col>
          </Row> */}

          <Row className='gutter mb-4 mt-4'>
            <Col className='mb-4 mb-md-0' xs={12} md={6}>
              <Widget className=''>
                <div className='d-flex justify-content-between widget-p-md'>
                  <div className='headline-3 d-flex align-items-center'>
                    Biểu đồ khách hàng theo nhóm
                  </div>
                  {/* <UncontrolledDropdown>
                    <DropdownToggle caret>&nbsp; Weekly &nbsp;</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Daily</DropdownItem>
                      <DropdownItem>Weekly</DropdownItem>
                      <DropdownItem>Monthly</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown> */}
                </div>
                <RechartsPie2 className='pb-4' data={dataInfoGroup} />
              </Widget>
            </Col>
            <Col xs={12} md={6}>
              <Widget className='widget-p-md'>
                <div className='d-flex justify-content-between'>
                  <div className='headline-3 d-flex align-items-center'>
                    Biểu đồ khách hàng theo trạng thái
                  </div>
                  {/* <UncontrolledDropdown>
                    <DropdownToggle caret>&nbsp; Weekly &nbsp;</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Daily</DropdownItem>
                      <DropdownItem>Weekly</DropdownItem>
                      <DropdownItem>Monthly</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown> */}
                </div>
                <RechartsPie2 className='pb-4' data={dataInfo} />
              </Widget>
            </Col>
          </Row>

          <Row className='gutter'>
            <Col xs={12} md={12}>
              <Widget className='widget-p-md'>
                <div className='d-flex justify-content-center'>
                  <div className='headline-2 d-flex align-items-center'>
                    Biểu đồ đánh giá hoạt động chăm sóc khách hàng
                  </div>
                  {/* <UncontrolledDropdown>
                    <DropdownToggle caret>&nbsp; Weekly &nbsp;</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Daily</DropdownItem>
                      <DropdownItem>Weekly</DropdownItem>
                      <DropdownItem>Monthly</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown> */}
                </div>
                <ApexLineColumnChart className='pb-4' />
              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
