const DEFAULT_IMAGE = '/assets/images/card1.png'

function getBackgroundImage(post) {
  if ('image' in post.data && post.data.image !== '') {
    return post.path + post.data.image
  } else {
    return DEFAULT_IMAGE
  }
}

function getReadMoreUrl(post) {
  if ('url' in post.data && post.data.url !== '') {
    return post.data.url
  } else if (post.data.body !== '') {
    return post.path
  } else {
    return undefined
  }
}


module.exports = {
  getBackgroundImage : getBackgroundImage,
  getReadMoreUrl : getReadMoreUrl
}
