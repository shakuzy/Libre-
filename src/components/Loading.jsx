import React from "react";
import "../components/Loading.css"
import { Spinner } from "react-bootstrap"

const Loading = () => {
    
return(<Spinner animation="border" role="status" className="sp">
<span className="sr-only">Loading...</span>
</Spinner>);
}

export default Loading;