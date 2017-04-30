//state: ["lam bt ve nha",.........]
import React, { Component } from 'react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import Place from './Place';

import getPlace from '../../api/getPlace';
import getUser from '../../api/getUser';


//const arr = ['note 1','note 2','note 3','note 4'];
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
export default class ListPlace extends Component {
  
    constructor(props) {
        super(props);
        this.state = { lstPlace: [], user: []};
    }
    componentDidMount() {
        const token = getCookie('tk_lg');
        getUser(token).then(user=>{
            getPlace(token,user.id).then(res=> this.setState({lstPlace: res, user: user}));
        });
        
        // console.log(this.state.lstPlace);
        // console.log(this.state.user)
        
    }
    render() {
        return <div>
            {this.state.lstPlace.map((e, i) => <Place lstPlace={e} user={this.state.user} key={i} />)}
            </div>
        
    }
};