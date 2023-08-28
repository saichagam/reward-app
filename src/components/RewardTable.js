const RewardTable = ({ userTransactions }) => {
  return (
    <div>
      <h1>User Rewards</h1>
      <ul>
        {userTransactions && userTransactions.map(({ id, amount, userRewards }) => (
          <li key={id}>User Id: {id}, TotalAmount: {amount}, Reward: {userRewards} points.</li>
        ))}
      </ul>
    </div>
  )
}

export default RewardTable
