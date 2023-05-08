
interface Props {}

function DeskPattern(props: Props) {
    const {} = props

    return (
        <div className="w-full  flex self-center justify-center">
            <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                    <path fill="#ffffff89"d="M0 8h196v1H0zM248 8h196v1H248z"/>
                    <g transform="translate(212)"fill="#CEE3E9">
                        <rect width="6" height="16" rx="3"/>
                        <rect x="14" width="6" height="16" rx="3"/>
                        </g>
                    </g>
             </svg>
        </div>
    )
}

export default DeskPattern
