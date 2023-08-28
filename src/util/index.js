export function groupTransactionByUserId(transactions) {
  return Object.values(transactions.reduce((acc, curr) => {
    if (!acc[curr.userId]) {
      acc[curr.userId] = {
        id: curr.userId,
        amount: 0,
        userRewards: 0,
      }
    }
    acc[curr.userId].amount += curr.amount
    acc[curr.userId].userRewards += calculateRewards(curr.amount)
    return acc
  }, {}))
}

function calculateRewards(amount) {
  let reward = 0;

  if (amount > 100) {
    reward += (amount - 100) * 2
    reward += 50
  } else if (amount > 50) {
    reward += (amount - 50)
  }
  return reward
}