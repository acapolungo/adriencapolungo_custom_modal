# A simple & lightweight method to display custom modal pop up.

adrienc_custom_modal_popup is a quite simple modal, with content box and close button. By default the modal window is screen's centered horizontaly and verticaly. It's really easy to customize it with all sorts of props.

## Link to npm :

You can install adrienc_custom_modal_popup with npm.
My React component : [npm](https://www.npmjs.com/package/adrienc_custom_modal_popup)

### Installation

npm install adrienc_custom_modal_popup

### How to
```
import { Modal } from 'adrienc_custom_modal_popup';
```

Then you can use and customize the modal :

```
<Modal 
    onClose={}
    backdropStyle={}
    modalStyle={}
    header={}
    text={}
/>
```

#### header :
header - which one can customize the headertext
```
header={props}
```

#### text :
text - which one can customize the text bellow
```
text={props}
```

#### closeModal :
closeModal - Event handler with which one can write logic to close the modal.

#### modalStyle :
With which one can customize the styling of visible modal window.
```
modalStyle={{ backgroundColor: '#303245', color: 'white' }}
```

#### modalStyle :
With which one can customize the styling of the backdrop of modal window.
```
backdropStyle={{ backgroundColor: 'rgba(21, 23, 43, 0.65)' }}
```

#### headerStyle :
With which one can customize the styling of the header.
```
headerStyle={{ color: 'white', backgroundColor: '#15172b', padding: '10px', borderBottom:'2px solid #08d', background: 'linear-gradient(to right, #08d 10%, #303245 90%)' }}
```

#### Mode informations :

To show or hide your modal window i recommand this method. Add this in your parent component :

```
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false)

```

The modal is visible, you can pass a function to close the modal in order to close the modal from within the modal :

```
{modal && (
    <Modal
        closeModal={closeModal}
        backdropStyle={{ custom inline style }}
        modalStyle={{ custom inline style}}
        headerStyle={{ custom inline style}}
        header='header text'
        text='text'
    />
)}
```