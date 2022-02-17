import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function login() {
    return (
        <div>
            {/* form login in react */}
            <form>
                <div>
                    <label >
                        Username:
                    </label>
                    <input className='form-control' type="text" name="username" />
                </div>
                <div >
                    <label>
                        Password:
                    </label>
                    <input className='form-control' type="text" name="username" />
                </div>
                <button className='btn btn-primary' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default login