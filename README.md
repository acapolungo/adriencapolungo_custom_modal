# A simple & lightweight method to display custom modal pop up.

adrienc_custom_modal_popup is a quite simple modal, with content box and close button. By default the modal window is screen's centered horizontaly and verticaly. It's really easy to customize it with all sorts of props.

## Link to npm :

You can install adrienc_custom_modal_popup with npm:
My React component : npm

### Installation

npm install adrienc_custom_modal_popup

### How to
```
import { Modal } from 'adrienc_custom_modal_popup';
```

Then you can use and customize the component :

```
<Modal 
    zindex={}
    modal={}
    onClose={}
    backdropStyle={}
    modalStyle={}
    header={}
    text={}
/>
```

#### z-index :
You can access the background className with props :
```
zindex={z-10}
```

#### header :
header - which one can customize the header
```
header={props}
```

#### text :
text - which one can customize the text
```
text={props}
```
#### modal :
modal - Boolean property which will decide wheather the modal is open or not.

#### modalStyle :
modalStyle - With which one can customize the styling of visible modal window.
```
modalStyle={{ backgroundColor: '#303245', color: 'white' }}
```

#### modalStyle :
backdropStyle - With which one can customize the styling of the backdrop of modal window.
```
backdropStyle={{ backgroundColor: 'rgba(21, 23, 43, 0.65)' }}
```
#### modalStyle :
onClose - Event handler with which one can write logic to close the modal.

#### Mode informations :

To show or hide your modal window i recommand this method. Add this in your parent component :

```
const [modal, setModal] = useState(false);
const handleClick = () => {
    setModal(true);
    };

```

And to hide your modal use close button :

```
{modal && (
    <Modal
        modal={modal}
        onClose={() => setModal(false)}
        backdropStyle={{ custom inline style }}
        modalStyle={{ custom inline style}}
        header='Your Header'
        text='Your text'
    />
)}
```