import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Destinations from '../../Containers/Destinations';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  stepper: {
    // backgroundColor: 'black',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  buttonBack: {
    marginRight: theme.spacing(1),
    background: 'gray',
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Destinations />;
    case 1:
      return 'Step 2: What is an ad group anyways?';
    case 2:
      return 'Step 3: This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

const StepperControl = ({ manual, showControl, onControl, steps, activeStep }) => {
  const classes = useStyles();
  const [activeStepIndex, setActiveStep] = React.useState(activeStep);
  const [completed, setCompleted] = React.useState({});

  const stepsTemp = steps.map(item => item.step);

  const totalSteps = () => {
    return stepsTemp.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        stepsTemp.findIndex((step, i) => !(i in completed))
        : activeStep + 1;

    if (manual) {
      onControl(newActiveStep);
      return;
    }

    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    if (manual) {
      onControl(activeStep - 1);
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <div className={classes.root}>
      <Stepper className={classes.stepper} nonLinear activeStep={activeStep}>
        {stepsTemp.map((label, index) => (
          <Step className={classes.step} key={label}>
            <StepButton className={classes.stepButton} onClick={handleStep(index)} completed={completed[index]}>
              <span>{label}</span>
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div style={{ display: 'grid', height: 'calc(100% - 70px)' }}>
        {allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
            <div style={{ display: 'grid', gridTemplateRows: showControl ? 'calc(100% - 50px)' : '100%' }}>
              <div style={{ height: '100%' }}>
                {steps[activeStep].component}
              </div>
              {showControl ?
                (<div>
                  <Button disabled={activeStep === 0} variant="contained" onClick={handleBack} className={classes.button1}>
                    Back
                </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    Next
                </Button>
                  {activeStep !== stepsTemp.length &&
                    (completed[activeStep] ? (
                      <Typography variant="caption" className={classes.completed}>
                        Step {activeStep + 1} already completed
                    </Typography>
                    ) : (
                        <Button variant="contained" color="primary" onClick={handleComplete}>
                          {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                        </Button>
                      ))}
                </div>
                ) : null}
            </div>
          )}
      </div>
    </div>
  );
}


export default StepperControl;