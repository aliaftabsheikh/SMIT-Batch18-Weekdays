const Container = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen w-full ${className}`}>
      {children}
    </div>
  )
}

export default Container