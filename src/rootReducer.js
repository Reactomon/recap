import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loaderReducer from './Components/GlobalLoader/loader.reducer';
import userReducer from './Pages/Login/User.Reducer';

export default combineReducers({
    form: formReducer,
    loaderReducer,
    userReducer,
});