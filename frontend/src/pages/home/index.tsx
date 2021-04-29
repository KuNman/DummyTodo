import React from 'react'
import { Tasks } from '../../components/tasks/Tasks';

export const Home: React.FC = () => {
  return <div className={'w-100 h-100 d-flex justify-content-center align-items-center'}>
    <Tasks/>
  </div>
}

