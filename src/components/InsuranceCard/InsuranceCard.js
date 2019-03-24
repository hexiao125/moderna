import React from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './insuranceCard.scss';


class InsuranceCard extends React.Component {

    render() {
        const { name, img, url, rootURL } = this.props;
        return (
            <Col xs={12} sm={6} md={4} lg={3}>
                    <a href={`${rootURL}${url}`}>
                        <Card className="insurance-card">
                            <Card.Img
                                className="insurance-card-image" variant="top" src={`${rootURL}${img}`}
                            />
                            <Card.Text className="insurance-card-text">
                                {name}
                            </Card.Text>
                        </Card>
                    </a>
            </Col>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        rootURL: state.insuranceReducer.rootURL
    };
}

export default connect(mapStateToProps)(InsuranceCard);