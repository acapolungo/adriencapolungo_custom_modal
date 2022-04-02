import { Modal } from './lib'

function App() {
  return (
    <>
      <h1>Publish npm package component with this boilerplate</h1>

      <Modal
        zindex={'z-10'}
        modal={''}
        onClose={''}
        backdropStyle={{ backgroundColor: 'rgba(21, 23, 43, 0.65)' }}
        modalStyle={{ backgroundColor: '#303245', color: 'white' }}
        header='Votre header'
        text='Votre texte'
      />
    </>
  )
}

export default App;
