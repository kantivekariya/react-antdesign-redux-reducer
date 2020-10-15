import React from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import SiteFooter from '../common/admin/Footer';
import SiteHeader from '../common/admin/Header';
import LeftSidebar from './LeftSidebar';
import SideNav from './SideNav';

const MainLayouts = (props) => {
  return (
    <Layout>
      <LeftSidebar menu={SideNav} isCollapsed={props.isCollapsed} />
      <Layout>
        <SiteHeader isSideBarShow={true} />
        <section>
          <div>{props.children}</div>
        </section>
        <SiteFooter />
      </Layout>
    </Layout>
  );
};
const mapStateToProps = (state) => {
  return {
    isCollapsed: state.Layout.collapsed,
  };
};

export default connect(mapStateToProps)(MainLayouts);
