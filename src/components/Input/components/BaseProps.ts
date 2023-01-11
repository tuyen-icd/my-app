export interface BaseProps {
    require?: (isRequire) => boolean;
    iconProps?;
    error?: any;
    containerStyle?;
    placeholder?: string;
    value?;
    disable?: boolean;
    leftComponent?: (valueIsNotEmpty, iconStyles) => any;
    rightComponent?: (iconStyles) => any;
    onRightComponentPress?: () => void;
}
