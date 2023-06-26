import { useState } from 'react'
import './styles.css'

const ReviewForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        setName('')
        setEmail('')
        setAddress('')
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="group-32">
                        <input type="text" className="overlap-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='name' />
                        <input type="text" className="overlap-email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='email' />
                        <textarea
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="overlap-address" placeholder='address' />

                        <button type='submit' className="overlap-button">Send Message
                        </button>
                </div>
            </form>
        </>
    )
}

export default ReviewForm