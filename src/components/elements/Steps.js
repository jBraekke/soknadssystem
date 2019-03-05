import React from 'react';
import PropTypes from 'prop-types';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux'

import { opprettLogg } from '../../actions/logg-action';

class VerticalLinearStepper extends React.Component {

    constructor(props) {
        super(props);
        this.state = { activeStep: 0 };
    }

    getSteps() {
        return ['Innhent vandelsattest', 'Sjekk plantegningene', 'Innhent informasjon fra Skatteetaten', 'Opprett bevilling'];
    }

    handleCheckbox(beskjed) {
        this.props.dispatch(opprettLogg(beskjed));
    }

    getStepContent(step) {
        switch (step) {
            case 0:

                const view = <FormGroup >
                    <FormControlLabel
                        control={
                            <Checkbox value="politi" onChange={() => this.handleCheckbox('Hentet vandelsattest for Kari Nordmann')} />
                        }
                        label="Hent vandelsattest for Kari Nordmann"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox value="politi" onChange={() => this.handleCheckbox('Hentet vandelsattest for Mons Monsen')} />
                        }
                        label="Hent vandelsattest for Mons Monsen"
                    />
                </FormGroup>

                return view;
            case 1:
                return 'Evaluer plantegningen som har vedleggsnavn planløsning.pdf';
            case 2:
                return `Try out different ad text to see what brings in the most customers,
                  and learn how to enhance your ads using features like ad extensions.
                  If you run into any problems with your ads, find out how to tell if
                  they're running and how to resolve approval issues.`;
            case 3:
                return `Try out different ad text to see what brings in the most customers,
                  and learn how to enhance your ads using features like ad extensions.
                  If you run into any problems with your ads, find out how to tell if
                  they're running and how to resolve approval issues.`;
            default:
                return 'Unknown step';
        }
    }

    handleNext() {
        this.setState({
            activeStep: this.state.activeStep + 1,
        });
    };

    handleBack() {
        this.setState({
            activeStep: this.state.activeStep - 1,
        });
    };

    handleReset() {
        this.setState({
            activeStep: 0,
        });
    };

    render() {
        const steps = this.getSteps();
        const { activeStep } = this.state;

        return (
            <div >
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                            <StepContent>
                                <div>{this.getStepContent(index)}</div>

                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={() => this.handleBack()}
                                    >
                                        Tilbake
                                        </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => this.handleNext()}
                                    >
                                        {activeStep === steps.length - 1 ? 'Ferdig' : 'Neste'}
                                    </Button>
                                </div>

                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} >
                        <Typography>Bevillingen er opprettet</Typography>
                    </Paper>
                )}
            </div>
        );
    }
}

VerticalLinearStepper.propTypes = {

};

export default connect()(VerticalLinearStepper);