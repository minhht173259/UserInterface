import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import s from './Sidebar.module.scss';
import LinksGroup from './LinksGroup/LinksGroup.js';
import { changeActiveSidebarItem } from '../../actions/navigation.js';
import SofiaLogo from '../Icons/SofiaLogo.js';
import cn from 'classnames';

const Sidebar = (props) => {
  const { activeItem = '', ...restProps } = props;

  const [burgerSidebarOpen, setBurgerSidebarOpen] = useState(false);

  useEffect(() => {
    if (props.sidebarOpened) {
      setBurgerSidebarOpen(true);
    } else {
      setTimeout(() => {
        setBurgerSidebarOpen(false);
      }, 0);
    }
  }, [props.sidebarOpened]);

  return (
    <nav className={cn(s.root, { [s.sidebarOpen]: burgerSidebarOpen })}>
      <header className={s.logo}>
        {/* <SofiaLogo/> */}
        <span className={s.title}>DX CLAN</span>
      </header>
      <ul className={s.nav}>
        <LinksGroup
          onActiveSidebarItemChange={(activeItem) =>
            props.dispatch(changeActiveSidebarItem(activeItem))
          }
          activeItem={props.activeItem}
          header='Trang chủ'
          isHeader
          iconName={<i class='eva eva-bookmark'></i>}
          link='/crm/home'
          index='dashboard'
          badge='12'
        />
        <LinksGroup
          onActiveSidebarItemChange={(activeItem) =>
            props.dispatch(changeActiveSidebarItem(activeItem))
          }
          activeItem={props.activeItem}
          header='Biểu đồ'
          isHeader
          iconName={<i className={'eva eva-home-outline'} />}
          link='/crm/dashboard'
          index='dashboard'
        />
        <LinksGroup
          onActiveSidebarItemChange={(activeItem) =>
            props.dispatch(changeActiveSidebarItem(activeItem))
          }
          activeItem={props.activeItem}
          header='Nhóm khách hàng'
          isHeader
          iconName={<i className={'eva eva-people-outline'} />}
          link='/crm/group'
        />
        <LinksGroup
          onActiveSidebarItemChange={(activeItem) =>
            props.dispatch(changeActiveSidebarItem(activeItem))
          }
          activeItem={props.activeItem}
          header='Thông tin khách hàng'
          isHeader
          iconName={<i className={'eva eva-person-outline'} />}
          link='/crm/customers'
        />
        <LinksGroup
          onActiveSidebarItemChange={(activeItem) =>
            props.dispatch(changeActiveSidebarItem(activeItem))
          }
          activeItem={props.activeItem}
          header='Chăm sóc khách hàng'
          isHeader
          iconName={<i class='eva eva-share'></i>}
          link='/crm/care'
        />
        <LinksGroup
          onActiveSidebarItemChange={(activeItem) =>
            props.dispatch(changeActiveSidebarItem(activeItem))
          }
          activeItem={props.activeItem}
          header='Cấu hình hoạt động'
          isHeader
          iconName={<i class='fa fa-cog' aria-hidden='true'></i>}
          link='/crm/settings'
        />

        {/* <h5 className={s.navTitle}>TEMPLATE</h5>
        <LinksGroup
          onActiveSidebarItemChange={(activeItem) =>
            props.dispatch(changeActiveSidebarItem(activeItem))
          }
          activeItem={props.activeItem}
          header='Typography'
          isHeader
          iconName={<i className={'eva eva-text-outline'} />}
          link='/template/typography'
          index='typography'
        />
        <LinksGroup
          onActiveSidebarItemChange={(activeItem) =>
            props.dispatch(changeActiveSidebarItem(activeItem))
          }
          activeItem={props.activeItem}
          header='Tables'
          isHeader
          iconName={<i className={'eva eva-grid-outline'} />}
          link='/template/tables'
          index='tables'
        />
        <LinksGroup
          onActiveSidebarItemChange={(activeItem) =>
            props.dispatch(changeActiveSidebarItem(activeItem))
          }
          activeItem={props.activeItem}
          header='Notifications'
          isHeader
          iconName={<i className={'eva eva-bell-outline'} />}
          link='/template/notifications'
          index='notifications'
        />
        <LinksGroup
          onActiveSidebarItemChange={(activeItem) =>
            props.dispatch(changeActiveSidebarItem(activeItem))
          }
          activeItem={props.activeItem}
          header='UI Elements'
          isHeader
          iconName={<i className={'eva eva-cube-outline'} />}
          link='/template/uielements'
          index='uielements'
          childrenLinks={[
            {
              header: 'Charts',
              link: '/template/ui-elements/charts',
            },
            {
              header: 'Icons',
              link: '/template/ui-elements/icons',
            },
            {
              header: 'Google Maps',
              link: '/template/ui-elements/maps',
            },
          ]}
        /> */}
      </ul>
      {/* <div className="bg-widget d-flex mt-auto ml-1">
        <Button className="rounded-pill my-3 body-2 d-none d-md-block" type="submit" color="secondary-red">Unlock Full Version</Button>
      </div> */}
    </nav>
  );
};

Sidebar.propTypes = {
  sidebarOpened: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  activeItem: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    activeItem: store.navigation.activeItem,
  };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
