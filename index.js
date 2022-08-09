import likes from './likes.js'

const userId = 'james'
const userId2 = 'nathan'
const userId3 = 'sashin'

const postLikes = likes.create()
likes.like(postLikes, userId)
likes.like(postLikes, userId2)
likes.unlike(postLikes, userId)
likes.unlike(postLikes, userId2)
const postLikes2 = likes.create()
likes.setLike(postLikes2, userId, likes.getVersion(postLikes, userId))
const postLikes3 = likes.create()
likes.like(postLikes3, userId3)
likes.like(postLikes3, userId2)
likes.merge(postLikes3, postLikes2)
console.log('_POST_LIKES_', postLikes)
console.log('_POST_LIKES_2_', postLikes2)
console.log('_POST_LIKES_3_', postLikes3)
const postLikes4 = likes.merge(
  likes.merge(likes.merge(likes.create(), postLikes), postLikes2),
  postLikes3
)
console.log('_POST_LIKES_4_', postLikes4)
