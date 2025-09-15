import { useParams } from "react-router-dom"

export const PortfolioProject = () => {

    const {projectId} = useParams()

    return (
        <div><h1>Projekt:  {projectId} </h1></div>
    )
}