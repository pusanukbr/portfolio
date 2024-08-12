import spriteUrl from '../img/sprite/sprite.svg';

const Icon = ({ name, width, height }) => {
    return (
        <svg width={width || "auto"} height={height || "auto"} className={`fill-grey`}>
            <use href={`${spriteUrl}#${name}`} />
        </svg>
    );
};

export default Icon;