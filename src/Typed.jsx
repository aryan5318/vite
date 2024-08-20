import { ReactTyped } from "react-typed";

const TypedText = () => {
    return (<>
        <div className="Type">
            

            <ReactTyped
                strings={[
                    "I Am a Student.",
                    "I Am a Programer.",
                    "I Am a Web Developer."
                ]}
                typeSpeed={40}
                backSpeed={50}

                loop
            >

            </ReactTyped>
        </div>
    </>
    );
};

export default TypedText;
