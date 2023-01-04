export interface BaseProps {
    require?: (isRequire) => boolean;
    iconProps?;
    error?: any;
    containerStyle?;
    placeholder?: string;
    value?;
    disable?: boolean;
    leftComponent?: (valueIsNotEmpty, iconStyles, disable) => any;
    rightComponent?: (iconStyles) => any;
    onRightComponentPress?: () => void;
}
