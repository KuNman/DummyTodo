declare type ButtonProps = {
    text?: string;
    onClick: () => void | Promise<void>;
    className?: string;
}
