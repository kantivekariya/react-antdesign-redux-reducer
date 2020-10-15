import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import SiteFooter from '../common/admin/Footer';
import SiteHeader from '../common/admin/Header';

const HomeLayout = (props) => {
  return (
    <Layout>
      <Layout>
        <SiteHeader {...props} />
        <section className="content">
          <div className="">{props.children}</div>
        </section>
        <SiteFooter />
      </Layout>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    Auth: state.Auth,
  };
};

export default connect(mapStateToProps)(HomeLayout);
