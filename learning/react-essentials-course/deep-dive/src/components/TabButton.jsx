export default function TabButton({children, onSelect, isSelected = true}) {

    return (
        <li>
            <button className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>
        </li>
    );
}