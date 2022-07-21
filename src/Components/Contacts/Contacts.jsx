import classes from '../Contacts/Contacts.module.css'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital } from '@fortawesome/free-regular-svg-icons';
import { faFaceAngry, faFaceDizzy, faFaceFlushed, faFaceFrown, faMailBulk } from '@fortawesome/free-solid-svg-icons';

const Contacts = () => {
    return (
        <>
            <div className={classes.contactsBlock}>
                <span className={classes.contactsBlockTitle}>My Contacts</span>
                <div className={classes.contactsBlockChild}>
                    <div className={classes.contactsLeftBlock}>
                        <h3 className={classes.contactsTitle}>DON'T BE SHY!</h3>
                        <p className={classes.contactsDescription}>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                        <p className={classes.contactsMailme}>
                            <FontAwesomeIcon className={classes.contactsIcon} icon={faMailBulk} />
                            <div className={classes.contactsMailmeInfo}>
                                <span>MAIL ME</span>
                                <span><a href='https://mail.google.com/mail/u/0/#inbox?compose=new'>ilyagab1994@gmail.com</a></span>
                            </div>
                        </p>
                        <span>CALL ME</span>
                        <div className={classes.contactsSocialNetworksBlock}>
                        <span><FontAwesomeIcon className={classes.contactsIcon} icon={faFaceAngry} /></span>
                        <span><FontAwesomeIcon className={classes.contactsIcon} icon={faFaceDizzy} /></span>
                        <span><FontAwesomeIcon className={classes.contactsIcon} icon={faFaceFlushed} /></span>
                        <span><FontAwesomeIcon className={classes.contactsIcon} icon={faFaceFrown} /></span>
                    </div>
                    </div>
                    <div className={classes.contactsRightBlock}>
                        <form action="" className={classes.contactsFormBlock}>
                            <input type="text" name="" id="" />
                            <input type="text" name="" id="" />
                            <textarea name="" id=""></textarea>
                            <button>Send</button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contacts