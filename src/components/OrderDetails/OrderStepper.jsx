import { Box } from '@material-ui/core';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { useState } from 'react';

const steps = ['Đơn hàng mới', 'Đang xử lý', 'Đang giao hàng', 'Hoàn thành'];

const OrderStepper = props => {
    const { status } = props
    const [activeStep, setActiveStep] = useState(steps.indexOf(status));

    return <Box width="100%">
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    </Box>
}

export default OrderStepper
