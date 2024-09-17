import React from 'react'
import { useFetch } from './useFetch'

export default function CustomHook() {

    const [views] = useFetch("https://66c57672134eb8f434946316.mockapi.io/api");
  return (
    <div>
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {
            views.map((item,index)=>{
              return(
                <tr key={index}>
                  <td>{item.Name}</td>
                  <td>{item.Email}</td>
                  <td>{item.Age}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
