
import { useState } from 'react'

export function Tabs({ defaultValue, children }) {
  const [active, setActive] = useState(defaultValue)
  return children.map(child =>
    child.type.displayName === 'TabsList'
      ? React.cloneElement(child, { active, setActive })
      : React.cloneElement(child, { active })
  )
}

export function TabsList({ children, active, setActive }) {
  return (
    <div className="flex gap-2 border-b mb-2">
      {children.map(child =>
        React.cloneElement(child, { active, setActive })
      )}
    </div>
  )
}

export function TabsTrigger({ value, children, active, setActive }) {
  const isActive = active === value
  return (
    <button
      onClick={() => setActive(value)}
      className={`px-4 py-2 rounded-t ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
    >
      {children}
    </button>
  )
}

export function TabsContent({ value, active, children }) {
  return active === value ? <div>{children}</div> : null
}

TabsList.displayName = 'TabsList'
