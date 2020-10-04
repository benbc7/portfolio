import React, { Component } from 'react'

export default class Contact extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-4 mb-3 mb-md-0">
					<div className="card py-4 h-100">
						<div className="card-body text-center">
							<i className="fas fa-map-marked-alt text-primary mb-2" />
							<h4 className="text-uppercase m-0">Address</h4>
							<hr className="my-4" />
							<div className="small text-black-50">Wilmington, DE</div>
						</div>
					</div>
				</div>
				<div className="col-md-4 mb-3 mb-md-0">
					<div className="card py-4 h-100">
						<div className="card-body text-center">
							<i className="fas fa-envelope text-primary mb-2" />
							<h4 className="text-uppercase m-0">Email</h4>
							<hr className="my-4" />
							<div className="small text-black-50"><a href="#!">b.cutler724@gmail.com</a></div>
						</div>
					</div>
				</div>
				<div className="col-md-4 mb-3 mb-md-0">
					<div className="card py-4 h-100">
						<div className="card-body text-center">
							<i className="fas fa-mobile-alt text-primary mb-2" />
							<h4 className="text-uppercase m-0">Phone</h4>
							<hr className="my-4" />
							<div className="small text-black-50">+1 (302) 300-7395</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}