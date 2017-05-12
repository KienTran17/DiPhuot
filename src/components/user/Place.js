import React, { Component } from 'react';
export default class Place extends Component {
	
	render() {
		const place = this.props.lstPlace;
		const user = this.props.user;
		return (
			<div className="col-ml-12 col-xs-6 col-sm-4">
				<div className="be-post">
					<a href={"/place/"+place.id} className="be-img-block">
						<img src={place.link} alt={place.name} />
					</a>
					<a href={"/place/"+place.id} className="be-post-title">{place.name}</a>
					<span>
						<a href={"/place/"+place.id} className="be-post-tag">{place.description}</a>,
												
					</span>
					<div className="author-post">
						<img src={user.avatar} alt="" className="ava-author" />
						<span>by <a href="/profile">{user.last_name + " " + user.first_name}</a></span>
					</div>
					<div className="info-block">
						<span><i className="fa fa-thumbs-o-up"></i> {place.like}</span>
						<span><i className="fa fa-eye"></i> {place.view}</span>
						<span><i className="fa fa-comment-o"></i> 20</span>
					</div>
				</div>
			</div>
		);
	}
}