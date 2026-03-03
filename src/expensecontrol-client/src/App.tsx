import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import { SideMenu } from './components/side-menu/SideMenu'
import { DrawerProvider } from './contexts/DrawerContext'
import { AppRoutes } from './routes'
import { theme } from './themes/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <DrawerProvider>
        <SideMenu>
          <AppRoutes />
        </SideMenu>
      </DrawerProvider>

    </ThemeProvider>
  )
}