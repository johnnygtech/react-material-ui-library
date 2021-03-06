import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogProps, DialogTitle } from '@material-ui/core';

const SimpleDialog: React.FC<IProps & DialogProps> = (props) => {
    const { title, content, textColor = 'textPrimary' } = props;
    return (
        <Dialog {...props}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText color={textColor}>{content}</DialogContentText>
            </DialogContent>
            <DialogActions>{props.children}</DialogActions>
        </Dialog>
    )
}

export default SimpleDialog;

interface IProps {
    title: string;
    content: string;
    textColor?: 'textPrimary' | 'textSecondary' | 'primary' | 'secondary'
}