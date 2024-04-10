interface IBackOverlayProps {
    backdropVisibility: boolean
}

function BackOverlay({ backdropVisibility }: IBackOverlayProps) {
    return (
        <div
            className={`fixed -z-10 inset-0 bg-stone-700 bg-opacity-75 transition-opacity ${backdropVisibility ? 'visible' : 'invisible bg-opacity-0'} transition-all`}
            aria-hidden='true'
        >
        </div>
    )
}

export default BackOverlay