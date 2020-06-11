export function startAnchor (els, Selected) {
  const navContents = document.querySelectorAll(els)
  const offsetTopArr = []
  navContents.forEach(item => {
    offsetTopArr.push(item.offsetTop)
  })
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  let navIndex = 0
  for (let n = 0; n < offsetTopArr.length; n++) {
    if (scrollTop >= offsetTopArr[n]) {
      navIndex = n
    }
  }
  if (Selected) {
    Selected = navIndex
  } else {
    return navIndex
  }
}
export function scrollAnchor (type) {
  window.addEventListener('scroll', startAnchor)
}
export function removeAnchor (type) {
  window.removeEventListener('scroll', startAnchor)
}

export function Anchor(binding) {
  let total = null
  if (binding.value == 0) {
    total = 0
  } else {
    total = document.getElementById(`anchor-${binding.value}`).offsetTop
  }
  let distance = document.documentElement.scrollTop || document.body.scrollTop
  let step = total / 50
  if (total > distance) {
    (function smoothDown() {
      if (distance < total) {
        distance += step;
        document.documentElement.scrollTop = distance
        setTimeout(smoothDown, 5)
      } else {
        document.documentElement.scrollTop = total
      }
    })()
  } else {
    let newTotal = distance - total
    step = newTotal / 50
      (function smoothUp() {
        if (distance > total) {
          distance -= step
          document.documentElement.scrollTop = distance
          setTimeout(smoothUp, 5)
        } else {
          document.documentElement.scrollTop = total
        }
      })()
  }
}

export default {
  install: function (Vue) {
    Vue.prototype.$sAnchor = { Anchor, startAnchor, scrollAnchor, removeAnchor }
    Vue.directive('sAnchor', {
      inserted: function (el, binding) {
        el.onclick = Anchor(binding)
      }
    })
  }
}
