import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { showLoader, hideLoader } from '../../Components/GlobalLoader/loader.action';
import LoginPage from './Login.view';
import { authenticate } from './Login.action';

let LoaderContainer  = props => {
    const { showLoaderComponent, hideLoaderComponnent, authenticateUser, history } = props;
    const handleLoginFormSubmit = values => {
        showLoaderComponent();
        setTimeout(() => {
            hideLoaderComponnent();
            authenticateUser();
            history.push('/dashboard');
            return values;
        }, 5000);  
    }

    return (
        <LoginPage onSubmit={handleLoginFormSubmit}/>
    )
}

const mapStateToProps = state => {
    const { loaderReducer: {
      showLoader = false
    } = {} } = state;
    return {
      showLoader
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      showLoaderComponent: () => dispatch(showLoader()),
      hideLoaderComponnent: () => dispatch(hideLoader()),
      authenticateUser: () => dispatch(authenticate()),
    }
  }

  LoaderContainer = withRouter(LoaderContainer);

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoaderContainer);