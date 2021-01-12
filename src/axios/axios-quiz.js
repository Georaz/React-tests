import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-37bf9-default-rtdb.firebaseio.com/'
})