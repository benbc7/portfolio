import React, { Component } from 'react'

export default class OtherProjects extends Component {
	render() {
		return (
			<div>
				{/* Project One Row*/}
				<div className="row justify-content-center no-gutters mb-5 mb-lg-0">
					<div className="col-lg-6"><img className="img-fluid" src="images/demo-image-01.jpg" alt="" /></div>
					<div className="col-lg-6">
						<div className="bg-black text-center h-100 project">
							<div className="d-flex h-100">
								<div className="project-text w-100 my-auto text-center text-lg-left">
									<h4 className="text-white">Misty</h4>
									<p className="mb-0 text-white-50">An example of where you can put an image of a project,
									or
                    anything else, along with a description.</p>
									<hr className="d-none d-lg-block mb-0 ml-0" />
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Project Two Row*/}
				<div className="row justify-content-center no-gutters">
					<div className="col-lg-6"><img className="img-fluid" src="images/demo-image-02.jpg" alt="" /></div>
					<div className="col-lg-6 order-lg-first">
						<div className="bg-black text-center h-100 project">
							<div className="d-flex h-100">
								<div className="project-text w-100 my-auto text-center text-lg-right">
									<h4 className="text-white">Mountains</h4>
									<p className="mb-0 text-white-50">Another example of a project with its respective
									description. These sections work well responsively as well, try this theme on a
                    small screen!</p>
									<hr className="d-none d-lg-block mb-0 mr-0" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}