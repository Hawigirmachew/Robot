import {useState, createContext, useEffect} from 'react'
import {robotData} from "../data/robotData"

const RobotContext = createContext()
export const ReactProvider = ({children}) => {
  // const [robots, steRobots] = useState(robotData)
  const [robots, setRobots] = useState([])
  const [data, setData] = useState(null)
  
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setRobots(data) //this is the global state for manipulation
                setData(data) // this is the default data from the api
            })
  }, [])
  const onSearchChange = (e) => {
    const filteredRobots = data.filter(robots => {
        return robots.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setRobots(filteredRobots);
    if(e.target.value.length<1){
        setRobots(data);
    }
}

return <RobotContext.Provider value = {
    {
        robots,
        onSearchChange,
    }
}>
    {children}
</RobotContext.Provider>
}

export default RobotContext

