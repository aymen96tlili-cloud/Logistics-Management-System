import { NavLink, Outlet } from 'react-router-dom'
import { supabase } from '../supabaseClient'

export default function Layout() {
  const logout = async () => {
    await supabase.auth.signOut()
    location.href = '/Logistics-Management-System/login'
  }

  return (
    <div className="layout">
      <header className="header">
        <div className="brand">🚚 Logistics System</div>
        <button className="logout" onClick={logout}>Logout</button>
      </header>
      <div className="main">
        <aside className="sidebar">
          <nav>
            <NavLink to="/" end>Dashboard</NavLink>
            <NavLink to="/departments">Departments</NavLink>
            <NavLink to="/parts">Parts</NavLink>
            <NavLink to="/lines">Production Lines</NavLink>
            <NavLink to="/users">Users</NavLink>
          </nav>
        </aside>
        <section className="content">
          <Outlet />
        </section>
      </div>
    </div>
  )
}
