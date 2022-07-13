
import classes from '../Contacts/Contacts.module.css'

const Contacts = () => {
    return (
        <>
            <div className={classes.mainContactsBlock}>
                <div className={classes.mainContactsBlockChild}>
                    <span>My Contacts</span>
                    <form action="" className={classes.contactsFormBlock}>
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                        <textarea name="" id=""></textarea>
                    </form>
                    <button>Send</button>
                </div>
            </div>
            <div className={classes.mainFooterBlock}>
                <div className={classes.footerBlockChild}>
                    <span>Илья Габ</span>
                    <div className={classes.footerSocialNetworksBlock}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <span>2022 Все права защищены</span>
                </div>
            </div>
        </>
    )
}

export default Contacts