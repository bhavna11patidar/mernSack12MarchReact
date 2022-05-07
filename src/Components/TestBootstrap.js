import React from 'react'
import { Button } from 'reactstrap';
export default function TestBootstrap() {
  return (
    <div>
        <h1 className="text-primary">Hello World</h1>
        <button className="btn-danger">Submit</button>
        <Button color="danger">Danger!</Button>
    </div>
  )
}
