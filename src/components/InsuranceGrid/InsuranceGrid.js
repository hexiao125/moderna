import React from 'react';
import { connect } from 'react-redux';
import { fetchInsurances, displayToggle } from '../../actions';
import InsuranceCard from '../InsuranceCard/InsuranceCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './insuranceGrid.scss';

class InsuranceGrid extends React.Component {
    componentDidMount() {
        this.props.fetchInsurances();
    }

    renderInsurances() {
        if(this.props.insurances && this.props.insurances.length > 0) {
            const start = 0;
            const end = getItemNum(this.props.displayMoreOn, this.props.insurances.length);
            return this.props.insurances.slice(start, end).map((insurance, index) => {
                return (
                    <InsuranceCard key={index}
                        name={insurance.name}
                        img={insurance.image.href}
                        url={insurance.url}
                    />
                );
            });
        }
    }

    render() {
        return (
            <div className="insurance-grid-container">
                <Container>
                    <Row>
                        {this.renderInsurances()}
                    </Row>
                </Container>
                <div className="button-container" >
                    <a className="button" href="#" onClick={() => this.props.displayToggle()}>
                        {this.props.displayMoreOn ? `Visa färre` : `Visa fler`}
                    </a>
                </div>
            </div>
        );
    }
}

function getItemNum(displayMoreOn, insurancesLength) {
    if (displayMoreOn) {
        return insurancesLength;
    } else if (insurancesLength < 8) {
        return insurancesLength;
    } else {
        return 8;
    }
}


const mapStateToProps = (state) => {
    return {
        insurances: state.insuranceReducer.insurances,
        displayMoreOn: state.displayReducer.displayMoreOn
    };
}

export default connect(mapStateToProps, { fetchInsurances, displayToggle })(InsuranceGrid);
