import React from "react"

const HelloWorld: React.FC = () => {
    return (
        <>
            <h1>Hello World</h1>
            <hr />
            <h2>Hello Caveman!</h2>
            <p>
                process.env.PRODUCTION: <b>{process.env.PRODUCTION.toString()}</b>
            </p>
            <p>
                process.env.NAME: <b>{process.env.NAME}</b>
            </p>
            <p>
                process.env.VERSION: <b>{process.env.VERSION}</b>
            </p>
            <p>
                process.env.REACT_APP_VERSION:
                <b>{process.env.COMMIT_HASH != null ? process.env.COMMIT_HASH : "IDK???"}</b>
            </p>
        </>
    )
}

export default HelloWorld
