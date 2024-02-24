import React, { useRef, useState } from 'react'
import Logo from '../../assets/slide.png'
import './index.scss'
import axios from 'axios'
import audioFile from '../../assets/audio.mp3'
const PrayPage = () => {

  const [email, setEmail] = useState('')
  const [pray, setPray] = useState('')
  const audioRef = useRef<HTMLAudioElement>(null);
  const handleAudio = () => {
    if (audioRef.current) {
      
      audioRef.current.play()
    }
  }
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement> | Event) => {
    e.preventDefault()
    try {
      axios({
        method: 'post',
        url: 'http://localhost:8080/prays',
        data: {
          email: email,
          message: pray,
        }
      }).then(() => handleAudio())
    } catch (error) {
      
    }
  }
  return (
    <div className='main'>
      <audio src={audioFile} ref={audioRef} hidden></audio>
          <div className="pray-img">
        <img src="https://fpt.edu.vn/langgiaopray/assets/img/VS4661.png" alt="" />
        <div className="logo-img">
          <img src={Logo} alt="" />
          {/* <Logo/> */}
        </div>
      </div>
      <div className="br"></div>
        <form className='pray-form' action="" onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='Mail @ của bạn' />
        <textarea onChange={(e) => setPray(e.target.value)} name="" id="" cols={30} rows={10} placeholder='Hãy để lại lời cầu nguyện của bạn ở đây nhé...'>
        
        </textarea>
        <button >thắp hương</button>
          </form>
    </div>
  )
}

export default PrayPage