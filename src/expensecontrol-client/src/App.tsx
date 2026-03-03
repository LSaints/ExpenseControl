import { SideMenu } from './components/side-menu/SideMenu'
import { DrawerProvider } from './contexts/DrawerContext'
import { AppRoutes } from './routes'


export default function App() {
  return(
    <>
      <DrawerProvider>
        <SideMenu>
          <AppRoutes />
        </SideMenu>
      </DrawerProvider>
    </>
  )
}

