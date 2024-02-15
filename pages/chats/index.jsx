import { useState, useRef, useEffect } from 'react'

const Chat = () => {
  const refInput = useRef('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const json = localStorage.getItem('chat') ?? '[]'
    setMessages(JSON.parse(json))
  }, [])

  useEffect(() => {
    if (messages.length === 0) return

    const json = JSON.stringify(messages)
    localStorage.setItem('chat', json)
  }, [messages])
  const handleSubmit = e => {
    const text = refInput.current.value
    setMessages(p => [text, ...p])
    refInput.current.value = ''
    refInput.current.focus()
  }
  return (
    <>
      <input type='text' ref={refInput} />
      <button onClick={handleSubmit}>click</button>
      <ul>
        {messages.map((message, i) => (
          <li key={i}>{message}</li>
        ))}
      </ul>
    </>
  )
}

export default Chat
