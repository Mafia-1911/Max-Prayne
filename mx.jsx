import React from 'react'

const mx = () => {
    const [name, setName] = useState('')
    return (
        <div>
            <form action="" >
                <input type="text" value={name} onChange={e=> setName(e.target.value)} />
                <input type="number" />
                <button></button>
            </form>
        </div>
    )
}

export default mx
