import { useMemo } from "react";
import { useFetch } from "./hooks"
import { groupTransactionByUserId } from "./util"
import RewardTable from "./components/RewardTable"

function App() {
  const { data: transactions, isLoading} = useFetch("transactions", true)
  
  const userTransactions = useMemo(() => {
    if (transactions && transactions.length) {
      return groupTransactionByUserId(transactions)
    }
    return []
  }, [transactions])

  return (
    <div className="App">
      {isLoading && <div>Loading..</div>}
      <RewardTable userTransactions={userTransactions}/>
    </div>
  );
}

export default App;
