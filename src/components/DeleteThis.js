import { useParams } from 'react-router'

const DeleteThis = () => {
    const params = useParams()

    return (<h2>{params.id}</h2>)
}

export default DeleteThis