// library imports
import { Button, Stack } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'

// custom components
import BudgetCard from './components/BudgetCard'

function App() {


  return (
    <div className="App">
      <Container className='my-4'>
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Budgets</h1>
          <Button variant="primary" className="" >Add Budget</Button>
          <Button variant="outline-primary" className="" >Add Expense</Button>
        </Stack>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem", alignItems: "flex-start"}}>
          <BudgetCard 
            name="Entertainment" 
            amount={1200} 
            max={1000}
            gray
          ></BudgetCard>
        </div>
      </Container>
    </div>
  )
}

export default App
