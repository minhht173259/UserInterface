import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Col,
  Row,
  Progress,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";
import Widget from "../../components/Widget/Widget.js";
import ApexActivityChart from "./components/ActivityChart.js";

import meal1 from "../../assets/dashboard/meal-1.svg";
import meal2 from "../../assets/dashboard/meal-2.svg";
import meal3 from "../../assets/dashboard/meal-3.svg";
import upgradeImage from "../../assets/dashboard/upgradeImage.svg";
import heartRed from "../../assets/dashboard/heartRed.svg";
import heartTeal from "../../assets/dashboard/heartTeal.svg";
import heartViolet from "../../assets/dashboard/heartViolet.svg";
import heartYellow from "../../assets/dashboard/heartYellow.svg";
import gymIcon from "../../assets/dashboard/gymIcon.svg";
import therapyIcon from "../../assets/dashboard/therapyIcon.svg";
import user from "../../assets/user.svg";
import statsPie from "../../assets/dashboard/statsPie.svg";

import s from "./Dashboard.module.scss";

const Dashboard = () => {
  const [checkboxes, setCheckboxes] = useState([true, false]);

  const toggleCheckbox = (id) => {
    setCheckboxes((checkboxes) =>
      checkboxes.map((checkbox, index) => (index === id ? !checkbox : checkbox))
    );
  };

  const meals = [
    { meal: meal1, number: 35000, name: "Miễn giảm học phí bkhn" },
    { meal: meal2, number: 10000, name: "Tặng học bổng cho sv học lại" },
    { meal: meal3, number: 3800, name: "Tặng lịch tết 2022" },
  ];

  return (
    <div>
      <Row>
        <Col className="pr-grid-col" xs={12} lg={8}>
          <Row className="gutter mb-4">
            <Col className="mb-4 mb-md-0" xs={12} md={6}>
              <Widget className="">
                <div className="d-flex justify-content-between widget-p-md">
                  <div className="headline-3 d-flex align-items-center">
                    Số khách mới
                  </div>
                  <UncontrolledDropdown>
                    <DropdownToggle caret>&nbsp; Tuần &nbsp;</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Ngày</DropdownItem>
                      <DropdownItem>Tuần</DropdownItem>
                      <DropdownItem>Tháng</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
                <ApexActivityChart className="pb-4" />
              </Widget>
            </Col>
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="d-flex justify-content-between">
                  <div className="headline-3 d-flex align-items-center">
                    Hoạt động chăm sóc nổi bật
                  </div>
                  <UncontrolledDropdown>
                    <DropdownToggle caret>&nbsp; Tuần &nbsp;</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Ngày</DropdownItem>
                      <DropdownItem>Tuần</DropdownItem>
                      <DropdownItem>Tháng</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
                {meals.map((element, index) => (
                  <div key={uuidv4()} className={`mt-4 ${s.widgetBlock}`}>
                    <div className={s.widgetBody}>
                      <div className="d-flex">
                        <img
                          className="img-fluid mr-2"
                          src={element.meal}
                          alt="..."
                        />
                        <div className="d-flex flex-column">
                          <p className="body-2">{element.name}</p>
                          {/* <p className="body-3 muted">300 g</p> */}
                        </div>
                      </div>
                      <div className="body-3 muted">{element.number}</div>
                    </div>
                  </div>
                ))}
              </Widget>
            </Col>
          </Row>
          <Row className="gutter mb-4"></Row>
          <Row className="gutter">
            <Col className="mb-4 mb-xl-0" xs={6} sm={6} xl={3}>
              <Widget className="widget-p-sm">
                <div className={s.smallWidget}>
                  <div className="d-flex mb-4">
                    <img
                      className="py-1 mr-2 img-fluid"
                      src={heartRed}
                      alt="..."
                    />
                    <div className="d-flex flex-column">
                      <p className="headline-3">Khách hài lòng</p>
                      <p className="body-2">
                        1800<span className="body-3 muted">/ 3000</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <Progress
                      color="secondary-red"
                      className={`progress-xs ${s.mutedPink}`}
                      value="75"
                    />
                  </div>
                </div>
              </Widget>
            </Col>
            <Col className="mb-4 mb-xl-0" xs={6} sm={6} xl={3}>
              <Widget className="widget-p-sm">
                <div className={s.smallWidget}>
                  <div className="d-flex mb-4">
                    <img
                      className="py-1 mr-2 img-fluid"
                      src={heartYellow}
                      alt="..."
                    />
                    <div className="d-flex flex-column">
                      <p className="headline-3">Khách chưa hài lòng</p>
                      <p className="body-2">
                        1000<span className="body-3 muted">/ 3000</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <Progress
                      color="secondary-yellow"
                      className={`progress-xs ${s.mutedYellow}`}
                      value="75"
                    />
                  </div>
                </div>
              </Widget>
            </Col>
          </Row>
        </Col>
        <Col className="mt-4 mt-lg-0 pl-grid-col" xs={12} lg={4}>
          <Widget className="widget-p-lg">
            <div className={s.goals}>
              <div className={s.goalsTitle}>
                <p className="headline-3">Mục tiêu</p>
                <UncontrolledDropdown>
                  <DropdownToggle caret>&nbsp; Tuần &nbsp;</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Ngày</DropdownItem>
                    <DropdownItem>Tuần</DropdownItem>
                    <DropdownItem>Tháng</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <div className="d-flex flex-column mt-3">
                <div className={s.activity}>
                  <p className="body-2">Khách mới</p>
                  <p className="body-2">
                    92<span className="body-3 muted"> / 160</span>
                  </p>
                </div>
                <Progress
                  color="secondary-red"
                  className="progress-xs"
                  value={60}
                />
              </div>
              <div className="d-flex flex-column mt-3">
                <div className={s.activity}>
                  <p className="body-2">Độ hài lòng</p>
                  <p className="body-2">
                    40<span className="body-3 muted"> / 50</span>
                  </p>
                </div>
                <Progress
                  color="secondary-yellow"
                  className="progress-xs"
                  value={80}
                />
              </div>
              <div className="d-flex flex-column mt-3">
                <div className={s.activity}>
                  <p className="body-2">Khách quay lại</p>
                  <p className="body-2">
                    25<span className="body-3 muted"> / 40</span>
                  </p>
                </div>
                <Progress
                  color="secondary-cyan"
                  className="progress-xs"
                  value={40}
                />
              </div>
            </div>
            <p className="headline-3">Khách nổi bật</p>
            <div className={`mt-3 ${s.widgetBlock}`}>
              <div className={s.widgetBody}>
                <div className="d-flex">
                  <img className="img-fluid mr-2" src={gymIcon} alt="..." />
                  <div className="d-flex flex-column">
                    <p className="body-2">Gym 18</p>
                    <p className="body-3 muted">1200$</p>
                  </div>
                </div>
                <div className="checkbox checkbox-primary">
                  <label htmlFor="checkbox0" />
                </div>
              </div>
            </div>
            <div className={`mt-3 ${s.widgetBlock}`}>
              <div className={s.widgetBody}>
                <div className="d-flex">
                  <img className="img-fluid mr-2" src={gymIcon} alt="..." />
                  <div className="d-flex flex-column">
                    <p className="body-2">Shop acc faifai</p>
                    <p className="body-3 muted">100$</p>
                  </div>
                </div>
                <div className="checkbox checkbox-primary">
                  <label htmlFor="checkbox0" />
                </div>
              </div>
            </div>
            <a
              className={`btn-secondary-red ${s.statsBtn}`}
              href="#top"
              role="button"
            >
              <img className={s.pieImg} src={statsPie} alt="..." />
              <div>
                <p className="headline-2">STATISTIC</p>
                <p className="body-3">Download your activity</p>
              </div>
            </a>
          </Widget>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
