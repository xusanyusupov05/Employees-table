import AntdConfig from "./Antd.config/AntdConfig"
import Employees from "./features/EmployeesTable/Employees"
import '../src/theme.css'
import '../src/index.css'
function App() {

  return (
    <>
    <AntdConfig>
      <Employees/>
    </AntdConfig>
    </>
  )
}

export default App
