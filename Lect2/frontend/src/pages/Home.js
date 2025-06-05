import { useEffect, useState } from "react"

// Components
import WorkoutDetails from '../components/WorkoutDetails'

const Home = () =>{

    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchworkouts = async() =>{
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if (response.ok){
                setWorkouts(json)
            }
        }
        fetchworkouts()
    }, [])

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

        </div>
    )
}

export default Home