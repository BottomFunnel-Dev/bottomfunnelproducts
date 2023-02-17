
import React from "react";
import styles from "./GetStarted.module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PopupForm } from "../../CommonComponents/PopupForm/PopupForm";

export const GetStarted = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 700,
        height: 550,
        bgcolor: "background.paper",
        border: "2px solid #000",
        backgorund: "green",
        p: 1,
        borderRadius: 2
    };

    return (
        <div className={styles.getStartedMainOuterDIv}>
            <div className={styles.getStartedMainContentDiv}>
                <h1> Ready to get Started? </h1>
                <p>
                    Join our community of 50,000+ companies of all sizes who use Bottom-Funnel‵s modern SaaS products to make 
                    it fast and easy to delight their customers and employees.Book your Free trials today
                </p>
                <button onClick={handleOpen} > Book Your Free Trial </button>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            <div className={styles.popform}>
                                <PopupForm />
                            </div>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </div>
    );
};

// export default GetStarted;

