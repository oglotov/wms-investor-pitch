
export function Card({ children }) {
  return <div className="border rounded-2xl shadow-md bg-white dark:bg-gray-900 p-4">{children}</div>
}

export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>
}
