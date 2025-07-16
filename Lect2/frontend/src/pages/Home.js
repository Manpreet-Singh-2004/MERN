import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

// Components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () =>{

    const {workouts, dispatch} = useWorkoutsContext()

    useEffect(() => {
        const fetchworkouts = async() =>{
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if (response.ok){
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }
        fetchworkouts()
    }, [])
    
    if (workouts === null) {
        return <div>Loading workouts...</div>
    }

    return(
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <div key={workout._id}>
                        <WorkoutDetails workout={workout} />
                        <hr/>
                    </div>
                ))}
                
            </div>
                <WorkoutForm/>
        </div>
    )
}

export default Home