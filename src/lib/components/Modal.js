import React, { useEffect, useRef } from 'react';
import styles from './styles/modal.module.css';

const Modal = ({ zindex='z-10', header, text, modal, onClose, modalStyle, backdropStyle }) => {
    const modalRef = useRef(null);
    useEffect(
        () => {
            if (modal) {
                modalRef.current.classList.add(styles.visible);
            }
            else {
                modalRef.current.classList.remove(styles.visible);
            }
        },
        [
            modal
        ]
    );
    return (
        <React.Fragment>
            <div ref={modalRef} style={backdropStyle} className={`${zindex} ${styles.modal__wrap}`}>
                <button
                    onClick={onClose}
                    style={{ borderRadius: '50%', border: 'none', width: 40, height: 40, position: 'absolute', top: 20, right: 30, margin: '1rem', fontSize: '20px' }}
                    className={styles.close__btn}
                >x</button>
                <div style={modalStyle} className={styles.modal}>
                    <div className="content__header">
                        <h2>{header}</h2>
                    </div>
                    <div className="content__text">
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Modal;