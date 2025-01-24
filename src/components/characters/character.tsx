import { useParams } from "react-router-dom"

export default function CharacterDetails() {

    const params = useParams()

    return (
        <>
            <div>
                {params.id} details loaded. More details component goes here...
            </div>
        </>
    )
}