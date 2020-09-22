import React from 'react';
import './otherAttachments.scss';


const OtherAttachments = (prpos) => {
    return (
        <div className="attachmentContainer container" style={{ backgroundImage: "url(" + prpos.bgimg + ")" }}>
            <div className="overlay"></div>
            <div className="content">

                <h4 className="title">{prpos.title}</h4>
                <p className="text">{prpos.content}</p>
                <button>{'>'}</button>
            </div>
        </div>
    )
}
export default OtherAttachments;