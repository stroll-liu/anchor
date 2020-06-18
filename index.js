export function startAnchor ({doc, els, Selected}) {
  console.log(0)
  const navContents = document.querySelectorAll(els)
  const offsetTopArr = []
  navContents.forEach(item => {
    offsetTopArr.push(item.offsetTop)
  })
  let scrollTop = 0
  if (doc) {
    scrollTop = document.getElementById(doc).scrollTop
  } else {
    scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  }
  offsetTopArr.map((item, index) => {
    if (scrollTop >= (item - 1)) {
      Selected.index = index
    }
  })
}

export function routerAnchor ({doc, id}) {
  if (!id) return
  const anchorEl = document.getElementById(id)
  const Anchor =  setInterval(() => {
    if (doc) {
      const ScrollTop = document.getElementById(doc)
      const scrollNbr = ScrollTop.scrollTop
      ScrollTop.scrollTop = (+scrollNbr + 30)
      if (
        ScrollTop.scrollTop > anchorEl.offsetTop
        || ScrollTop.scrollTop >= (ScrollTop.scrollHeight - ScrollTop.offsetHeight - 1)
      ) {
        clearInterval(Anchor)
      }
    } else {
      const scrollNbr = document.documentElement.scrollTop
      document.documentElement.scrollTop = (+scrollNbr + 30)
      if (
        document.documentElement.scrollTop > anchorEl.offsetTop
        || document.documentElement.scrollTop + window.innerHeight >= document.body.scrollHeight
      ) {
        clearInterval(Anchor)
      }
    }
  }, 20)
}

export default {
  install: function (Vue) {
    Vue.prototype.$sAnchor = {
      routerAnchor,
      startAnchor
    }
  }
}
