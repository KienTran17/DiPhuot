import React, { Component } from 'react';
export default class Journey extends Component {

	render() {
		const journey = this.props.lstJourney;
		const user = this.props.user;
		return (
			<div className="col-ml-12 col-xs-6 col-sm-4">
				<div className="be-post style-4">
					<a href="blog-detail-2.html" className="be-img-block">
						<img src="../asset/img/p16.jpg" alt="omg" />
					</a>
					<a href="blog-detail-2.html" className="be-post-title">{journey.title}</a>

					<div className="author-post clearfix">
						<img src="../asset/img/a1.png" alt="" className="ava-author" />
						<span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
						<span className="like-counter"><i className="fa fa-thumbs-o-up"></i> 405</span>
					</div>
				</div>
			</div>
		);
	}
}