//state: ["lam bt ve nha",.........]
import React, { Component } from 'react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import Journey from './Journey';

import getJourney from '../../api/getJourney';
import getUser from '../../api/getUser';

//const arr = ['note 1','note 2','note 3','note 4'];
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
export default class ListJourney extends Component {
  
    constructor(props) {
        super(props);
        this.state = { lstJourney: [], user: []};
    }
    componentDidMount() {
        const token = getCookie('tk_lg');
        getUser(token).then(user=>{
            getJourney(token,user.id).then(res=> this.setState({lstJourney: res, user: user}));
        });
        // console.log(this.state.lstPlace);
        // console.log(this.state.user)
        
    }
    render() {
        return <div>
            {this.state.lstJourney.map((e, i) => <Journey lstJourney={e} user={this.state.user} key={i} />)}
            </div>
        
    }
};
