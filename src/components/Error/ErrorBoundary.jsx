import { Navigate, useRouteError } from "react-router-dom"

const ErrorBoundary = () => {
  const error  = useRouteError();
    switch(error.status){
        case 401 :
            return <Navigate to='/login?reset=true'/>
        case 500 :
        default :
        return <div>error</div>
    }
}

export default ErrorBoundary
