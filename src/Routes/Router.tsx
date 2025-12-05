import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Departments from '../pages/Departments'
import Parts from '../pages/Parts'
import Lines from '../pages/Lines'
import Users from '../pages/Users'
import ProtectedRoute from './ProtectedRoute'
import Layout from '../components/Layout'

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/parts" element={<Parts />} />
          <Route path="/lines" element={<Lines />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
