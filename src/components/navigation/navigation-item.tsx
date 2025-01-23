
interface Props {
    menuItemName: string;
}

export default function NavigationItem({ menuItemName } : Props) {
    return (
        <>
            <span onClick={() => { console.log('Will try to navigate later...')}}>{menuItemName}</span>       
        </>
    )
}