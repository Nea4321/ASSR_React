import { Route, Routes } from 'react-router-dom'
import { HomePage, NotFoundPage } from '@/pages'
import { RootLayout } from '@/processes'

export function AppRouter() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
