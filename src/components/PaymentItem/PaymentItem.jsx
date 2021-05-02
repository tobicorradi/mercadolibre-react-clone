import React from 'react'

const PaymentItem = ({text, icon, link}) => {
    return (
        <div>
            <div>
                {icon} 
            </div>
            <div>
                <span>{text}</span>
                <a href="">{link}</a>
            </div>
        </div>
    )
}

export default PaymentItem
