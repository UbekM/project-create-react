import { useState } from "react"

export const SwitchComp = () => {
    const [activeStatus, setActiveStatus] = useState(null);

    const ControlFunc = () => {
        switch (activeStatus) {
            case "id1":
                return (
                    <div>
                    This is the id1 element
                    </div>
                )
                case "id2":
                    return (
                        <div>
                        This is the id2 element
                        </div>
                    )
                    case "id3":
                        return (
                            <div>
                            This is the id3 element
                            </div>
                        )
        }
    }
    return (
        <>
        <button onClick={() => setActiveStatus("id1")}>Button 1</button>
        <button onClick={() => setActiveStatus("id2")}>Button 2</button>
        <button onClick={() => setActiveStatus("id3")}>Button 3</button>
        <div>
            {ControlFunc}
        </div>
        </>
    )
}        
