import { ReactNode } from 'react'

interface ListGroupProps {
  children: ReactNode
  className?: string
}

export default function ListGroup({ children, className = '' }: ListGroupProps) {
  return (
    <ul className={`list-none p-0 m-0 ${className}`}>
      {children}
    </ul>
  )
}
