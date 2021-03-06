export const createElement = (tag, attrs) => {
  return new Promise((resolve, reject) => {
    const element = document.createElement(tag)
    for (const attr in attrs) {
      element.setAttribute(attr, attrs[attr])
    }
    element.addEventListener('initialized', e => {
      const query = element.shadowRoot.querySelector.bind(element.shadowRoot)
      resolve({element, query})
    })
    document.body.appendChild(element)
  })
}

export const createTweet = status => createElement('embetty-tweet', {status})

export const createVideo = (videoId, type) => {
  return createElement('embetty-video', {'video-id': videoId, type})
}

export const createYoutubeVideo = videoId => createVideo(videoId, 'youtube')
