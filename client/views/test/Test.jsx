import React, { Component } from 'react';
import { Grid, Row, Col } from 'views/generic/layout';


class Test extends Component {
  render() {
    return (
      <div className="test">
        <Grid>
          <Row>
            <Col sm={6}>
              <div style={{ background: 'red', height: '100px' }}>
                Content
              </div>
            </Col>

            <Col sm={6}>
              <div style={{ background: 'red', height: '100px' }}>
                Content
              </div>
            </Col>
          </Row>

          <Row>
            <Col sm={6}>
              <div style={{ background: 'red', height: '100px' }}>
                Content
              </div>
            </Col>

            <Col sm={6}>
              <div style={{ background: 'red', height: '100px' }}>
                Content
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Test;
