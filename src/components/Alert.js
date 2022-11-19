import React from 'react'

export default function Alert(props) {
    return (
        <div style={{ height: '40px' }}>
            {props.alert && <div role='alert'>
                {props.alert.message}
            </div>}
        </div>
    )
}
