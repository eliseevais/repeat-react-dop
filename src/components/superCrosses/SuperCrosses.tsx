import React from "react";

type CrossesType = {
  id: number
  model: string
  size: string
}

type SuperCrossesProps = {
  crosses: CrossesType[]
  children?: React.ReactNode
}

export const SuperCrosses = ({crosses, children}: SuperCrossesProps) => {
  return (
    <div>
      <ul>
        {crosses.map((crosse) => {
          return (
            <li key={crosse.id}>
              <span>{crosse.id} {crosse.model} {crosse.size}</span>
            </li>
          )
        })}
      </ul>
      {children}
      <hr/>
    </div>
  )
}
