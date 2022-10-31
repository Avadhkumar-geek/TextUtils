import React from 'react'

export default function Alert(props) {
    return (
        props.alert && <div role='alert'>
            {props.alert.message}
        </div>
    )
}
