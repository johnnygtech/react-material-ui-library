declare module '@jayjonesdev/react-material-ui-library' {
    export interface NavItemProps {
        text: string;
        link: string;
        icon?: JSX.Element;
        disabled?: boolean
    };
    export const NavItem: React.FC<NavItemProps>;

    export const NavDropdownMenu: React.FC<import('@material-ui/core').MenuProps>;
    export const NavDropdownMenuItem: React.FC<import('@material-ui/core').MenuItemProps>;
    export const MultiSelect: React.FC<import('@material-ui/core').TextFieldProps & { readOnly?: boolean }>;

    export interface MenuButtonProps {
        icon?: JSX.Element;
        text?: string;
        color?: 'default' | 'inherit' | 'primary' | 'secondary';
        disabled?: boolean;
        size?: 'large' | 'medium' | 'small';
        children?: any;
        variant?: 'contained' | 'outlined' | 'text';
        ref?: React.RefObject<any>;
    };
    export const MenuButton: React.FC<MenuButtonProps>;

    export interface MenuButtonItemProps {
        color?: 'default' | 'inherit' | 'primary' | 'secondary';
        variant?: 'contained' | 'outlined' | 'text';
    };
    export const MenuButtonItem: React.FC<MenuButtonItemProps & import('@material-ui/core').MenuItemProps>;

    export interface SimpleDialogProps {
        title: string;
        content: string;
        textColor?: 'textPrimary' | 'textSecondary' | 'primary' | 'secondary'
    };
    export const SimpleDialog: React.FC<SimpleDialogProps & import('@material-ui/core').DialogProps>;

    export const Checkbox: React.FC<{ label: string; } & import('@material-ui/core').CheckboxProps>;

    export interface ButtonBarProps {
        children: React.ReactNode;
    };
    export const ButtonBar: React.FC<ButtonBarProps>;

    export interface AccordionProps {
        title: string;
    };
    export const Accordion: React.FC<AccordionProps & import('@material-ui/core').AccordionProps>;

    export const Appbar: React.FC<import('@material-ui/core').AppBarProps>;
    export const Drawer: React.FC<{ drawerWidth?: number } & import('@material-ui/core').DrawerProps>;

    export interface FlyinProps {
        drawerWidth?: number;
        title: string;
        open: boolean;
        onClickAway: () => void;
    };
    export const Flyin: React.FC<FlyinProps & import('@material-ui/core').SlideProps>;

    export const DatePicker: React.FC<import('@material-ui/pickers').KeyboardDatePickerProps>;
    export const TimePicker: React.FC<import('@material-ui/pickers').KeyboardTimePickerProps>;
    export const DateTimePicker: React.FC<import('@material-ui/pickers').KeyboardDateTimePickerProps>;
    export const Select: React.FC<{ readOnly?: boolean } & import('@material-ui/core').TextFieldProps>;
    export const Multiline: React.FC<{ readOnly?: boolean } & import('@material-ui/core').TextFieldProps>;

    export interface FormInputProps {
        label: string;
        name: string;
        inputType: 'text' | 'select' | 'multiselect' | 'checkbox' | 'multiline' | 'date' | 'id' | 'time' | 'datetime' | 'phone';
        type: 'number' | 'text' | 'password' | 'email' | 'date';
        initialValue: string | number | boolean | string[] | Date;
        options?: { value: string; label: string }[];
        disablePast?: boolean;
        clearable?: boolean;
        disableFuture?: boolean;
        minDate?: string;
        dateFormat?: string;
        timeFormat?: string;
        dateTimeFormat?: string;
        readOnly?: boolean;
    }
    export interface FormProps {
        validationSchema: import('yup').ObjectSchema<any>;
        inputs: FormInputProps[];
        color?: 'primary' | 'secondary';
        variant?: 'filled' | 'outlined' | 'standard';
        size?: 'medium' | 'small';
        margin?: 'normal' | 'none' | 'dense';
        buttonVariant?: 'text' | 'outlined' | 'contained';
        buttonText: string[];
        className?: string;
        editable?: boolean;
        onSubmit: (values: { [key: string]: string | number | boolean | string[] | Date }) => void;
    }
    export const Form: React.FC<FormProps>;

    export interface TabBarProps {
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky";
        backgroundColor?: "inherit" | "primary" | "secondary" | "default" | "transparent";
        tabs: { label?: string; icon?: React.ReactElement; id?: string; }[];
        handleChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
    }
    export const TabBar: React.FC<TabBarProps & import('@material-ui/core').TabsProps>;

    export interface SearchboxProps {
        onClear: () => void;
    }
    export const Searchbox: React.FC<SearchboxProps & import('@material-ui/core').TextFieldProps>;

    interface TableColumn {
        label: string;
        dataKey: string;
        numeric?: boolean;
        width: string;
        sort: 'ASC' | 'DESC' | null;
    }
    export interface TableProps {
        columns: ITableColumn[];
        data: any[];
        key?: string;
        onColumnClick: (column: ITableColumn) => void;
        onRowClick: (item: any) => void;
    }
    export const Table: React.FC<TableProps & import('@material-ui/core').TableProps>;

    export interface DividerProps {
        color?: 'primary' | 'secondary';
        size?: number;
    }
    export const Divider: React.FC<DividerProps & import('@material-ui/core').DividerProps>;
}