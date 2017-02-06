import React, { Component } from 'react';
import {Grid, Row, Col } from 'react-bootstrap';


class GroundDisplay extends Component {
    render() {
        return(
          <div>
						<Grid className="ground">
							<Row>
			 					<Col md={3}></Col>
			 					<Col md={6} className="away-field">
									<div className="player">minho</div>
									<div className="player">minho</div>
									<div className="player">minho</div>
									<div className="player">minho</div>
									<div className="player">minho</div>
			 					</Col>
								<Col md={3}></Col>
		 					</Row>
							<Row>
			 					<Col md={3}></Col>
			 					<Col md={6} className="home-field">
									<div className="player">minho</div>
									<div className="player">minho</div>
									<div className="player">minho</div>
									<div className="player">minho</div>
									<div className="player">minho</div>
			 					</Col>
								<Col md={3}></Col>
		 					</Row>
						</Grid>
            </div>
        );
    }
}

export default GroundDisplay;
