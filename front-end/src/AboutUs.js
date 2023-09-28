import { Link } from 'react-router-dom'
import './AboutUs.css'
import {useState, useEffect} from 'react'
import axios from 'axios'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
    const [bio, setBio] = useState([])
    const [heading, setHeading] = useState('')
    const [image, setImage] = useState('')
    const [error, setError] = useState('')
    const [loaded, setLoaded] = useState('')

    const fetchBio = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/aboutus`)
            .then(response => {
                const heading= response.data.heading
                setHeading(heading)
                const bio= response.data.bio
                setBio(bio)
                const image= response.data.image
                setImage(image)
            })
            .catch(err => {
                const errMsg= JSON.stringify(err,null,2)
                setError(errMsg)
            })
            .finally(() => {
                setLoaded(true)
            })
    }
    useEffect(()=>{
        fetchBio()
        
    },[])

  return (
    <>
      <h1>{heading}</h1>
      <p>{bio[0]}</p>
      <p>{bio[1]} {bio[2]}</p>
      <p>{bio[3]}{bio[4]}</p>
      <img src={image}> 
      </img>
    </>
  )
}

// make this component available to be imported into any other file
export default AboutUs
