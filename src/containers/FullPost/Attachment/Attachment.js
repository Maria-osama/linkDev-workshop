import React from 'react';
import download from '../../../imgs/download.png';
import Aux from '../../../hoc/Auxiliary';

const Attachment = () => {
    return (
        <Aux>
            <h6>AL Jalila Foundation.PDF</h6>
            <span><img src={download}/></span>
        </Aux>
    )
}
export default Attachment;