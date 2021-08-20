import Header from "../Header"
import { MainContent } from "./MainLayout.styled"

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <MainContent>{children}</MainContent>
    </>
  )
}

export default MainLayout
