// Composition pattern: good for has-a relationship
const barker = (state) => ({
  bark: () => console.log('Woof, I am ' + state.name)
})

const driver = (state) => ({
  drive: () => {
    state.position = state.position + state.speed
  }
})

const logger = (state) => ({
  getState: () => console.log(state)
})

const robotDog = (name) => {
  let state = {
    name,
    speed: 100,
    position: 0
  }

  return Object.assign(
    {},
    barker(state),
    logger(state)
  )
}

barker({name: 'Doge'}).bark()
robotDog('Sniffles').bark()
// robotDog.drive()
robotDog.getState()
