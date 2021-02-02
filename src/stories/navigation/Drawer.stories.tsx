import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { NavItem } from '../../components/basic';
import { Drawer } from '../../components/complex';
import { Link } from 'react-router-dom';
import { Settings as SettingsIcon, Email as EmailIcon, CalendarToday as CalendarIcon } from '@material-ui/icons';

// This default export determines where your story goes in the story list
export default {
    title: 'Navigation/Drawer',
    component: Drawer,
    // argTypes: {
    //     variant: {
    //         control: {
    //             type: 'inline-radio',
    //             options: [
    //                 'permanent',
    //                 'persistent',
    //                 'temporary'
    //             ],
    //         }
    //     },
    // }
};

const Template: Story<ComponentProps<typeof Drawer>> = (args) => (
    <Drawer {...args}>
        <NavItem link="/home/email" component={Link} text={'Email'} icon={<EmailIcon />} />
        <NavItem link="/home/system-settings" component={Link} text={'System Settings'} icon={<SettingsIcon />} />
        <NavItem link="/home/calendar" component={Link} text={'Calendar'} icon={<CalendarIcon />} />
    </Drawer>
)

export const Main = Template.bind({});
Main.args = {
    variant: "permanent"
};