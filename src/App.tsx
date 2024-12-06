import { useEffect, useState } from 'react'

function app() {
  const [health, sethealth] = useState<string>('')

  useEffect(() => {
    fetch('http://localhost:3000/health')
      .then(res => res.json())
      .then(data => sethealth(data.status))
  }, [])

  return <div>api status: {health}</div>
}

export default app