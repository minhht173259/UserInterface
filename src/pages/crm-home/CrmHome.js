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

import meal1 from '../../assets/dashboard/meal-1.svg';
import meal2 from '../../assets/dashboard/meal-2.svg';
import meal3 from '../../assets/dashboard/meal-3.svg';
import upgradeImage from '../../assets/dashboard/upgradeImage.svg';
import { useHistory } from 'react-router-dom';

import './styles.scss';
import classNames from 'classnames';

const DATA = [
  {
    title: 'Dashboard',
    intro: 'Biểu đồ trực quan và dễ hiểu',
    icon: <i class='eva eva-home-outline' style={{ color: '#00c0ef' }}></i>,
    color: '#000000',
    path: '/crm/dashboard',
  },
  {
    title: 'Khách hàng',
    intro: 'Thông tin khách hàng hiện thị dễ dàng trực quan',
    icon: <i class='eva eva-person-outline' style={{ color: '#f39c12' }}></i>,
    color: '#000000',
    path: '/crm/customers',
  },
  {
    title: 'Nhóm khách hàng',
    intro: 'Thông tin nhóm khách hàng hiện thị dễ dàng trực quan',
    icon: <i class='eva eva-people-outline' style={{ color: '#28A745' }}></i>,
    color: '#000000',
    path: '/crm/group',
  },
  {
    title: 'Hoạt động',
    intro: 'Hoạt động tương tác khách hàng được thao tác lưu trữ dễ dàng',
    icon: <i class='eva eva-share' style={{ color: '#dd4b39' }}></i>,
    color: '#000000',
    path: '/crm/care',
  },
  {
    title: 'Cấu hình',
    intro: 'Cài đặt trạng thái bạn mong muốn',
    icon: <i class='fa fa-cog' aria-hidden='true'></i>,
    color: '#000000',
    path: '/crm/settings',
  },
];

const CrmHomePage = () => {
  const history = useHistory();

  const onClickItem = (path) => {
    history.push(path);
  };
  return (
    <div>
      <Row>
        <Col className='pr-grid-col' xs={12} lg={12}>
          <Row className='gutter mb-4'>
            <Col xs={12}>
              <Widget className='widget-p-none'>
                <div className='d-flex flex-wrap align-items-center justify-content-center'>
                  <div className='d-flex flex-column align-items-center col-12 col-xl-6 p-sm-4'>
                    <p
                      className='headline-1'
                      style={{ textTransform: 'uppercase' }}
                    >
                      Khách hàng là tất cả gì bạn có
                    </p>
                    <p className='body-3'>
                      Quản lý khách hàng dễ hơn bao giờ hết !!
                    </p>
                    <div className='d-flex justify-content-between my-4'>
                      <Button className='rounded-pill mr-3' color='primary'>
                        Giới thiệu
                      </Button>
                      <Button
                        className='rounded-pill body-3'
                        outline
                        color='dark'
                      >
                        About
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
          </Row>
          <Row className='gutter mb-4 mt-4'>
            <div className='d-flex flex-wrap align-items-center justify-content-center'>
              {DATA.map((item, index) => (
                <div
                  className={classNames(
                    'd-flex flex-column align-items-center col-12 col-xl-4 p-sm-4',
                    'item__container'
                  )}
                  key={index}
                  onClick={() => onClickItem(item.path)}
                >
                  <span>{item.icon}</span>
                  <p
                    className='headline-3'
                    style={{ textTransform: 'uppercase' }}
                  >
                    {item.title}
                  </p>
                  <p className='body-3'>{item.intro}</p>
                </div>
              ))}
            </div>
          </Row>
          <Row className={classNames('gutter mt-4', 'footer__container')}>
            <Col xs={12} lg={6}>
              <p className='headline-3' style={{ textTransform: 'uppercase' }}>
                Thông tin về nhóm - UXUI 12
              </p>
              <p className='body-3' style={{ paddingLeft: '20px' }}>
                Hoàng Trọng Minh - Trưởng nhóm
              </p>
              <p className='body-3' style={{ paddingLeft: '20px' }}>
                Nguyễn Văn Quân - Thư ký
              </p>
              <p className='body-3' style={{ paddingLeft: '20px' }}>
                Nguyễn Văn Đạt
              </p>
              <p className='body-3' style={{ paddingLeft: '20px' }}>
                Lê Xuân Vinh
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CrmHomePage;
