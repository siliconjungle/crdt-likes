const create = () => {
  return {
    users: {},
    total: 0,
  }
}

const like = (likes, userId) => {
  likes.users[userId] ??= 0
  if (likes.users[userId] % 2 === 0) {
    likes.users[userId] += 1
    likes.total += 1
  }
}

const unlike = (likes, userId) => {
  likes.users[userId] ??= 0
  if (likes.users[userId] % 2 === 1) {
    likes.users[userId] += 1
    likes.total -= 1
  }
}

const getVersion = (likes, userId) => {
  likes.users[userId] ??= 0
  return likes.users[userId]
}

const getValue = (likes, userId) => {
  likes.users[userId] ??= 0
  return likes.users[userId] % 2 !== 0
}

const getTotal = (likes) => {
  return likes.total
}

const setLike = (likes, userId, value) => {
  likes.users[userId] ??= 0
  if (value > likes.users[userId]) {
    const current = likes.users[userId] % 2 === 0
    const next = value % 2 === 0
    likes.users[userId] = value
    if (current !== next) {
      likes.total += next ? -1 : 1
    }
  }
}

const merge = (likes, likes2) => {
  for (const userId in likes2.users) {
    setLike(likes, userId, likes2.users[userId])
  }
  return likes
}

export default {
  create,
  like,
  unlike,
  getVersion,
  getValue,
  getTotal,
  setLike,
  merge,
}
